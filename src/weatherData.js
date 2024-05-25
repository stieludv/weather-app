const weatherApi = require('./weatherApi');

const weatherData = (() => {
    let weatherData = {};

    // Store weather data in local storage
    const _saveWeatherDataLocalStorage = (data) => {
        localStorage.setItem('weatherData', JSON.stringify({
            data: data,
            timestamp: new Date().getTime()
        }));
    }

    // Retrieve weather data from local storage
    const _getWeatherDataLocalStorage = () => {
        const storedData = localStorage.getItem('weatherData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const now = new Date().getTime();
            const expirationTime = 3600000; // 1 hour in milliseconds

            // Check if the data is not expired (less than 1 hour old)
            if ((now - parsedData.timestamp) < expirationTime) {
                return parsedData.data;
            }
        }
        return null;
    }

    // Decide to call API, retrieve from local storage, or do nothing
    const _getCurrentWeatherData = async (loc) => {
        if (Object.keys(getData()).length !== 0) {
            return getData();
        }

        const storedData = _getWeatherDataLocalStorage();
        if (storedData) {
            // Object.assign(weatherData, storedData);
            setData(storedData);
            return storedData;
        }

        const apiData = await weatherApi.getData(loc);
        if (apiData) {
            _saveWeatherDataLocalStorage(apiData);
            // Object.assign(weatherData, apiData);
            setData(apiData);
            return apiData;
        }

        throw new Error('Unable to retrieve weather data');
    }

    // Get temperature for a specific day (1, 2, or 3)
    const getTemperature = async (loc, day) => {
        if (day < 1 || day > 3) {
            throw new Error('Day must be between 1 and 3');
        }

        const data = await _getCurrentWeatherData(loc);
        return {
            "average": data.forecast.forecastday[day - 1].day.avgtemp_c,
            "max": data.forecast.forecastday[day - 1].day.maxtemp_c,
            "min": data.forecast.forecastday[day - 1].day.mintemp_c,
        };
    }

    const getData = () => {
        return weatherData;
    }

    const setData = (data) => {
        weatherData = data;
    }

    // Expose necessary functions
    return {
        getTemperature,
        getData,
        setData,
    }
})();

module.exports = {
    temperature: weatherData.getTemperature,
    getWeatherData: weatherData.getData,
    setWeatherData: weatherData.setData,
}

// Usage Example:
// weatherData.getTemperature('London', 1).then(temp => console.log('Temperature:', temp));
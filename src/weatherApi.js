const weatherData = require('./weatherData');

const getData = async (loc) => {
    // Fetch weather data from the API
    const _getWeatherDataAPI = async (loc) => {
        console.log("Fetching weather data via weatherApi.js");
        const apiKey = 'f08318bcb5ba43c7bb1210416240605'; // Replace with your weatherapi.com API key
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${loc}&days=3`;
        
        try {
            const response = await fetch(url, {
                mode: 'cors'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    const data = await _getWeatherDataAPI(loc);
    return data;
};


module.exports = {
    getData,
}
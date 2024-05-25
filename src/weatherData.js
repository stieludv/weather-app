// set location
// get location
// does api stuff / get data in here
// get temp
// get ??
// get ??
// get ??



const weatherData = (() => {
    const weatherData = {};

    // Store weather data in browser local cache 
    // Don't run API unless needed
    // Always check if weatherData is populated with current data
    // If not, check local storage, if not call API functions 

    const _getWeatherDataAPI = async (loc) => {
        return loc;
    }

    const _getWeatherDataJSON = async (data) => {
        return data;
    }

    // Function to store weatherData in localstorage
    const _getWeatherDataLocalStorage = async () => {
        
    }

    // Function to check storage and decide to call API, retrieve from localstorage or do nothing
    // Before returning current weatherData
    const _getCurrentWeatherData = () => {

    }


    // We can have seperate functions for each thing we want to get from data
    // Such as temperature and for which day
    // Every such function will call _getCurrentWeatherData which will memo and save on API calls
    const getTemperature = (day) => {
        if (day <= 3 && day > 0) {

        }
    }

    // Where should I be checking the input such as (day)? 

    return {
        getWeather,
    }
})();

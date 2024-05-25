import './style.css';
const weatherData = require('./weatherData');

weatherData.temperature('Uppsala', 1)
    .then(temp => console.log('Temperature:', temp))
    .then(console.log(weatherData.getWeatherData()))
    .catch(err => console.error(err));


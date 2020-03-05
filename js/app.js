const forecast = {
    icon: 'clouds.svg',
    type: 'Cloudly Skies',
    location: 6,
    temperature: '',

    getForecast: function() {
        getWeatherFromApi();
    }
}

const icon = document.querySelector('.weather-icon');
const type = document.querySelector('.weather-type');
const weatherLocation = document.querySelector('.location');
const temperature = document.querySelector('.temperature span');

if (forecast) {
    icon.src = 'images/' + forecast.icon;
    type.textContent = forecast.type;
    weatherLocation.textContent = forecast.location;
    temperature.textContent = forecast.temperature;
}
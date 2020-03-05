function getWeatherFromApi() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Krakow,pl&units=metric&appid=be45fea377f32d5e3f469489e86cdfc2')
    .then(res => res.json())
    .then(res => {
        type.textContent = res.weather[0].main;
        temperature.textContent = res.main.temp;
        weatherLocation.textContent = res.name + ', ' + res.sys.country;
        icon.style.display = 'none';
    })
}
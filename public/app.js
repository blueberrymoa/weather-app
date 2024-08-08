import { getWeather } from './weatherService.js';

document.getElementById('get-weather').addEventListener('click', async () => {

    const location = document.getElementById('city-input').value;
    const icon = document.querySelector('.weather-icon');

    try {

        const data = await getWeather(location);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "mph";

        switch (data.weather[0].main) {
            case "Clouds":
                icon.src = "images/clouds.png";
                break;
            case "Clear":
                icon.src = "images/clear.png";
                break;
            case "Rain":
                icon.src = "images/rain.png";
                break;
            case "Drizzle":
                icon.src = "images/drizzle.png";
                break;
            case "Mist":
                icon.src = "images/mist.png";
                break;
        }

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
});
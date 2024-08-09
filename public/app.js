import { getWeather } from './weatherService.js';

const getWeatherData = async () => {
    const location = document.getElementById('city-input').value;
    const icon = document.querySelector('.weather-icon');

    try {
        const data = await getWeather(location);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " mph";

        //Images from freepik.com
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

        document.querySelector(".weather").style.display = "block";

        // Fetch and display the 3-day forecast here (You will need an API call for this)
        // For example:
        // const forecastData = await getForecast(location); // You need to implement getForecast function
        // Update the forecastContainer with forecastData

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
};

document.getElementById('get-weather').addEventListener('click', getWeatherData);

document.getElementById('city-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeatherData();
    }
});

document.getElementById('toggle-forecast').addEventListener('click', () => {
    const forecastContainer = document.getElementById('forecast');
    const container = document.querySelector('.container');

    container.classList.toggle('expanded'); // Expand the container
    forecastContainer.classList.toggle('show'); // Show the forecast content
});
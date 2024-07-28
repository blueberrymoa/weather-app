import { getWeather, getForecast } from './weatherService.js';
import { createForecastList } from './forecastList.js';
import { createWeatherCard } from './weatherCard.js';

document.getElementById('get-weather').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value.trim();
    const state = document.getElementById('state-select').value;

    if (!city || !state) {
        alert('Please enter both city and state.');
        return;
    }

    const location = `${encodeURIComponent(city)},${encodeURIComponent(state)}`;

    try {
        const weatherData = await getWeather(location);
        createWeatherCard(weatherData);

        const forecastData = await getForecast(location);
        createForecastList(forecastData.forecast.forecastday);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
});
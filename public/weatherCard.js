export const createWeatherCard = (weatherData) => {
    const weatherContainer = document.getElementById('current-weather');
    weatherContainer.innerHTML = ''; // Clear any existing content

    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';
    
    const city = weatherData.location.name;
    const temperature = `${weatherData.current.temp_f}°F`;
    const description = weatherData.current.condition.text;
    const iconUrl = weatherData.current.condition.icon;
    
    weatherCard.innerHTML = `
        <div class="weather-city">${city}</div>
        <div class="weather-temp">${temperature}</div>
        <div class="weather-desc">${description}</div>
        <img src="${iconUrl}" alt="Weather icon" class="weather-icon">
    `;
    
    weatherContainer.appendChild(weatherCard);
};
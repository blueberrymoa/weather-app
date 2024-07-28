export const createForecastList = (forecasts) => {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = ''; // Clear any existing content

    forecasts.forEach((forecast) => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        
        const date = forecast.date;
        const temperature = `${forecast.day.avgtemp_f}°F`;
        const description = forecast.day.condition.text;
        const iconUrl = forecast.day.condition.icon;
        
        forecastItem.innerHTML = `
            <div class="forecast-date">${date}</div>
            <div class="forecast-temp">${temperature}</div>
            <div class="forecast-desc">${description}</div>
            <img src="${iconUrl}" alt="Weather icon" class="forecast-icon">
        `;
        
        forecastContainer.appendChild(forecastItem);
    });
};
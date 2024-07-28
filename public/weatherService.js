import axios from 'https://cdn.skypack.dev/axios';

const API_KEY = '279161a496mshe38ca27abef4d82p1d6b0cjsn512fe72fb703'; 
const BASE_URL = 'https://weatherapi-com.p.rapidapi.com';

const headers = {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': API_KEY,
};

export const getWeather = async (location) => {
    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: { q: location },
            headers: headers
        });
        console.log('Weather data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
        throw error;
    }
};

export const getForecast = async (location) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast.json`, {
            params: { q: location, days: 4 },
            headers: headers
        });
        console.log('Forecast data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
        throw error;
    }
};
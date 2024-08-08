const API_KEY = 'Your_API_Key';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial';

export const getWeather = async (location) => {

    try {
        const response = await fetch(`${API_URL}&q=${location}&appid=${API_KEY}`);
        var data = await response.json();
        console.log('Weather data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        if (error.response) {
            console.error('Response data:', error.data);
        }
        throw error;
    }

};
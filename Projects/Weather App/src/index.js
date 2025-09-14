import './style.css';
import { createWeatherData } from './weather_data.js';
import { renderResult } from './result.js';

const key = 'P9P6EXFAGTNXWY3A4B3937LTK';
const base_url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const container = document.querySelector('.container');
container.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = container.querySelector('.input_field');
    const url = base_url + input.value + '?key=' + key;
    const weather_data = await createWeatherData(url);
    renderResult(
        weather_data.error,
        input.value,
        weather_data.temperature,
        weather_data.fellslike,
        weather_data.humidity,
        weather_data.wind,
    );
});
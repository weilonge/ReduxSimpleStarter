import axios from 'axios';

const API_KEY = '25416282c6748473401945f0478cdc4e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const country = 'tw';
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}


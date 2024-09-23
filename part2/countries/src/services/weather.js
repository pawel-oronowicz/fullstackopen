import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY

const getWeatherForLatLng = (lat, lon) => {
  const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`)
  return request.then(response => response.data)
}

export default { getWeatherForLatLng }
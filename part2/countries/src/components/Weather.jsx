import { useState, useEffect } from "react";
import weatherService from "../services/weather";

const Weather = ({ name, lat, lon }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        weatherService
        .getWeatherForLatLng(lat, lon)
        .then(returnedWeather => {
            setWeather(returnedWeather)
        })
    }, [lat, lon])

    return (
        <div>
            <h2>Weather in {name}</h2>
            {weather === null ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>temperature {weather.main.temp} Celsius</p>
                    <p>
                        <img 
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                        alt={`Weather in ${name}`}
                        />
                    </p>
                    <p>wind {weather.wind.speed} m/s</p>
                </div>
            )
            }
        </div>
    )
}

export default Weather
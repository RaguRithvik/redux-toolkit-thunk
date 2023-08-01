import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchweather } from './feature/WeatherSlice';
import { addSearchHistory } from './feature/WeatherSlice';
export const Thunk = () => {
    const dispatch = useDispatch();
    const wearther = useSelector((state) => state.weather.weather)
    const searchHistory = useSelector((state) => state.weather.searchHistory);

    const [data, setData] = useState();
    const checkWeather = () => {
        dispatch(fetchweather(data))
        dispatch(addSearchHistory([...searchHistory, data]))
    }
    return (
        <div>
            <input type="text" onChange={(e) => {
                setData(e.target.value)
            }} />
            <button onClick={() => checkWeather(data)}>Check Weather</button>
            
            <h3>Name: {wearther?.name}</h3>
            <h3>Tempature: {wearther?.main ? Math.round(wearther?.main?.temp) : 0} <sup>o</sup>C</h3>

            <img src={`https://openweathermap.org/img/wn/${wearther?.weather ? wearther?.weather[0]?.icon : "10d@2x"}.png`} alt="" style={{ background: "#000" }} />
        </div>
    )
}

import { configureStore } from "@reduxjs/toolkit";
import HistoryReducer from "./HistorySlice";
import weatherReducer from "./WeatherSlice"
export const store = configureStore({
    reducer: {
        history: HistoryReducer,
        weather: weatherReducer
    }
})
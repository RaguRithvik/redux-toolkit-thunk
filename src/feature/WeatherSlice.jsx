import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiUrl from "../ApiUrl";
import { key } from "../Key";

const initialState = {
    weather: {},
    searchHistory:[]
}

export const fetchweather = createAsyncThunk(
    "fetching/weather", async (data) => {
        const response = await ApiUrl.get(`?q=${data}&appid=${key}&units=metric`)
        return response.data
    }
)
export const WeatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        addSearchHistory: (state, { payload }) => {
            state.searchHistory = payload
        }
    },
    extraReducers: {
        [fetchweather.pending]: () => {
            console.log("pending")
        },
        [fetchweather.fulfilled]: (state, { payload }) => {
            return {
                ...state, weather: payload
            }
        },
        [fetchweather.rejected]: () => {
            console.log("rejected")
        },
    }
})

export const { addSearchHistory } = WeatherSlice.actions;
export default WeatherSlice.reducer
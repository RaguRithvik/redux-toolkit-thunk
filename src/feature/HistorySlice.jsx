import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history: []
}

export const HistorySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        addHistory: (state, { payload }) => {
            state.history = payload
        }
    }
})

export const { addHistory } = HistorySlice.actions;
export default HistorySlice.reducer
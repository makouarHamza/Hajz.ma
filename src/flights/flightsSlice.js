import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    flights: [],
    status: "idle",
    error: null
}

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {},
    extraReducers(builder) {
        // Add async thunks here in the future
    }

})
export default flightsSlice.reducer;
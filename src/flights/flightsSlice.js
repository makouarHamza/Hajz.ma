import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    flights: [],
    status: "idle",
    error: null
}
const FLIGHTS_URL = "http://localhost:8000/flights"

export const getDataFlights = createAsyncThunk("flights/getDataFlights", async () => {
    const response = await axios.get(FLIGHTS_URL);
    return response.data;
})

export const addFlight = createAsyncThunk("flights/addFlight", async (addedFlight) => {
    const response = await axios.post(FLIGHTS_URL, addedFlight)
    return response.data
})

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getDataFlights.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(getDataFlights.fulfilled, (state, action) => {
            state.status = 'succeeded'
        })
        .addCase(getDataFlights.rejected, (state, action) => {
            state.error = action.error.message
        })

        .addCase(addFlight.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.flights.push(action.payload)
        })
    }

})
export default flightsSlice.reducer;
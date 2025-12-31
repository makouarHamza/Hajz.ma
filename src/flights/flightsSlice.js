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

export const deleteFlight = createAsyncThunk("flights/deleteFlight", async(id) => {
    const response = await axios.delete(`${FLIGHTS_URL}/${id}`);
    return id
})

export const editFlight = createAsyncThunk("flights/editFlight", async(updatedFlight) => {
    const response = await axios.put(`${FLIGHTS_URL}/${updatedFlight.id}`, updatedFlight);
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
            state.flights = action.payload
        })
        .addCase(getDataFlights.rejected, (state, action) => {
            state.error = action.error.message
        })

        .addCase(addFlight.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.flights.push(action.payload)
        })
        .addCase(deleteFlight.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.flights = state.flights.filter(flight => flight.id !== action.payload);
        })
        .addCase(editFlight.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const indexToEdit = state.flights.findIndex(flight => flight.id === action.payload.id )
            if(indexToEdit !== -1){
                state.flights[indexToEdit] = action.payload
            }
        })
    }

})
export default flightsSlice.reducer;
export const selectAllFlights = (state) => state.flights.flights;
export const flightStatus = (state) => state.flights.status;
export const flightError = (state) => state.flights.error;
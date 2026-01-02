import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    cars : [],
    status: 'idle',
    error: null
};

const CARS_URL  = "http://localhost:8000/cars";

export const getDataCars = createAsyncThunk('cars/getDataCars',async () => {
    const response = await axios.get(CARS_URL)
    return response.data;
})

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getDataCars.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getDataCars.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
        builder.addCase(getDataCars.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.cars = action.payload
        })
    }
})
export default carsSlice.reducer;
export const selectAllCars = (state) => state.cars.cars;
export const getCarsStatus = (state) => state.cars.status;
export const getCarsError = (state) => state.cars.error;
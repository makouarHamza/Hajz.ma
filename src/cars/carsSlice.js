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

export const addCars = createAsyncThunk("cars/addCars", async (obj) => {
    const response = await axios.post(CARS_URL,obj)
    return response.data
})

export const deleteCars = createAsyncThunk("cars/deleteCars", async (id) => {
    const response = await axios.delete(`${CARS_URL}/${id}`)
    return id
})

export const editCars = createAsyncThunk("cars/editCars", async (obj) => {
    const response = await axios.put(`${CARS_URL}/${obj.id}`, obj)
    return response.data
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
        builder.addCase(addCars.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.cars.push(action.payload)
        })
        builder.addCase(deleteCars.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.cars = state.cars.filter(car => car.id !== action.payload)
        })
        builder.addCase(editCars.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            if (index !== -1) {
                state.cars[index] = action.payload;
            }
        })
    }
})
export default carsSlice.reducer;
export const selectAllCars = (state) => state.cars.cars;
export const getCarsStatus = (state) => state.cars.status;
export const getCarsError = (state) => state.cars.error;
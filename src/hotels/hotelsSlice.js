import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    hotels:[],
    status:"idle",
    error:null
}

const HOTEL_URL = "http://localhost:8000/hotels"

export const getDataHotels = createAsyncThunk("hotels/getDataHotels",async ()=>{
    try{
        const response = await axios.get(HOTEL_URL)
        return response.data
    }
    catch(err){
        return err.message
    }
})

const hotelsSlice = createSlice({
    name:'hotels',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getDataHotels.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(getDataHotels.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.hotels = state.hotels.concat(action.payload)
        })
        .addCase(getDataHotels.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})
export default hotelsSlice.reducer
export const allHotelsData = (state) => state.hotels.hotels
export const hotelStatus = (state) => state.hotels.status
export const hotelError = (state) => state.hotels.error
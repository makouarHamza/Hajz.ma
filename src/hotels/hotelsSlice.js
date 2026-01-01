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

export const deleteHotel = createAsyncThunk("hotels/deleteHotel", async (id) =>{
    console.log("Attempting to delete at:", `${HOTEL_URL}/${id}`);
    const response = await axios.delete(`${HOTEL_URL}/${id}`);
    return id
})

export const addHotel = createAsyncThunk("hotels/addHotel", async (addedHotel)=>{
    const response = await axios.post(HOTEL_URL,addedHotel)
    return response.data
})

export const editHotel = createAsyncThunk("hotels/editHotel", async (editedHotel) => {
    const response = await axios.put(`${HOTEL_URL}/${editedHotel.id}`, editedHotel);
    return response.data;
})

export const addCommentToHotel = createAsyncThunk("hotels/addCommentToHotel", async ({comment, existingHotel}) => {
    const updatedComment = [...existingHotel.commentaires, comment]
    const response = await axios.patch(`${HOTEL_URL}/${existingHotel.id}`,{commentaires: updatedComment});
    return response.data;
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
            state.hotels = action.payload;
        })
        .addCase(getDataHotels.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(deleteHotel.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.hotels = state.hotels.filter(hotel => hotel.id !== action.payload);
        })
        .addCase(addHotel.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.hotels.push(action.payload)
        })
        .addCase(editHotel.fulfilled, (state, action) => {
            state.status = 'succeeded';
    
            // Find the index of the hotel being updated
            const indexToEdit = state.hotels.findIndex(hotel => hotel.id === action.payload.id);
            
            if (indexToEdit !== -1) {
                // Correct way: Replace the item at that index with the new data
                state.hotels[indexToEdit] = action.payload;
            }
        })
        .addCase(addCommentToHotel.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const indexToEdit = state.hotels.findIndex(hotel => hotel.id === action.payload.id);
            if (indexToEdit !== -1) {
                state.hotels[indexToEdit] = action.payload;
            }
        })
        
    }
})
export default hotelsSlice.reducer
export const allHotelsData = (state) => state.hotels.hotels
export const hotelStatus = (state) => state.hotels.status
export const hotelError = (state) => state.hotels.error
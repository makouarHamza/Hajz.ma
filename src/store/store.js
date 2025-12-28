import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from '../hotels/hotelsSlice'
export const store = configureStore({
    reducer:{
        hotels:hotelReducer
    }
})
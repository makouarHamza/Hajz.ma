import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from '../hotels/hotelsSlice'
import flightReducer from '../flights/flightsSlice'

export const store = configureStore({
    reducer:{
        hotels: hotelReducer,
        flights: flightReducer
    }
})
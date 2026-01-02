import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from '../hotels/hotelsSlice'
import flightReducer from '../flights/flightsSlice'
import carReducer from '../cars/carsSlice'

export const store = configureStore({
    reducer:{
        hotels: hotelReducer,
        flights: flightReducer,
        cars: carReducer
    }
})
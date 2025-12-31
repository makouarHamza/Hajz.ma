import { useDispatch, useSelector } from "react-redux";
import { flightError, flightStatus, getDataFlights, selectAllFlights } from "./flightsSlice";

import { useEffect } from "react";
import FlightCard from "./flightCard";

function FlightsList() {
    const flightsData = useSelector(selectAllFlights);
    const error = useSelector(flightError)
    const status = useSelector(flightStatus);
    const dispatch = useDispatch();

    useEffect(function(){
            if(status === 'idle'){
                dispatch(getDataFlights())
            }
            
    },[dispatch, status])

    let content = "";
    if(status === "loading"){
      content = <p>loading...</p>
    } else if(status === "succeeded"){
      content = flightsData.map((flight, index) => <FlightCard key={index} flight={flight}/>)
    } else if(status === "failed"){
      content = <p>{error}</p>
    }
    return(
    <>
    <div className='container py-5'>
        <h2 className='mb-4 fw-bold'>Available Flights</h2>
        {content}
    </div>
    </>
    )
    
}
export default FlightsList;
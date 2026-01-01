import { useDispatch, useSelector } from "react-redux";
import { flightError, flightStatus, getDataFlights, selectAllFlights } from "./flightsSlice";

import { useEffect, useState } from "react";
import FlightCard from "./flightCard";
import { MapPin } from "lucide-react";

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
    const [filteredFlights,setFilteredFlights] = useState([])

    let content = "";
    if(status === "loading"){
      content = <p>loading...</p>
    } else if(status === "succeeded"){
      content = (filteredFlights.length > 0 ? filteredFlights : flightsData).map((flight, index) => <FlightCard key={index} flight={flight}/>)
    } else if(status === "failed"){
      content = <p>{error}</p>
    }
    const [airLine,setAirLine] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(airLine.trim().length !== 0){
            setFilteredFlights(flightsData.filter((flight) => flight.airline.trim().toLowerCase().includes(airLine.trim().toLowerCase())))
        }

        
        

    }

    const handlerSearch = (e) => {
      setAirLine(e.target.value)
        setFilteredFlights(flightsData.filter((flight) => flight.airline.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())))
    }
    const handlerReset = () => {
        setAirLine("")
        setFilteredFlights([])
    }
    return(
    <>
    <div className="card p-4 mb-4 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="airLine" className="form-label small fw-bold">Aire Line</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <MapPin size={18} className="text-secondary" />
              </span>
              <input
                type="search"
                id="airLine"
                className="form-control border-start-0"
                placeholder="search with air Line"
                value={airLine}
                onChange={handlerSearch}
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
            {filteredFlights.length === 0 && airLine.length > 0 ? <div>
              <p className='alert alert-danger'>No Flight available with Air Line : {airLine}</p>
            </div> :""}
          <button type="submit" className="btn btn-primary px-4">
            Search Hotels
          </button>
          <button type='reset' onClick={handlerReset} className="btn btn-secondary px-2 m-1">
            Reset
          </button>
        </div>
      </form>
    </div>
    <div className='container py-5'>
        <h2 className='mb-4 fw-bold'>Available Flights</h2>
        {content}
    </div>
    </>
    )
    
}
export default FlightsList;
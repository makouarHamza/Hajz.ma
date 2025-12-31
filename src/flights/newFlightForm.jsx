import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addFlight, editFlight, selectAllFlights } from './flightsSlice';
import { useNavigate, useParams } from 'react-router-dom';

const AddFlightForm = () => {
  const [flightData, setFlightData] = useState({
    airline: '',
    flightNumber: '',
    depTime: '',
    depAirport: '',
    depDate: '',
    arrTime: '',
    arrAirport: '',
    arrDate: '',
    duration: '',
    stops: '0',
    cabinClass: 'Economy',
    price: 0
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { idToEdit } = useParams();

  const existingFlight = useSelector(selectAllFlights).find(flight => flight.id === idToEdit);
  useEffect(function(){
    if(existingFlight){
      setFlightData(existingFlight)
    }
  },[existingFlight, idToEdit])

  function onChangeAireLine(e){
    setFlightData({...flightData, airline:e.target.value})
  }
  function onChangeFlightNumber(e){
    setFlightData({...flightData, flightNumber:e.target.value})
  }
  function onChangeDepTime(e){
    setFlightData({...flightData, depTime:e.target.value})
  }
  function onChangeDepAirport(e){
    setFlightData({...flightData, depAirport:e.target.value})
  }
  function onChangeDepDate(e){
    setFlightData({...flightData, depDate:e.target.value})
  }
  function onChangeArrTime(e){
    setFlightData({...flightData, arrTime:e.target.value})
  }
  function onChangeArrAirport(e){
    setFlightData({...flightData, arrAirport:e.target.value})
  }
  function onChangeArrDate(e){
    setFlightData({...flightData, arrDate:e.target.value})
  }
  function onChangeDuration(e){
    setFlightData({...flightData, duration:e.target.value})
  }
  function onChangeStops(e){
    setFlightData({...flightData, stops:e.target.value})
  }
  function onChangeCabinClass(e){
    setFlightData({...flightData, cabinClass:e.target.value})
  }
  function onChangePrice(e){
    setFlightData({...flightData, price:e.target.value})
  }

  const hideForm = () => {
      navigate(-1);
      resetForm();
  }  
  
  const resetForm = () => {
    setFlightData({
        airline: '',
        flightNumber: '',
        depTime: '',
        depAirport: '',
        depDate: '',
        arrTime: '',
        arrAirport: '',
        arrDate: '',
        duration: '',
        stops: '0',
        cabinClass: 'Economy',
        price: 0
    })    
  }

  function handleSubmit(e){
    e.preventDefault();
    if(flightData.airline.trim().length ==0 ||
      flightData.arrDate.trim().length ==0 ||
      flightData.depTime.trim().length ==0 ||
      flightData.depAirport.trim().length ==0 ||
      flightData.arrAirport.trim().length ==0 ||
      flightData.stops.trim().length ==0
      ){
      alert("all field required")
      return
    }
    if(idToEdit){
      dispatch(editFlight(flightData))
      alert("Flight Edited successfully!")
    }else{
      dispatch(addFlight(flightData));
      alert("Flight added successfully!")
    }
    resetForm();
    navigate("/manageFlights")
  }


  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card border-0 shadow-lg p-4" style={{ width: '100%', maxWidth: '550px', borderRadius: '12px' }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold m-0">{idToEdit?"Edit Flight":"Add New Flight"}</h5>
          <button onClick={hideForm} className="btn btn-link text-muted p-0"><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Top Row: Airline & Flight Number */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label fw-bold small">Airline</label>
              <input value={flightData.airline} onChange={onChangeAireLine} type="text" className="form-control bg-light border-0 py-2" placeholder="e.g., Emirates" />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold small">Flight Number</label>
              <input value={flightData.flightNumber} onChange={onChangeFlightNumber} type="text" className="form-control bg-light border-0 py-2" placeholder="e.g., EK205" />
            </div>
          </div>

          {/* Departure Information Section */}
          <h6 className="fw-bold mb-3">Departure Information</h6>
          <div className="row mb-4">
            <div className="col-4">
              <label className="form-label text-muted small fw-bold">Time</label>
              <input value={flightData.depTime} onChange={onChangeDepTime} type="text" className="form-control bg-light border-0 py-2" placeholder="08:00" />
            </div>
            <div className="col-4">
              <label className="form-label text-muted small fw-bold">Airport Code</label>
              <input value={flightData.depAirport} onChange={onChangeDepAirport} type="text" className="form-control bg-light border-0 py-2" placeholder="JFK" />
            </div>
            <div className="col-4">
              <label className="form-label text-muted small fw-bold">Date</label>
              <input value={flightData.depDate} onChange={onChangeDepDate} type="text" className="form-control bg-light border-0 py-2" placeholder="Jan 15" />
            </div>
          </div>

          <hr className="text-muted opacity-25" />

          {/* Arrival Information Section */}
          <h6 className="fw-bold mb-3">Arrival Information</h6>
          <div className="row mb-4">
            <div className="col-4">
              <label className="form-label text-muted small fw-bold">Time</label>
              <input value={flightData.arrTime} onChange={onChangeArrTime} type="text" className="form-control bg-light border-0 py-2" placeholder="20:30" />
            </div>
            <div className="col-4">
              <label className="form-label text-muted small fw-bold">Airport Code</label>
              <input value={flightData.arrAirport} onChange={onChangeArrAirport} type="text" className="form-control bg-light border-0 py-2" placeholder="CDG" />
            </div>
            <div className="col-4">
              <label className="form-label text-muted small fw-bold">Date</label>
              <input value={flightData.arrDate} onChange={onChangeArrDate} type="text" className="form-control bg-light border-0 py-2" placeholder="Jan 15" />
            </div>
          </div>

          {/* Logistics Row: Duration, Stops, Cabin Class */}
          <div className="row mb-4">
            <div className="col-4">
              <label className="form-label fw-bold small">Duration</label>
              <input value={flightData.duration} onChange={onChangeDuration} type="text" className="form-control bg-light border-0 py-2" placeholder="7h 30m" />
            </div>
            <div className="col-4">
              <label className="form-label fw-bold small">Stops</label>
              <input value={flightData.stops} onChange={onChangeStops} type="number" className="form-control bg-light border-0 py-2" placeholder="0" />
            </div>
            <div className="col-4">
              <label className="form-label fw-bold small">Cabin Class</label>
              <select value={flightData.cabinClass} onChange={onChangeCabinClass} className="form-select bg-light border-0 py-2 shadow-none">
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
          </div>

          {/* Price Row */}
          <div className="mb-4">
            <label className="form-label fw-bold small">Price ($)</label>
            <input value={flightData.price} onChange={onChangePrice} type="number" className="form-control bg-light border-0 py-2" placeholder="0" />
          </div>

          {/* Actions */}
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-dark flex-grow-1 py-2 fw-bold" style={{ backgroundColor: '#0a0d14' }}>
              {idToEdit?"Edit":"Add Flight"}
            </button>
            <button onClick={hideForm} type="button" className="btn btn-outline-secondary px-4 py-2 border-opacity-25">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlightForm;
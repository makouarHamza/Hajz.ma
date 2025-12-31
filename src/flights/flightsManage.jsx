import { useDispatch, useSelector } from "react-redux";
import { deleteFlight, flightStatus, getDataFlights, selectAllFlights } from "./flightsSlice";
import { PencilLine, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FlightsManage() {
    const dispatch = useDispatch();
    const flights = useSelector(selectAllFlights);
    const status = useSelector(flightStatus)
    const navigate = useNavigate()
    useEffect(function(){
        if(status === 'idle'){
            dispatch(getDataFlights())
        }
        
    },[dispatch, status])

    const handlerDelete = (id) =>{
        if(window.confirm("Are you sure you want to delete this flight?")){
            dispatch(deleteFlight(id))
        } 
    }


    

    return(
        <>
        <div className="container mt-5">
        
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold m-0">Manage Flights</h4>
            <button onClick={() => navigate("addEditFlight")} className="btn btn-dark d-flex align-items-center gap-2 px-3 py-2 rounded-3 shadow-sm">
            <Plus size={18} /> Add Flight
            </button>
        </div>

        
        <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '12px' }}>
            <div className="table-responsive">
            <table className="table align-middle mb-0">
                <thead className="bg-light">
                <tr style={{ fontSize: '0.9rem', color: '#4a4a4a' }}>
                    <th className="ps-4 py-3 border-0">Flight</th>
                    <th className="py-3 border-0">Route</th>
                    <th className="py-3 border-0">Departure</th>
                    <th className="py-3 border-0">Arrival</th>
                    <th className="py-3 border-0">Price</th>
                    <th className="pe-4 py-3 border-0 text-end">Actions</th>
                </tr>
                </thead>
                <tbody>
                {flights.map((flight) => (
                    <tr key={flight.id} className="border-top">
                    
                    <td className="ps-4 py-3">
                        <div className="fw-normal text-dark">{flight.airline}</div>
                        <div className="text-muted small">{flight.flightNumber}</div>
                    </td>
                    
                    
                    <td className="text-secondary"> {flight.depAirport} → {flight.arrAirport} </td>
                    
                
                    <td>
                        <div className="fw-normal">{flight.depTime}</div>
                        <div className="text-muted small">{flight.depDate}</div>
                    </td>
                    
                    
                    <td>
                        <div className="fw-normal">{flight.arrTime}</div>
                        <div className="text-muted small">{flight.arrDate}</div>
                    </td>
                    
                    
                    <td className="fw-normal text-dark">${flight.price}</td>
                    
                
                    <td className="pe-4 py-3 text-end">
                        <button onClick={() => navigate(`addEditFlight/${flight.id}`)} className="btn btn-light btn-sm border me-2 shadow-sm" style={{ padding: '6px 8px' }}>
                        <PencilLine size={16} className="text-dark" />
                        </button>
                        <button onClick={() => handlerDelete(flight.id)} className="btn btn-danger btn-sm shadow-sm" style={{ padding: '6px 8px' }}>
                        <Trash2 size={16} />
                        </button>
                    </td>
                    </tr>
                ))}
                
                </tbody>
            </table>
            </div>
        </div>
        </div>
  
        </>
    )
}
export default FlightsManage;
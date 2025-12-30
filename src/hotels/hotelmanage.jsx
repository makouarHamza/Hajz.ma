import { PencilLine, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allHotelsData, getDataHotels, hotelError, hotelStatus } from "./hotelsSlice";
import { useEffect } from "react";

function HotelManage(){
    const hotelData = useSelector(allHotelsData);
    const status = useSelector(hotelStatus);
    const error = useSelector(hotelError);
    const dispatch = useDispatch();

    useEffect(function(){
        if(status === 'idle') {
            dispatch(getDataHotels())
        }
    },[dispatch])

    let tabelContent = ''
    if(status === 'loading'){
        tabelContent = <tr><td colSpan={6}>loading...</td></tr>
    } else if(status === 'succeeded'){
        tabelContent = hotelData.map((hotel, index) => 
            <tr key={index}>
                <td className="fw-medium text-secondary">{hotel.nameHotel}</td>
                <td>{hotel.city}</td>
                <td>{hotel.rating}</td>
                <td className="fw-bold">${hotel.price}</td>
                <td className="text-muted small"> {hotel.amenities.join(', ')}</td>
                
                <td className="text-end">
                    <button className="btn btn-outline-secondary btn-sm me-2 border-light-subtle">
                        <PencilLine size={16} className="text-dark" />
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <Trash2 size={16} />
                    </button>

                </td>
            </tr>

        )
    } else if(status === 'failed') {
        tabelContent = <tr> {error} </tr>
    }
    return(
        <>
        <div className="space-y-6">
            <div style={{display:'flex',justifyContent:'space-around'}}>
                
                <div>
                    <h2 className='mb-4 fw-bold'>Mange hotel</h2>
                </div>
                <div>
                    <Link className="btn btn-dark" >
                    <Plus className="size-4 mr-2"/> 
                    &nbsp;&nbsp; Add Hotel
                    </Link>
                </div>
            </div>
            
            <div className="container mt-5 shadow-sm p-3 mb-5 bg-white rounded">
                <div className="table-responsive">
                    <table className="table align-middle table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Price</th>
                                <th scope="col">Amenities</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabelContent}   
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default HotelManage
import { use, useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { allHotelsData, getDataHotels, hotelError, hotelStatus } from './hotelsSlice';
import HotelCard from './hotelCard';

const ListHotels= () => {
    const hotelData = useSelector(allHotelsData)
    const status = useSelector(hotelStatus)
    const error = useSelector(hotelError)
    const dispatch = useDispatch()
    
    useEffect(function(){
        if(status === 'idle') {
            dispatch(getDataHotels())
        }
    },[dispatch])

    const [destination, setDestination] = useState('');
    const [filtredList,setFiltredList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setFiltredList(hotelData.filter((hotel)=>hotel.city.trim().toLowerCase().includes(destination.trim().toLowerCase())));
    };

    const handlerReset = () => {
      setFiltredList([]);
      setDestination("")
    }

    let content = "";
    if(status === "loading"){
      content = <p>loading...</p>
    } else if(status === "succeeded"){
      content = (filtredList.length>0? filtredList:hotelData).map((hotel,index) => <HotelCard dataHotel={hotel} key={index} />)
    } else if(status === "failed"){
      content = <p>{error}</p>
    }

  return (
    <>
    
    <div className="card p-4 mb-4 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-3">
            <label htmlFor="destination" className="form-label small fw-bold">Destination</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <MapPin size={18} className="text-secondary" />
              </span>
              <input
                type="search"
                id="destination"
                className="form-control border-start-0"
                placeholder="Where are you going?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
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
      <h2 className='mb-4 fw-bold'>Available Hotels</h2>
      {
      content
      }
    </div>
    
    

    
    </>
  );
};

export default ListHotels;
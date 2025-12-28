import { useState } from 'react';
import { MapPin } from 'lucide-react';

const ListHotels= () => {
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(destination);
  };

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
                type="text"
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
        </div>
      </form>
    </div>
    
    </>
  );
};

export default ListHotels;
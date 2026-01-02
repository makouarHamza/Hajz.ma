import { Briefcase, Fuel, Settings, Users } from "lucide-react";

function CardCar ({car}) {
    return (
        <>
        <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ maxWidth: '700px' }}>
            {/* Image Section */}
            <img 
                src={car.imageUrl} 
                className="card-img-top" 
                alt={car.name} 
                style={{ height: '220px', objectFit: 'cover' }} 
            />
        
            <div className="card-body p-4">
                {/* Header: Title and Badge */}
                <div className="d-flex justify-content-between align-items-start mb-1">
                    <h4 className="fw-bold mb-0">{car.name}</h4>
                    <span className="badge rounded-pill bg-dark px-3 py-2">{car.category}</span>
                </div>
                <p className="text-secondary small mb-4">{car.provider}</p>

                {/* Features Grid using Lucide Icons */}
                <div className="row g-3 mb-4 text-secondary small">
                    <div className="col-6 d-flex align-items-center">
                        <Users size={18} className="me-2" /> {car.passengers} passengers
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <Briefcase size={18} className="me-2" /> {car.bags} bags
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <Settings size={18} className="me-2" /> {car.transmission}
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <Fuel size={18} className="me-2" /> {car.fuelType}
                    </div>
                </div>

                <hr className="opacity-25" />

                {/* Pricing and Action */}
                <div className="mt-4">
                    <span className="text-secondary small d-block">From</span>
                    <span className="h2 fw-bold d-block mb-0">${car.price}</span>
                    <span className="text-secondary small d-block mb-3">per day</span>
                    
                    <button className="btn btn-dark w-100 py-3 fw-bold rounded-3">
                        Book Now
                    </button>
                </div>
            </div>

        </div>
        </>
    )

}
export default CardCar;
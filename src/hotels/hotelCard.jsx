import { Coffee, MapPin, Star, Wifi, Wind } from "lucide-react";

function HotelCard({dataHotel}){
    return(
        <>
        <div className="card mb-4 overflow-hidden shadow-sm" style={{borderRadius:'12px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={"/assets/imgHotels/" + dataHotel.images[0]}
                        className="img-fluid h-100 w-100"
                        alt={dataHotel.nameHotel}
                        style={{ objectFit:'cover', minHeight:'200px' }}
                    />
                </div>

                <div className="col-md-8">
                    <div className="card-body d-flex flex-column h-100 p-4">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h4 className="card-title fw-bold mb-1">{dataHotel.nameHotel}</h4>
                                <p className="text-muted small mb-2">
                                    <MapPin size={14} className="me-1" />
                                    {dataHotel.city}
                                </p>
                            </div>
                            <div className="text-end">
                                <div className="d-flex align-items-center justify-content-end text-warning">
                                    <Star size={16} fill="currentColor" />
                                    <span className="ms-1 fw-bold text-dark">{dataHotel.rating}</span>
                                </div>
                                <small className="text-muted">1254 reviews</small>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap gap-2 my-3">
                            <span className="badge gb-light text-dark border d-flex align-items-center py-2 px-3">
                                <Wifi size={14} className="me-2"/> Wifi
                            </span>
                            <span className="badge bg-light text-dark border d-flex align-items-center py-2 px-3">
                                <Coffee size={14} className="me-2"/> Breakfast
                            </span>
                            <span className="badge bg-light text-dark border d-flex align-items-center py-2 px-3">
                                <Wind size={14} className="me-2"/> Spa
                            </span>
                        </div>

                        <hr className="my-auto"/>
                        <div className="d-flex justify-content-between align-item-end mt-3">
                            <div>
                                <p className="text-muted mb-0 small">From</p>
                                <h3 className="fw-bold mb-0">${dataHotel.price}</h3>
                                <p className="text-muted mb-0 small">per noght</p>
                            </div>
                            <button className="btn btn-dark btn-lg px-4 fw-bold" style={{ borderRadius: '8px'}}>
                                Book Now
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    
        </>
    )
}
export default HotelCard
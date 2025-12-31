import React from 'react';
import { Plane, Clock, Calendar } from 'lucide-react';

const FlightCard = ({ flight }) => {
  return (
    <div className="card mb-3 shadow-sm border-0" style={{ borderRadius: '15px' }}>
      <div className="card-body p-4">
        <div className="row align-items-center">
          
          {/* 1. Airline Info */}
          <div className="col-md-2">
            <div className="d-flex align-items-center mb-2">
              <div className="p-2 bg-light rounded-circle me-2 text-primary">
                <Plane size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-0">{flight.airline}</h6>
                <small className="text-muted">{flight.flightNumber}</small>
              </div>
            </div>
            <span className="badge bg-light text-dark border">{flight.cabinClass}</span>
          </div>

          {/* 2. Departure and Arrival Timeline */}
          <div className="col-md-8">
            <div className="d-flex align-items-center justify-content-between position-relative px-4">
              
              {/* Departure */}
              <div className="text-start">
                <h3 className="fw-bold mb-0">{flight.depTime}</h3>
                <div className="fw-bold text-uppercase">{flight.depAirport}</div>
                <small className="text-muted d-flex align-items-center">
                  <Calendar size={12} className="me-1" /> {flight.depDate}
                </small>
              </div>

              {/* Path/Duration Line */}
              <div className="flex-grow-1 mx-4 text-center position-relative">
                <div className="text-muted small mb-1">
                  <Clock size={14} className="me-1" /> {flight.duration}
                </div>
                {/* Custom Line with Plane Icon */}
                <div className="d-flex align-items-center">
                  <div className="border-bottom w-100" style={{ height: '1px' }}></div>
                  <Plane size={16} className="text-secondary mx-1" style={{ transform: 'rotate(90deg)' }} />
                  <div className="border-bottom w-100" style={{ height: '1px' }}></div>
                </div>
                <div className="text-muted small mt-1">Direct</div>
              </div>

              {/* Arrival */}
              <div className="text-end">
                <h3 className="fw-bold mb-0">{flight.arrTime}</h3>
                <div className="fw-bold text-uppercase">{flight.arrAirport}</div>
                <small className="text-muted d-flex align-items-center justify-content-end">
                  <Calendar size={12} className="me-1" /> {flight.arrDate}
                </small>
              </div>

            </div>
          </div>

          {/* 3. Pricing and Action */}
          <div className="col-md-2 border-start text-center">
            <div className="mb-3">
              <small className="text-muted">From</small>
              <h2 className="fw-bold mb-0">${flight.price}</h2>
            </div>
            <button className="btn btn-dark w-100 py-2 fw-bold" style={{ borderRadius: '8px' }}>
              Book Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FlightCard;
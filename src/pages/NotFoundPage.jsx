import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div 
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{ minHeight: '80vh' }}
      >
        {/* Icon or Illustration Area */}
        <div className="mb-4 text-danger">
          <AlertCircle size={100} strokeWidth={1.5} opacity={0.8} />
        </div>

        {/* Text Content */}
        <h1 className="display-1 fw-bold text-dark">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>
          We're sorry, the page you requested could not be found. 
          It might have been moved, deleted, or perhaps the URL is typed incorrectly.
        </p>

        {/* Action Buttons */}
        <div className="d-flex gap-3 justify-content-center">
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-outline-secondary px-4 py-2 d-flex align-items-center"
          >
            <ArrowLeft size={18} className="me-2" />
            Go Back
          </button>
          
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-dark px-4 py-2 d-flex align-items-center"
          >
            <Home size={18} className="me-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
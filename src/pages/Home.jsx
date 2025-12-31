import React, { useState } from 'react';
import ListHotels from '../hotels/hotelsList';
        // The Bootstrap card we built

const Home = () => {

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-dark text-white py-5 mb-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/assets/hero-bg.jpg")', backgroundSize: 'cover' }}>
        <div className="container text-center py-4">
          <h1 className="display-4 fw-bold mb-3">Find Your Next Adventure</h1>
          <p className="lead mb-4">Discover the best hotels and riads across Morocco</p>
          
        </div>
        
      </div>
      <ListHotels />

      
    </div>
  );
};

export default Home;
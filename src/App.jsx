import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
// import './App.css'
import "./styles/header.css"
import "./styles/headerTab.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Corrected path
import { useState } from 'react';
import Footer from './layouts/footer';
import ListHotels from './hotels/hotelsList';
import HotelManage from './hotels/hotelmanage';
import NewHotelForm from './hotels/newHotelForm';
import AddFlightForm from './flights/newFlightForm';
import FlightsManage from './flights/flightsManage';
import FlightsList from './flights/flightList';

function App() {
  const [isAdmin,setIsAdmin] = useState(false);

  const changeStatusAdmin = () =>{
    setIsAdmin(!isAdmin)
  }

  return (
    <>
    <div>
      <BrowserRouter>
        <header className='headerApp'>
          <ul>
            <li>
              <Link to="">
                <h2 className='logo-text'>Hajz<span>.ma</span></h2>
              </Link>
            </li>
            <li className='btn'>
              <button onClick={changeStatusAdmin} className={`btn ${isAdmin ? '':'btn-dark'} `}>
                {
                  isAdmin?(
                  <div className='d-flex align-items-center'>
                    <span className='me-2'>
                      <i className='bi bi-gear'></i>
                    </span>
                    Admin Panel
                  </div>):(
                  <div className='d-flex align-items-center bg-color-black'>
                    <span className='me-2'>
                      <i className='bi bi-person-circle'></i>
                    </span>
                    User View
                  </div>)
                }
              </button>
            </li>
          </ul>
        </header>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:"60px"}}>
          <div className='tab-container'>
            <ul className='nav-list'>
              <li>
                <NavLink to={isAdmin?'manageHotels':'hotels'}>
                  <i className='bi bi-building-fill'></i>
                  Hotels
                </NavLink>
              </li>
              <li>
                <NavLink to={isAdmin?'manageCars':'cars'}>
                    <i className='bi bi-car-front-fill'></i>
                    Cars
                </NavLink>
              </li>
              <li>
                <NavLink to={isAdmin?'manageFlights':'flights'}>
                    <i className='bi bi-airplane-engines-fill'></i>
                    Flights
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<h1>welcome</h1>}/>
          <Route path='cars' element={<h1>cars</h1>}/>
          <Route path='flights' element={<FlightsList/>}/>
          <Route path='hotels' element={ <ListHotels /> }/>
          <Route path='manageCars' element={<h1>manage Cars</h1>}/>
          <Route path='manageHotels' element={ <HotelManage /> }/>
          <Route path='manageHotels/addEditHotel' element={ <NewHotelForm /> }/>
          <Route path='manageHotels/addEditHotel/:idToEdit' element={ <NewHotelForm /> }/>
          <Route path='manageFlights' element={<FlightsManage />}/>
          <Route path='manageFlights/addEditFlight' element={ <AddFlightForm /> }/> 
          
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>

    </>
  )
      
}

export default App

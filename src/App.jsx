import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
// import './App.css'
import "./styles/header.css"
import "./styles/headerTab.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Corrected path
import { useState } from 'react';
import Footer from './layouts/footer';
import ListHotels from './hotels/hotelsList';

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
          <Route path='flights' element={<h1>flights</h1>}/>
          <Route path='hotels' element={ <ListHotels /> }/>
          <Route path='manageCars' element={<h1>manage Cars</h1>}/>
          <Route path='manageFlights' element={<h1>manage flights</h1>}/>
          <Route path='manageHotels' element={ <h1>manage hotels</h1> }/>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>

    </>
  )
      
}

export default App

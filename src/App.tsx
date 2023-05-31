import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import {Main} from './pages/main/Main';
import { Experts } from './pages/experts/Experts'
import { Booking } from './pages/booking/Booking'

import { BrowserRouter, Routes, Route } from "react-router-dom";


import './common/Container.css';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Main/>}> </Route>
                  <Route path="/experts" element={<Experts/>}> </Route>
                  <Route path="/bookings" element={<Booking/>}> </Route>
              </Routes>
          </BrowserRouter>
      </div>
    </>
  );
}

export default App;

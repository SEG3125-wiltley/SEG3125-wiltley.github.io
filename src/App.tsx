import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import {Main} from './pages/main/Main';
import './common/Container.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
          <Main/>
      </div>
    </>
  );
}

export default App;

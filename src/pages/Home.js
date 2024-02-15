import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Welcome } from '../components/welcomes/Welcomes';
import Footer from '../components/Footer';

import SeriesPage from '../pages/SeriesPage';
import PeliculasPage from '../pages/PeliculasPage';
import "../css/home.css";


export default function Home() {
  return (
    <Router>
      <div>
        <Navbar />
        <Welcome />
        <div className='active'>
          <Link to="/pages/PeliculasPage">
            <button className='boton-pelis'>Ir a Películas</button>
          </Link>
          <Link to="/pages/SeriesPage">
            <button className='boton-series'>Ir a Series</button>
          </Link>
        </div>
        <Routes>
          <Route path="/pages/PeliculasPage" element={<PeliculasPage />} />
          <Route path="/pages/SeriesPage" element={<SeriesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Added single quotes around 'react-router-dom'
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}



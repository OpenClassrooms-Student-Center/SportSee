import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import "./styles/global.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/user/:id" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
);


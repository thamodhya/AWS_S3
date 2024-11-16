import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddFilePage from './components/AddFilePage';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/add" element={<AddFilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

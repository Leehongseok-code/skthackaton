import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Board from './components/pages/Board';
import Scraps from './components/pages/Scraps';
import Music from './components/pages/Music';
import SelectPic from './components/pages/SelectPic';
import MList from './components/MList'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/Scraps" element={<Scraps />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/selectpic" element={<SelectPic />} />
        <Route path="/mlist" element={<MList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

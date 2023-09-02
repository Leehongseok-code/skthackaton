import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Board from './components/pages/Board';
import Scraps from './components/pages/Scraps';
import Music from './components/pages/Music';
import SelectPic from './components/pages/SelectPic';
import Collage from './components/pages/Collage';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import FAQ from './components/pages/FAQ';
import MList from './components/MList'
import './App.css';
import MPlayer from './components/MPlayer';
import { StepperWithContent } from './components/StepperWithContent';
import ProgressStepper from './components/ProgressStepper';
import CustomAudioPlayer from './components/CustomAudioPlayer';
import BoardWrite from './components/pages/BoardWrite';
import BoardDetail from './components/pages/BoardDetail';
import PostsByDate from './components/pages/PostsByDate';
import DateWrite from './components/pages/DateWrite';
import History from './components/pages/History';
import Home2 from './components/Home2';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/board" element={<Board />} />
        <Route path="/boardwrite" element={<BoardWrite />} />
        <Route path="/boarddetail/:id" element={<BoardDetail />} />
        <Route path="/Scraps" element={<Scraps />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/postbydate" element={<PostsByDate />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/selectpic" element={<SelectPic />} />
        <Route path="/collage" element={<Collage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mlist" element={<MList />} />
        <Route path="/mplayer" element={<MPlayer />} />
        <Route path="/stepperwithcontent" element={<StepperWithContent />} />
        <Route path="/progressstepper" element={<ProgressStepper />} />
        <Route path="/customaudioplayer" element={<CustomAudioPlayer />} />
        <Route path="/datewrite" element={<DateWrite />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

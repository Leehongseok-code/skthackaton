import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function HeroSection({ activeLink, handleLinkClick }) {

    let [heart, heartChange] = useState(0); // 초기값 0

    return (
        <div className = 'hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>정서랑</h1>
            <p>자폐 아동을 위한 합리적인 미술 치료 서비스</p>
            <p><span onClick={()=>{heartChange(heart+1)}}>❤</span> { heart }</p>
            <div className="hero-btns">
                <Link to="/music" className="btns btn--outline btn--large">
                    GET STARTED
                </Link>
                 <Button className = 'btns' buttonStyle = 'btn--primary' 
                buttonSize = 'btn--large'>WATCH TRAILER<i className = 'far fa-play-circle'/></Button>
            </div>
               
        </div>
    )
}

export default HeroSection
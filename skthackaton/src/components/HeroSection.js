import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function HeroSection() {

    return (
        <div className = 'hero-container'>
            <img src="/image/main-bg.png"/>
            {/* <video src="/videos/twinkle.mp4" autoPlay loop muted /> */}
            <h1>U-Dalle</h1>
            <p>자폐 아동을 위한 합리적인 음악·미술 치료 서비스 '유달리(U-Dalle)'</p>
            <br></br>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large' to="/music">GET STARTED</Button>
                <Button className = 'btns' buttonStyle = 'btn--primary' 
                buttonSize = 'btn--large' to="/watch-trailer">WATCH TRAILER<i className = 'far fa-play-circle'/></Button>
            </div>
               
        </div>
    )
}

export default HeroSection
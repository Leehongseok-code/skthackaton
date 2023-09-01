import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function HeroSection() {

    let [heart, heartChange] = useState(0); // 초기값 0

    return (
        <div className = 'hero-container'>
            <img src="/image/main-bg.png"/>
            {/* <video src="/videos/twinkle.mp4" autoPlay loop muted /> */}
            <h1>정서랑</h1>
            <p>자폐 아동을 위한 합리적인 미술 치료 서비스</p>
            <p><span onClick={()=>{heartChange(heart+1)}}>❤</span> { heart }</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large' to="/music">GET STARTED</Button>
                <Button className = 'btns' buttonStyle = 'btn--primary' 
                buttonSize = 'btn--large'>WATCH TRAILER<i className = 'far fa-play-circle'/></Button>
            </div>
               
        </div>
    )
}

export default HeroSection
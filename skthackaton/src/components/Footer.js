import React, { useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    try {
      // 이메일을 백엔드로 전송
      await axios.post(`http://49.50.162.196:8000/aidoctor/newsletter/${email}`); 
      alert('Successfully subscribed!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Error subscribing. Please try again later.');
    }
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          U-Dalle에서 자기표현 음악·미술치료 프로그램 정보를 받아보세요!
        </p>
        <p className='footer-subscription-text'>
          언제든지 원하실 때 구독해지 가능합니다.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='이메일 입력'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btns btn--footer" onClick={handleSubscribe}>
             Subscribe
            </button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              U-Dalle
            </Link>
          </div>
          <small class='website-rights'>유달리 © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
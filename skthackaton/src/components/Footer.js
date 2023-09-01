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
      await axios.post(`http://115.85.181.240:8000/blockchain/sendnews/${email}`); 
      //여기에!!! 백엔드 api 주소 집어넣어야함!!!
      await axios.post(`http://115.85.181.240:8000/blockchain/subscribe/${email}`); //구독 시스템
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
          정서랑에서 자기표현 미술치료 프로그램 정보를 받아보세요!
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
            <Button buttonStyle='btn--outline' onClick={handleSubscribe}>
             Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='../Services'>How it works</Link>
            <Link to='../News'>News</Link>
            <Link to='../Ranks'>Top100 Ranking</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/likelion_konkuk.univ/'>Instagram</Link>
            <Link to='https://www.facebook.com/likelionkonkuk/?locale=ko_KR'>Facebook</Link>
            <Link to='https://www.youtube.com/@likelion.official'>Youtube</Link>
            
          </div> */}
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              정서랑
            </Link>
          </div>
          <small class='website-rights'>정서랑 © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/likelionkonkuk/?locale=ko_KR'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/likelion_konkuk.univ/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/@likelion.official'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
import React from 'react';
import './Cards2.css';
import CardItem2 from './CardItem2';

function Cards2() {
  return (
    <div className='cards'>
      <h1 style={{ fontSize: '36px', textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif' }}>
      2023 국내 TOP 가상화폐 거래소 바로가기
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem2
              src='https://blog.btcc.com/wp-content/uploads/2023/01/upbit_facebook-1024x535.png'
              label='업비트(Upbit)'
              path='https://upbit.com/'
            />
            <CardItem2
              src='https://www.sktelecom.com/images/seo/skt-seo.jpg'
              label='빗썸(Bithumb)'
              path='https://www.bithumb.com/react/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem2
              src='https://blog.btcc.com/wp-content/uploads/2023/01/%E6%9C%89%E5%BA%A620230103164348.png'
              label='코인원(coinone)'
              path='https://coinone.co.kr/'
            />
            <CardItem2
              src='https://i.ytimg.com/vi/B-fDsqk4-4M/maxresdefault.jpg'
              label='코빗(Korbit)'
              path='https://lightning.korbit.co.kr/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;


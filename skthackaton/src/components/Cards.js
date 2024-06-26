import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 style={{ fontSize: '36px', textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif' }}>
      SKT와 함께하는 자폐 아동 치료 서비스
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://img.etnews.com/photonews/2112/1486604_20211222134917_917_0001.jpg'
              text='SK텔레콤이 자체 개발한 AI 기반 영상분석 모델은 영상 데이터에서 발달장애인의 특정 동작과 모션 패턴을 분석, 도전적 행동 유형과 발생 빈도·강도 등을 정확히 인지한다.'
              label='업비트(Upbit)'
              path='https://upbit.com/'
            />
            <CardItem
              src='https://biz.chosun.com/resizer/dUDujzhaSC3RqHidKTXi02J13to=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XSQOBKFV2RDGFP3T3VPFF4IBPQ.jpg'
              text='한때 세계 거래량 1위를 차지하기도 했었던 한국 최장수 플랫폼이다.'
              label='빗썸(Bithumb)'
              path='https://www.bithumb.com/react/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://blog.btcc.com/wp-content/uploads/2023/01/%E6%9C%89%E5%BA%A620230103164348.png'
              text='2014년 설립된 한국의 가상자산 코인 거래소이다.'
              label='코인원(coinone)'
              path='https://coinone.co.kr/'
            />
            <CardItem
              src='https://i.ytimg.com/vi/B-fDsqk4-4M/maxresdefault.jpg'
              text='2013년 한국 최초로 설립된 암호화폐(코인) 거래소로 유일하게 2013년 말의 비트코인 점핑을 경험했다.'
              label='코빗(Korbit)'
              path='https://lightning.korbit.co.kr/'
            />
            <CardItem
              src='https://blog.btcc.com/wp-content/uploads/2023/01/gopax-introduction-1024x512.jpg'
              text='2017년 11월 13일에 출시한 한국 가상화폐 거래소이다.'
              label='고팍스(GOPAX)'
              path='https://www.gopax.co.kr/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
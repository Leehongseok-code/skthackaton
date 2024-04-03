import React from 'react';
import './ServiceTable.css';

function ServiceTable() {
  return (
    <div>
      <h1 style={{ fontSize: '36px', textAlign: 'center', fontFamily: 'Noto Sans KR, sans-serif' }}>
        SKT와 함께하는 자폐 아동 치료 서비스
      </h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>이미지</th>
            <th>설명</th>
            <th>링크</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src='https://img.etnews.com/photonews/2112/1486604_20211222134917_917_0001.jpg'
                alt='이미지 1'
                style={{ width: '100px', height: '100px' }}
              />
            </td>
            <td>
              SK텔레콤이 자체 개발한 AI 기반 영상분석 모델은 영상 데이터에서 발달장애인의 특정 동작과 모션 패턴을 분석, 도전적 행동 유형과 발생 빈도·강도 등을 정확히 인지한다.
            </td>
            <td>
              <a href='https://upbit.com/'>업비트(Upbit)</a>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src='https://biz.chosun.com/resizer/dUDujzhaSC3RqHidKTXi02J13to=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XSQOBKFV2RDGFP3T3VPFF4IBPQ.jpg'
                alt='이미지 2'
                style={{ width: '100px', height: '100px' }}
              />
            </td>
            <td>
              한때 세계 거래량 1위를 차지하기도 했었던 한국 최장수 플랫폼이다.
            </td>
            <td>
              <a href='https://www.bithumb.com/react/'>빗썸(Bithumb)</a>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src='https://blog.btcc.com/wp-content/uploads/2023/01/%E6%9C%89%E5%BA%A620230103164348.png'
                alt='이미지 3'
                style={{ width: '100px', height: '100px' }}
              />
            </td>
            <td>
              2014년 설립된 한국의 가상자산 코인 거래소이다.
            </td>
            <td>
              <a href='https://coinone.co.kr/'>코인원(coinone)</a>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src='https://i.ytimg.com/vi/B-fDsqk4-4M/maxresdefault.jpg'
                alt='이미지 4'
                style={{ width: '100px', height: '100px' }}
              />
            </td>
            <td>
              2013년 한국 최초로 설립된 암호화폐(코인) 거래소로 유일하게 2013년 말의 비트코인 점핑을 경험했다.
            </td>
            <td>
              <a href='https://lightning.korbit.co.kr/'>코빗(Korbit)</a>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src='https://blog.btcc.com/wp-content/uploads/2023/01/gopax-introduction-1024x512.jpg'
                alt='이미지 5'
                style={{ width: '100px', height: '100px' }}
              />
            </td>
            <td>
              2017년 11월 13일에 출시한 한국 가상화폐 거래소이다.
            </td>
            <td>
              <a href='https://www.gopax.co.kr/'>고팍스(GOPAX)</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ServiceTable;

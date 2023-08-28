import '../../App.css';
import App from '../../App';
import React, { useState } from "react";
import Footer from '../Footer';
import axios from "axios";
import Cards2 from '../Cards2';
import { Button } from '../Button';
import {Link} from 'react-router-dom';
import MList from '../MList';


function Music() {
  const [selectedButton, setSelectedButton] = useState(""); // 클릭된 버튼 정보

  const handleButtonSelect = (buttonText) => {
    setSelectedButton(buttonText);
  };

  const handleGenerateMusic = () => {
    if (selectedButton) {
      axios
        .post("백엔드 API URL", { selectedButton })
        .then((response) => {
          // 성공적으로 백엔드에 전송되었을 때의 처리
        })
        .catch((error) => {
          // 오류 발생 시의 처리
        });
    } else {
      // 클릭된 버튼이 없을 때의 처리
    }
  };
  return (
    <>
    <div className="App-back">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1>키워드를 골라주세요!</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="mlist">
       <MList
         onSelectButton={handleButtonSelect}
         selectedButton={selectedButton}
          />
          
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

     <div className="btn-center"> {/* 오른쪽에 정렬할 부모 요소 */}
     <Link 
      to="/selectpic" 
      className="btns btn--large" style={{ backgroundColor: 'black', color: 'white' }}
      onClick={handleGenerateMusic}>
             음악 생성
      </Link>
     </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

      <Footer />
      </div>
    </>
  );
}

export default Music;
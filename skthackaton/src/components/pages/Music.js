import '../../App.css';
import React, { useState } from "react";
import Footer from '../Footer';
import axios from "axios";
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import MList from '../MList';


function Music() {
  const [selectedButton, setSelectedButton] = useState(""); // 클릭된 버튼 정보
  const navigate = useNavigate();

  const handleButtonSelect = (buttonText) => {
    setSelectedButton(buttonText);
  };

  const navigateToPic = () => {
    navigate("/selectpic");
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
      <br></br><br></br>
      <br></br><br></br>
      <img className='mood' alt="mood" src="image/smile.png" />
      <h1>오늘의 감정 키워드를 골라주세요!</h1>
      <br></br><br></br>
      <br></br><br></br>
      <div className="mlist">
        <MList onSelectButton={setSelectedButton} selectedButton={selectedButton} />
      </div>
      <br></br><br></br>
      <br></br><br></br>

     <div className="btn-center"> {/* 오른쪽에 정렬할 부모 요소 */}
     <button
      className="btns btn--large btn--music-style"
      onClick={handleGenerateMusic && navigateToPic}>
             음악 듣기
      </button>
     </div>
      <br></br><br></br>
      <br></br><br></br>
      <br></br>
      <Footer />
      </div>
    </>
  );
}

export default Music;
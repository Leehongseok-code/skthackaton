import '../../App.css';
import React, { useState } from "react";
import Footer from '../Footer';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import MList from '../MList';
import ProgressStepper from '../ProgressStepper';



function Music() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['음악 생성', '이미지 선택', '콜라주'];

  const [selectedButton, setSelectedButton] = useState(""); // 클릭된 버튼 정보
  const navigate = useNavigate();

  const emotions = ["즐거움", "슬픔", "분노", "행복", "불안", "두려움"];

  const navigateToPic = () => {
    if (selectedButton !== "") {
      const selectedNumber = emotions.indexOf(selectedButton) + 1;
      navigate('/selectpic', { state: { selectedNumber } });
    }
  };

  return (
    <>
    <ProgressStepper steps={steps} activeStep={activeStep} />
    <div className="App-back">
      <br></br><br></br>
      <img className='mood' alt="mood" src='/image/smile.png' />
      <h1 className='h1'>오늘의 감정 키워드를 골라주세요!</h1>
      <br></br><br></br>
      <br></br>
      <div className="mlist">
        <MList onSelectButton={setSelectedButton} selectedButton={selectedButton} />
      </div>
      <br></br><br></br>
      <br></br><br></br>

      <div className="btn-center"> {/* 오른쪽에 정렬할 부모 요소 */}
      <button
        className="btns btn--large btn--music-style"
        onClick={navigateToPic}>
              음악 듣기
        </button>
      </div>
      <br></br><br></br>
      <br></br><br></br>
      <Footer />
      </div>
    </>
  );
}

export default Music;
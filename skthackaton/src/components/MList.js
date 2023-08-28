import '../App.css';
import App from '../App';
import React, { useState } from "react";
import axios from "axios";
import { Button } from './Button';
import {Link} from 'react-router-dom';


function MList({onSelectButton,selectedButton}) {
    const emotions = ["행복", "불안", "슬픔", "분노", "즐거움", "두려움"];
    const [selectedEmotion, setSelectedEmotion] = useState(""); // 선택된 감정 상태

    const handleButtonClick = (emotion) => {
        if (selectedEmotion === emotion) {
          setSelectedEmotion(""); // 이미 선택된 감정이면 해제
        } else {
          setSelectedEmotion(emotion); // 선택된 감정으로 설정
        }
        onSelectButton(emotion); // 부모 컴포넌트로 선택된 감정 전달
      };

  return (  
    <>
    <div className="btn-center">
      {emotions.map((emotion, index) => (
        <React.Fragment key={index}>
          <Button
            className={`btns ${selectedEmotion === emotion ? 'btn--selected' : ''}${selectedButton === emotion ? 'btn--primary2' : ''}`}
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => handleButtonClick(emotion)}
          >
            {emotion}
          </Button>
          {index < emotions.length - 1 && <span className="btn-space"></span>}
        </React.Fragment>
      ))}
    </div>
    </>
  );
}

export default MList;
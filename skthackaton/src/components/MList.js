import React, { useState, useEffect } from "react";

function MList({ onSelectButton }) {
  const emotions = ["즐거움", "슬픔", "분노", "행복", "불안", "두려움"];
  const [btnActive, setBtnActive] = useState("즐거움"); // 디폴트로 "즐거움" 버튼 클릭 상태

  const toggleActive = (selectedEmotion) => {
    setBtnActive(selectedEmotion);
    onSelectButton(selectedEmotion); // 선택된 감정 전달
  };

  useEffect(() => {
    // 페이지 로드 시 디폴트로 "즐거움" 버튼 선택
    onSelectButton("즐거움");
  }, []);

  return (
    <div className="btn-center">
      {emotions.map((item, index) => (
        <button
          key={index}
          value={index}
          className={"btn" + (item === btnActive ? " active" : "")}
          onClick={() => toggleActive(item)} // 감정 이름을 전달하여 버튼 클릭 처리
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default MList;
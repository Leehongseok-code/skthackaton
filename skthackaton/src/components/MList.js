import React, { useState } from "react";

function MList({ onSelectButton }) {
  let emotions = ["즐거움", "슬픔", "분노", "행복", "불안", "두려움"];
  let [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    const selectedEmotion = emotions[e.target.value];
    setBtnActive((prev) => (prev === selectedEmotion ? "" : selectedEmotion));
    onSelectButton(selectedEmotion); // 선택된 감정 전달
  };

  return (
    <div className="btn-center">
      {emotions.map((item, index) => (
        <button
          key={index}
          value={index}
          className={"btn" + (item === btnActive ? " active" : "")}
          onClick={toggleActive}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default MList;
import '../App.css';
import React, { useState } from "react";
import axios from "axios";

function MList() {
  let emotions = ["행복", "불안", "슬픔", "분노", "즐거움", "두려움"];
  let [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive((prev) => (prev === e.target.value ? "" : e.target.value));
  };

  return (
    <div className="btn-center">
      {emotions.map((item, index) => {
        return (
          <>
            <button
            value={index}
            className={"btn" + (index == btnActive ? " active" : "")}
            onClick={toggleActive}
            >
              {item}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default MList;
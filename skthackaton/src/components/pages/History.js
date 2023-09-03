import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';

function History() {

  const location = useLocation();
  const { imageUrl } = location.state; // 이미지 URL 받아오기

  return (
    <div className="App-back">
      <div className="container mx-auto py-4">
        <div className="rounded overflow-hidden border bg-white">
          <img className="w-full" src={imageUrl} alt="postImage" />
        </div>
      </div>
    </div>
  );
}

export default History;

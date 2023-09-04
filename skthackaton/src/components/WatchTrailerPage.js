import React from 'react';
import { Link } from 'react-router-dom';
import udalle from './udalle.mp4'

function WatchTrailerPage() {
  return (
    <div>
      {/* 동영상을 크게 보여주는 컴포넌트 추가 */}
      <video className="relative z-10" src={udalle} controls autoPlay />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default WatchTrailerPage;
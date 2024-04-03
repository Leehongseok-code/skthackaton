import React from 'react';
import { Link } from 'react-router-dom';

function WatchTrailerPage() {
  return (
    <div>
      {/* 동영상을 크게 보여주는 컴포넌트 추가 */}
      <video className="relative z-10" src='/videos/udalle.mp4' controls autoPlay />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default WatchTrailerPage;
import React from 'react';
import './CustomAudioPlayer.css'; // 커스텀 스타일 추가

function CustomAudioPlayer() {
  return (
    <div className="custom-audio-player">
      {/* Audio element */}
      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // 오디오 파일의 URL을 넣어주세요
        controls // 브라우저의 기본 오디오 컨트롤 사용
        className="audio-element"
      ></audio>
    </div>
  );
}

export default CustomAudioPlayer;

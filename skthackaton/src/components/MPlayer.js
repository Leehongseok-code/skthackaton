import React from 'react';
import ReactPlayer from "react-player";
import './MPlayer.css';

function MPlayer() {
    return (
      <div>
        {/* <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3> */}
        <ReactPlayer
          //url="/mp3/jet.mp3"//백엔드에서 받은 노래 넣기!!!!
          url="https://www.youtube.com/watch?v=Lr4vTGC48q4"
          width="400px"
          height="50px"
          playing={true} // 자동 재생을 위해 playing을 true로 설정
          loop={true} // 루프 재생을 위해 loop를 true로 설정
          controls={true}
        />
      </div>
    );
  }
   
  export default MPlayer;
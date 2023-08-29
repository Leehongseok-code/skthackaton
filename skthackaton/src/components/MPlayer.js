import React from 'react';
import ReactPlayer from "react-player";
import './MPlayer.css';

function MPlayer() {
    return (
      <div>
        {/* <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3> */}
        <ReactPlayer
          url="/mp3/jet.mp3"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
      </div>
    );
  }
   
  export default MPlayer;
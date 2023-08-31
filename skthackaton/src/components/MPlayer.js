import React from 'react';
import ReactPlayer from "react-player";
import './MPlayer.css';
import { useLocation  , useNavigate } from 'react-router-dom';

function MPlayer() {

  const emotionToMusic = {
    "1": ["/mp3/Eine kleine Nachtmusik.mp3"], // 기쁨에 맞는 음악 URL 목록으로 변경
    "2": ["/mp3/Mars, the Bringer of War.mp3"],
    "3": ["/mp3/Mars, the Bringer of War.mp3"],
    "4": ["/mp3/Eine kleine Nachtmusik.mp3","/mp3/Overture.mp3","/mp3/Can-can-music.mp3"],
    "5": ["/mp3/Danse Macabre.mp3","/mp3/The Sorcerer's Apprentice.mp3"],
    "6": ["/mp3/Totentanz.mp3","/mp3/A Night on Bald Mountain.mp3"]
    
    // 나머지 감정에 맞는 음악 URL 목록 추가
  };

  const location = useLocation();
  const selectedNumber = location.state.selectedNumber;

  const selectedMusicList = emotionToMusic[selectedNumber] || []; // 해당 감정에 맞는 음악 URL 목록을 가져오거나 없으면 빈 배열

  const getRandomMusic = (musicList) => {
    if (musicList.length === 0) {
      return null; // 음악 URL 목록이 비어있을 경우 null 반환 또는 다른 처리 방식 선택
    }else{
    const randomIndex = Math.floor(Math.random() * musicList.length);
    return musicList[randomIndex];
    }
  };

  const selectedMusic = getRandomMusic(selectedMusicList);

  if (!selectedMusic) {
    return <div>No music available for the selected emotion.</div>;
  }

    return (
      <div>
        {/* <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3> */}
        <ReactPlayer
          url={selectedMusic} // 선택된 음악 URL로 변경
          width="400px"
          height="50px"
          playing={true}
          loop={true}
          controls={true}
        />
      </div>
    );
  }
   
  export default MPlayer;
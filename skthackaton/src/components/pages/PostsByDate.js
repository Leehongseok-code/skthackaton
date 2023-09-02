import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCalendar from '../MyCalendar';
import Calendar from 'react-calendar';
import '../PostsByDate.css'; // 커스텀 스타일을 추가하는 CSS 파일
import { useNavigate } from 'react-router-dom';

function PostsByDate() {
  const { date } = useParams();
  const [posts, setPosts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // 선택한 날짜 상태


  const navigate = useNavigate();

  useEffect(() => {
    // 백엔드에서 해당 날짜에 작성된 게시글을 가져오는 API를 호출하는 로직
    // API 호출 및 데이터를 posts에 설정
  }, [date]);

  const navigateToDateWrite = () => {
    navigate('/datewrite');
  };

  const navigateToHistory = () => {
    if (selectedDate) {
      // 선택한 날짜와 함께 '/datewrite' 페이지로 이동
      navigate(`/history/${selectedDate.toISOString()}`);
    } else {
      alert('날짜를 먼저 선택하세요.');
    }
  };

  return (
    <div className='App-back'>
      <div className="posts-by-date-container">
      <h1 className="bold-text">나만의 콜라주 역사를 확인해보세요! - {date}</h1>
      </div>
      <div className='button2css'>
            <button
              onClick={navigateToDateWrite}
              className="btns btn--board"
            >게시글 작성</button>
            </div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className='calendar-container'>
      <MyCalendar setSelectedDate={setSelectedDate}/>
      </div>
      <div className='button3css'>
            <button
              onClick={navigateToHistory}
              className="btns btn--board"
            >날짜 선택</button>
            </div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul> */}
      
    </div>
    
  );
}

export default PostsByDate;

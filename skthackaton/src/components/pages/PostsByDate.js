import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCalendar from '../MyCalendar';
import Calendar from 'react-calendar';
import '../PostsByDate.css'; // 커스텀 스타일을 추가하는 CSS 파일

function PostsByDate() {
  const { date } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 백엔드에서 해당 날짜에 작성된 게시글을 가져오는 API를 호출하는 로직
    // API 호출 및 데이터를 posts에 설정
  }, [date]);

  return (
    <div className="posts-by-date-container">
      <h1 className="bold-text">나만의 콜라주 역사를 확인해보세요! - {date}</h1>
      <MyCalendar />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsByDate;

// Calendar.js - 달력 컴포넌트

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './CustomCalendar.css'; // 커스텀 스타일을 추가하는 CSS 파일s

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <Link to={`/posts/${date.toISOString().split('T')[0]}`}>View Posts</Link>
    </div>
  );
}

export default MyCalendar;

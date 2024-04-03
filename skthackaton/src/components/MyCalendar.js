import React, { useEffect, useState } from "react";
import History from "./pages/History";
import { format } from 'date-fns';
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db,getFirestore, collection, addDoc, updateDoc, getDocs, serverTimestamp, doc } from "../firebase-config"; // Firebase 모듈을 불러옵니다.
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 사용
import { Link } from 'react-router-dom';
import './MyCalendar.css';

// Firebase 설정
const firebaseConfig = {
  // 여기에 Firebase 설정 정보를 입력하세요.
  apiKey: "AIzaSyDja8wn_WIL3OCtrGGg92P9gYtA3AGx-lQ",
  authDomain: "skthackaton-5ee5a.firebaseapp.com",
  projectId: "skthackaton-5ee5a",
  storageBucket: "skthackaton-5ee5a.appspot.com",
  messagingSenderId: "215406750352",
  appId: "1:215406750352:web:7e1f9c3a4f43195cb5c615",
  measurementId: "G-L8CCH5C6B4" 
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null); // 선택한 날짜 상태
  const [currentMonth, setCurrentMonth] = useState(new Date()); // 현재 월 상태
  const [photos, setPhotos] = useState([]); // 사진 데이터 상태
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [imgloading, imgsetLoading] = useState(false); // 로딩 상태 추가

  // 이전 월로 이동하는 함수
  const goToPreviousMonth = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(previousMonth);
  };

  // 다음 월로 이동하는 함수
  const goToNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const postsData = [];

  // 날짜 클릭 이벤트 핸들러
  const handleDateClick = async (date) => {
    try {
      // 클릭한 날짜의 년, 월, 일을 추출
      const clickedYear = date.getFullYear().toString().substring(2); // 클릭한 날짜의 년도 뒤 2자리
      const clickedMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // 클릭한 날짜의 월 (0부터 시작하므로 +1)
      const clickedDay = date.getDate().toString().padStart(2, '0'); // 클릭한 날짜의 일

      // 클릭한 날짜 정보를 원하는 형식으로 조합 (예: 23/09/05)
      const formattedClickedDate = `${clickedYear}/${clickedMonth}/${clickedDay}`;

      // 클릭한 날짜 정보를 콘솔에 출력하여 확인
      console.log("클릭한 버튼에 해당하는 날짜:", formattedClickedDate);

      const querySnapshot2 = await getDocs(collection(db, 'posts2')); // 'posts' 컬렉션의 문서들 가져오기
      

      querySnapshot2.forEach((doc) => {
        const postData = doc.data();
        postData.id = doc.id; // 게시물 문서 고유 ID 추가

        // Timestamp 객체를 문자열로 변환하여 사용
        const formattedTimestamp = format(postData.createdTimestamp.toDate(), 'yy/MM/dd');
        console.log(formattedTimestamp);
        postData.createdTimestamp = formattedTimestamp;
        
        if(formattedClickedDate === formattedTimestamp) {
          const imageUrl = postData.imageUrl; // 이미지 URL 가져오기
          setSelectedImageUrl(imageUrl); // 이미지 URL을 상태 변수에 설정
          console.log(imageUrl);

          postsData.push(postData);
          //navigate('/history', { state: { imageUrl } }); // 페이지 이동
        }
      });
      setUserData(postsData);

      // 이후 데이터를 가져오거나 처리하는 로직 추가
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const generateCalendar = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // 현재 월의 첫 날을 구함
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    let dates = [];
    const weeksInMonth = [[]];
    let currentWeek = 0;

    const dayNames = ['월', '화', '수', '목', '금', '토', '일'];

    // 현재 월의 첫 날이 무슨 요일인지 구함 (1: 월요일, 2: 화요일, ..., 7: 일요일)
    const startDayOfWeek = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();

    for (let i = 1; i < startDayOfWeek; i++) {
      // 첫 주 시작 전의 빈 칸
      dates.push(null);
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      dates.push(i);

      if (dates.length === 7) {
        weeksInMonth[currentWeek] = dates;
        dates = [];
        currentWeek++;
      } else if (i === lastDayOfMonth.getDate()) {
        // 현재 월의 마지막 날까지 왔을 때도 주를 추가해야 합니다.
        weeksInMonth[currentWeek] = dates;
      }
    }

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full shadow-lg">
          <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t">
            <div className="px-4 flex items-center justify-between">
              {/* 월 이름 */}
              <h1 className="text-2xl font-bold dark:text-gray-100 text-gray-800">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h1>
              <div className="flex items-center text-gray-800 dark:text-gray-100">
                {/* 이전 월로 이동하는 버튼 */}
                <button onClick={goToPreviousMonth}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </button>

                {/* 다음 월로 이동하는 버튼 */}
                <button onClick={goToNextMonth}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler ml-3 icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </button>
              </div>
            </div>
            {/* 날짜를 나타내는 테이블 */}
            <div className="flex items-center justify-between pt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {dayNames.map((dayName) => (
                      <th key={dayName}>
                        <div className="w-full flex justify-center">
                          <p className="text-2xl font-sm text-center text-gray-800 dark:text-gray-100">
                            {dayName}
                          </p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeksInMonth.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {week.map((date, index) => (
                        <td key={index} className="pt-6">
                          {date !== null ? (
                            <div
                              className={`relative px-4 py-4 cursor-pointer flex w-full justify-center`}
                            >
                              <button
                                className="text-1xl text-gray-500 dark:text-gray-100 font-medium"
                                onClick={() =>
                                  handleDateClick(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date))
                                }
                              >
                                {date}
                              </button>
                            </div>
                          ) : (
                            // 빈 칸은 비워둡니다.
                            <div className="w-full"></div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      
    );
  };

  return (
    <>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="text-center mt-10">
        {generateCalendar()}
      </div>

      {/* 이미지를 달력 아래에 위치하고 중앙 아래로 배치 */}
    {/* <div className="image-container">
      <div className="container mx-auto py-4">
        <div className="relative rounded overflow-hidden border bg-white image">
          <img className="relative w-full z-10" src={selectedImageUrl} alt="postImage" />
        </div>
      </div>
    </div> */}
  </>
);
}

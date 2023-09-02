import React, { useEffect, useState } from "react";

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(null); // 선택한 날짜 상태
  const [currentMonth, setCurrentMonth] = useState(new Date()); // 현재 월 상태
  const [photos, setPhotos] = useState([]); // 사진 데이터 상태

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

  // 날짜 클릭 이벤트 핸들러
  const handleDateClick = async (date) => {
    try {
      // 서버에서 선택한 날짜에 해당하는 사진 데이터를 가져옴 (예: Axios 또는 fetch 사용)
      const response = await fetchPhotosForDate(date);
      const photosForSelectedDate = response.data; // 데이터 형식에 따라서 수정 필요

      setPhotos(photosForSelectedDate);

      // 선택한 날짜를 상태에 저장
      setSelectedDate(date);
    } catch (error) {
      console.error("사진 데이터를 가져오는 중 오류 발생:", error);
    }
  };


  // 선택한 날짜에 맞게 사진 목록을 표시
  const renderPhotos = () => {
    if (!selectedDate) {
      return <p>날짜를 선택하세요.</p>;
    }

    if (photos.length === 0) {
      return <p>선택한 날짜에 사진이 없습니다.</p>;
    }

    return (
      <div>
        {photos.map((photo, index) => (
          <img key={index} src={photo.url} alt={`사진 ${index + 1}`} />
        ))}
      </div>
    );
  };

  // 서버에서 데이터를 가져오는 함수
  const fetchPhotosForDate = async (date) => {
    // 실제 서버 요청 코드를 여기에 작성
    // 예를 들어, Axios를 사용하여 서버에서 데이터를 가져오는 방법:
    // return axios.get(`/api/photos?date=${date}`);
  };

  // 주와 해당 주에 속하는 날짜를 동적으로 생성
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
                              onClick={() =>
                                handleDateClick(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date))
                              }
                            >
                              <p className="text-1xl text-gray-500 dark:text-gray-100 font-medium">
                                {date}
                              </p>
                              {/* 파란색 동그라미 */}
                              {selectedDate !== null && date === selectedDate.getDate() && (
                                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center" style={{ zIndex: 1 }}>
                                  {/* 원하는 아이콘 또는 내용을 추가할 수 있습니다 */}
                                </div>
                              )}
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
        {/* 이상한 박스를 제거하기 위한 빈 div */}
        <div className="md:py-8 py-5 md:px-16 px-5"></div>
      </div>
    );
  };

  return (
    <>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="text-center mt-10"> {/* text-center 클래스 추가 */}
      {generateCalendar()}

      {/* {renderPhotos()} */}
      </div>
    </>
  );
}
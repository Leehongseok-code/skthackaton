import React, { useEffect, useState, useCallback } from "react";
import '../../App.css';
import axios from 'axios';

const Scraps = () => {
  const [responseData, setResponseData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('http://192.168.133.214:8000/aidoctor/');
      setResponseData(response.data); // 서버 응답 데이터를 상태에 저장
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData(); // 컴포넌트가 마운트되면 데이터를 가져옴
  }, [fetchData]);

  return (
    <div className="App-header">
      <h1>Server Response:</h1>
      {responseData ? (
        <pre>{JSON.stringify(responseData, null, 2)}</pre> // 응답 데이터를 JSON 형태로 출력
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Scraps;
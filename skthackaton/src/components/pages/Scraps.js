import React, { useEffect, useState, useCallback } from "react";
import '../../App.css';
import '../../components/styles.css'; // 생성한 CSS 파일을 가져옵니다.
import axios from 'axios';
import Step, { StepperWithContent } from "../StepperWithContent";
import ProgressStepper from '../ProgressStepper';

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


  const [activeStep, setActiveStep] = useState(0);
  const steps = ['음악 생성', '이미지 선택', '콜라주'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>


<div>
      <h1>Progress Stepper Example</h1>
      <ProgressStepper steps={steps} activeStep={activeStep} />
      <div>
        {activeStep === steps.length - 1 ? (
          <div>
            <p>All steps completed</p>
          </div>
        ) : (
          <div>
            <div>
              <button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </button>
              <button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>


        
        <div className="App-header">
        {/* <StepperWithContent /> */}
          <h1>Server Response:</h1>
          {responseData ? (
              <pre>{JSON.stringify(responseData, null, 2)}</pre> // 응답 데이터를 JSON 형태로 출력
          ) : (
              <p>Loading...</p>
          )}
        </div>
    </>
  );
};

export default Scraps;
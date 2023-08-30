import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';
import Footer from '../Footer';
import ProgressStepper from '../ProgressStepper';

function Collage() {
  const [activeStep, setActiveStep] = useState(2);
  const steps = ['음악 생성', '이미지 선택', '콜라주'];

  const location = useLocation();
  const selectedImages = location.state?.selectedImages || [];

  console.log(selectedImages); // selectedImages 배열 출력

  return (
    <>
      <ProgressStepper steps={steps} activeStep={activeStep} />
      <div className="App-back">
        <div>
          <br></br><br></br>
          <h1 className='h1'>콜라주</h1><br></br><br></br>
          <div className="image-list">
            {selectedImages.map((imageInfo, index) => (
              imageInfo && (
                <div key={index}>
                  <img className="image-total" src={imageInfo.path} alt={imageInfo.name} />
                  <p>{imageInfo.name}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collage;
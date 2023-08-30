import React, { useState } from 'react';
import '../../App.css';
import '../SelectPic.css';
import '../StepButton.css';
import { useNavigate } from 'react-router-dom';
import Collage from './Collage';
import Step from "../StepperWithContent";
import { Button } from '../Button';
import Footer from '../Footer';
import MPlayer from '../MPlayer';
import CustomAudioPlayer from '../CustomAudioPlayer';


function SelectPic() {
  const totalSteps = 5; // 총 5단계
  const imagesPerStep = 4; // 한 단계당 4개의 이미지

  const navigate = useNavigate(); // useHistory 객체 생성

  const [selectedStep, setSelectedStep] = useState(0); // 선택된 단계
  const [selectedImages, setSelectedImages] = useState(Array(totalSteps).fill(null)); // 각 단계별 선택된 이미지 인덱스
  const [showCompleteButton, setShowCompleteButton] = useState(false);

  const imageInfo  = [
    { path: '/image/ex1.png', name: '강아지' },
    { path: '/image/ex2.png', name: '고양이' },
    { path: '/image/ex3.png', name: '냐옹이' },
    { path: '/image/ex4.png', name: '뽀로로' },
    { path: '/image/ex5.png', name: 'ex5' },
    { path: '/image/ex6.png', name: 'ex6' },
    { path: '/image/ex7.png', name: 'ex7' },
    { path: '/image/ex8.png', name: 'ex8' },
    { path: '/image/ex2.png', name: '이미지9' },
    { path: '/image/ex1.png', name: '이미지10' },
    { path: '/image/ex4.png', name: '이미지11' },
    { path: '/image/ex3.png', name: '이미지12' },
    { path: '/image/ex8.png', name: '이미지13' },
    { path: '/image/ex7.png', name: '이미지14' },
    { path: '/image/ex6.png', name: '이미지15' },
    { path: '/image/ex5.png', name: '이미지16' },
    { path: '/image/ex4.png', name: '이미지17' },
    { path: '/image/ex3.png', name: '이미지18' },
    { path: '/image/ex2.png', name: '이미지19' },
    { path: '/image/ex1.png', name: '이미지20' }
  ];

  const handleImageClick = (index) => {
    if (selectedStep < totalSteps) {
      if (selectedStep == 0) {
        const updatedSelectedImages = [...selectedImages];
        updatedSelectedImages[selectedStep] = index;
        setSelectedImages(updatedSelectedImages);
      } else if (selectedStep == 1) {
        const updatedSelectedImages = [...selectedImages];
        updatedSelectedImages[selectedStep] = index+4;
        setSelectedImages(updatedSelectedImages);
      } else if (selectedStep == 2) {
        const updatedSelectedImages = [...selectedImages];
        updatedSelectedImages[selectedStep] = index+8;
        setSelectedImages(updatedSelectedImages);
      } else if (selectedStep == 3) {
        const updatedSelectedImages = [...selectedImages];
        updatedSelectedImages[selectedStep] = index+12;
        setSelectedImages(updatedSelectedImages);
      }
      

      if (selectedStep < totalSteps - 1) {
        setSelectedStep(selectedStep + 1);
      }

      if (selectedStep === totalSteps - 1) {
        const updatedSelectedImages = [...selectedImages];
        updatedSelectedImages[selectedStep] = index+16;
        setSelectedImages(updatedSelectedImages);
        setShowCompleteButton(true);
        // navigate('/collage', { state: { selectedImages: selectedImageInfo } });
      }
    }
  };

  const selectedImageInfo = selectedImages.map((imageIndex, stepIndex) => {
    return imageIndex !== null ? imageInfo[imageIndex] : null;
  });

  const handleCompleteClick = () => {
    navigate('/collage', { state: { selectedImages: selectedImageInfo } });
  };

  return (
    <>
      <div className='Pic'>
        <div>
          <br></br>
          <div className="exp">음악과 어울리는 이미지를 골라보자!</div>
          <br></br>
          <div className="mplayer-container">
            <MPlayer/>
            {/* <CustomAudioPlayer/> */}
          </div>

          <div className="Content">
              <p>
                이미지를 클릭하거나 직접 말해보자!
              </p><br />
              {/* 이미지 선택 영역 */}
              {imageInfo.slice(selectedStep * imagesPerStep, (selectedStep + 1) * imagesPerStep).map((info, index) => (
                <div key={index} className="paint1">
                    <img
                      className="img"
                      alt={`num${selectedStep * imagesPerStep + index + 1}`}
                      src={info.path}
                      onClick={() => handleImageClick(index)}
                    />
                    <div className="text_b">{info.name}</div>
                  <br></br>
                </div>
              ))}
              <div className="step">{selectedStep+1}/5</div>
              {showCompleteButton && (
                <button
                  className="btns btn--large btn--music-style"
                  onClick={() => navigate('/collage', { state: { selectedImages: selectedImageInfo } })}
                >
                  완료
                </button>
              )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SelectPic;
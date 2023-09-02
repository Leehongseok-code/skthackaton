import React, { useState, useEffect  } from 'react';
import axios from "axios";
import '../../App.css';
import '../SelectPic.css';
import '../StepButton.css';
import { useLocation  , useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import MPlayer from '../MPlayer';
import CustomAudioPlayer from '../CustomAudioPlayer';
import ProgressStepper from '../ProgressStepper';


function SelectPic() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = ['음악 생성', '이미지 선택', '콜라주'];

  const totalSteps = 5; // 총 5단계
  const imagesPerStep = 4; // 한 단계당 4개의 이미지

  // URL 파라미터 받아오기
  const location = useLocation();
  const selectedNumber = location.state.selectedNumber;
  console.log("Received ID:", selectedNumber);

  const [selectedStep, setSelectedStep] = useState(0); // 선택된 단계
  const [selectedImages, setSelectedImages] = useState(Array(totalSteps).fill(null)); // 각 단계별 선택된 이미지 인덱스
  const [showCompleteButton, setShowCompleteButton] = useState(false);

  const [imageInfo, setImageInfo] = useState([]); // 이미지 정보 상태
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const navigate = useNavigate();

  useEffect(() => {
    handleGeneratePic(); // 컴포넌트가 마운트될 때 이미지 정보를 가져옴
  }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정

  const handleGeneratePic = () => {
    setLoading(true); // 로딩 상태 활성화
    axios
      .post(`http://49.50.162.196:8000/aidoctor/${selectedNumber}/`)
      .then((response) => {
        // 서버에서 받은 응답 데이터
        const serverImageInfo = response.data;

        // 서버에서 받아온 이미지 정보를 현재 이미지 정보에 추가
        const updatedImageInfo = serverImageInfo.map((item) => ({
          path: item.picture_url,
          name: item.kor,
          eng: item.word
        }));

        // imageInfo 배열 업데이트
        setImageInfo(updatedImageInfo);
      })
      .catch((error) => {
        // 오류 발생 시의 처리
      })
      .finally(() => {
        setLoading(false); // 로딩 상태 비활성화
      });
  };

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
    <ProgressStepper steps={steps} activeStep={activeStep} />
      <div className='Pic'>
        <div>
          <br></br>
          <div className="exp">음악과 어울리는 이미지를 골라보자!</div>
          
          <div className="mplayer-container">
            <MPlayer/>
            {/* <CustomAudioPlayer/> */}
          </div>

          <div className="Content">
              <p>
                이미지를 클릭하거나 직접 말해보자!
              </p><br />
              {/* 이미지 선택 영역 */}
              {loading ? (
                <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                  <h2 className="text-center text-white text-xl font-semibold">로딩 중...</h2><br></br>
                  <h2 className="text-center text-white text-xl font-semibold">Dalle2가 열심히 사진을 만들고 있어요!</h2><br></br>
                  <p className="text-center text-white">This may take a few seconds, please don't close this page.</p>
                </div>
              ) : (
                imageInfo.slice(selectedStep * imagesPerStep, (selectedStep + 1) * imagesPerStep).map((info, index) => (
                  <div key={index} className='paint1'>
                    <img
                      className='img'
                      alt={`num${selectedStep * imagesPerStep + index + 1}`}
                      src={info.path}
                      onClick={() => handleImageClick(index)}
                    />
                    <div className='text_b'>{info.name}</div>
                    <br></br>
                  </div>
                ))
              )}
              <div className="step">{selectedStep+1}/5</div><br></br>
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
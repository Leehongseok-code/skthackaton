import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import '../../App.css';
import Footer from '../Footer';
import ProgressStepper from '../ProgressStepper';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

function Collage() {
  const [activeStep, setActiveStep] = useState(2);
  const steps = ['음악 생성', '이미지 선택', '콜라주'];

  const location = useLocation();
  const selectedImages = location.state?.selectedImages || [];

  const [collageInfo, setCollageInfo] = useState([]); // 콜라주 이미지

  console.log(selectedImages); // selectedImages 배열 출력

  const handleDownloadAll = () => {
    const zip = new JSZip();

    // selectedImages 배열에서 이미지들을 ZIP 파일에 추가
    selectedImages.forEach((imageInfo, index) => {
      if (imageInfo) {
        const imageBlob = fetch(imageInfo.path).then((response) => response.blob());
        zip.file(`${imageInfo.name}.png`, imageBlob);
      }
    });

    // ZIP 파일 생성 및 다운로드
    zip.generateAsync({ type: 'blob' }).then((content) => {
      FileSaver.saveAs(content, 'collage_images.zip');
    });
  };

  //데이터 호출
  useEffect(() => {
    const transformedImages = selectedImages.map((imageInfo) => ({
      word: imageInfo.eng,
      kor: imageInfo.name,
      picture_url: imageInfo.path,
    }));

    axios
        .post(`http://49.50.162.196:8000/aidoctor/collage/`, { selectedImages: transformedImages })
        .then((response) => {
          // 서버에서 받은 응답 데이터
          const serverImageInfo = response.data;

          // 서버에서 받아온 이미지 정보를 콜라주에 넣기
          const collageImage = (
            <div>
              <img className='image-collage' src={serverImageInfo.image_url} alt="Collage" />
            </div>
          );

          // 콜라주 이미지를 collageInfo 상태에 설정
          setCollageInfo(collageImage);
        })
        .catch((error) => {
          // 오류 발생 시의 처리
        });
  }, []);

  return (
    <>
      <ProgressStepper steps={steps} activeStep={activeStep} />
      <div className="App-back">
        <div>
          <br /><br />
          <h1 className='h1'>콜라주</h1><br /><br />
          <div className="image-list">
            {selectedImages.map((imageInfo, index) => (
              imageInfo && (
                <div key={index}>
                  <img className="image-total" src={imageInfo.path} alt={imageInfo.name} />
                  <p className='p'>{imageInfo.name}</p>
                </div>
              )
            ))}
          </div><br></br>
          <button className="download-all-btn" onClick={handleDownloadAll}>
            모든 이미지 다운로드
          </button>
          <br></br><br></br><br></br>
          <div>
            {/* 콜라주 이미지 */}
            {/* <img className='image-collage' src='/image/a4size.jpg' alt="Collage" /> */}
            {collageInfo}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collage;
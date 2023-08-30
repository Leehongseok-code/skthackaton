import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
                  <p>{imageInfo.name}</p>
                </div>
              )
            ))}
          </div><br></br>
          <button className="download-all-btn" onClick={handleDownloadAll}>
            모든 이미지 다운로드
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collage;
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';
import Footer from '../Footer';

function Collage() {
  const location = useLocation();
  const selectedImages = location.state?.selectedImages || [];

  console.log(selectedImages); // selectedImages 배열 출력

  return (
    <>
      <div className="App-back">
        <div>
          <h2>콜라주</h2>
          {selectedImages.map((imageInfo, index) => (
            imageInfo && (
              <div key={index} className="btn-center">
                <img src={imageInfo.path} alt={imageInfo.name} />
                <p>{imageInfo.name}</p>
              </div>
            )
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collage;
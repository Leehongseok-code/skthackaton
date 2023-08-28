import React, { useState } from 'react';
import '../../App.css';
import '../StepButton.css';
import Step from "../Step";
import { Button } from '../Button';
import Cards2 from '../Cards2';
import Footer from '../Footer';
import {Link} from 'react-router-dom';



function SelectPic() {

  return (
    <>
    {/* <Step /> */}
    {/* <div className="App-header"> */}
    <div className='App-back'>
    <>
    <div className="btn-center"> {/* 중앙에 정렬할 부모 요소 */}
     <Button className = 'btns' buttonStyle = 'btn--primary' 
                 buttonSize = 'btn--large'>음악 재생<i className = 'far fa-play-circle'/></Button>
    </div>
      <Cards2 />
      {/* <Board /> */}
      <br></br>
      <br></br>
      <br></br>
      
    <div className="btn-right"> {/* 오른쪽에 정렬할 부모 요소 */}
      <Button className = 'btns' buttonStyle = 'btn--primary' 
                 buttonSize = 'btn--large'>다음</Button>
    </div>

    <br></br>
    <br></br>
    <br></br>

    <Footer />
    </>
    {/* </div> */}
    </div>
    </>
    
  );
}

export default SelectPic;
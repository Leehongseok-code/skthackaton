import '../../App.css';
import React, { useState } from "react";
import Footer from '../Footer';
import axios from "axios";
import Cards2 from '../Cards2';

function Music() {
//   const [text, setText] = useState("없음");
  
//   const clicked = () => {
//     axios
//       .post("http://192.168.135.207:8000/", {
//         params: {
//           abc: "가나다",
//         },
//       })
//       .then((response) => setText(JSON.stringify(response.data)));
//   };

//   return (
//     <div>
//       <h1>{text}</h1>
//       <button onClick={clicked}>클릭</button>
//     </div>
//   );
  return (
    <>
      <Cards2 />
      {/* <Board /> */}
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default Music;
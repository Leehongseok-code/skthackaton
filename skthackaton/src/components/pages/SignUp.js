import React, { useState } from 'react';
import { auth } from "../../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from 'axios';
import '../../App.css';
import Footer from '../Footer';


const SignUp = () => {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [text, setText] = useState("서버 테스트");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 사용자가 입력한 이메일과 비밀번호를 객체로 만듦
    const userData = {
      email: email,
      password: password,
    };

    // Axios 사용하여 서버에 POST 요청 보내기
    axios
      .post('http://192.168.135.207:8000/', userData) // POST 요청으로 변경
      .then((response) => {
        if (response.data.success) {
          setText("로그인 성공"); // 로그인 성공 메시지 표시
        } else {
          setText("로그인 실패"); // 로그인 실패 메시지 표시
        }
      })
      .catch((error) => {
        // 에러 처리 하기
        console.error(error);
      });
  };

  return (
    <>
    <div className='App-back'>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          정서랑<br></br>{text}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              이메일
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                비밀번호
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  비밀번호 찾기
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relate w-full justify-center rounded-md bg-black px-3 py-1.5 text-m font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mb-2"
            >
              로그인
            </button>
            <button
              onClick={handleGoogleLogin}
              className="relate w-full justify-center rounded-md bg-white px-3 py-1.5 text-m font-semibold leading-6 text-gray-500 shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <img className='login-google' alt="google" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png' />
              <span className="login-google-text">Google 계정으로 로그인</span>
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          회원이 아닌가요?{'   '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            회원가입하기
          </a>
        </p>
      </div>
    </div>
    </div>
    <div>
      <div>
        {userData
          ? "당신의 이름은 : " + userData.displayName
          : "로그인 버튼을 눌러주세요 :)"}
      </div>
    </div>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <Footer />
  </>
  );
};

export default SignUp;
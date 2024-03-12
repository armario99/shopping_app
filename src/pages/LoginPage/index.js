import React ,{ useState }from 'react';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate  } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyC_J8mwylM_oCFj9jtjtT_h-5BSdlruoIo",
    authDomain: "shopping-mall-8b4ac.firebaseapp.com",
    projectId: "shopping-mall-8b4ac",
    storageBucket: "shopping-mall-8b4ac.appspot.com",
    messagingSenderId: "192947437028",
    appId: "1:192947437028:web:f509af4e9f843f88a99bf1",
    measurementId: "G-L6XZMHBJ6L"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLoginClick1 = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('회원 가입 성공');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('회원 가입 실패');
    });
    console.log('회원 가입 버튼이 클릭되었습니다.');
  };

  const handleLoginClick2 = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('로그인 성공');
      navigate('/');
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('로그인 실패');
    });
      console.log('로그인 버튼이 클릭되었습니다.');
    };



  return (
    <div>
      <h2>Login Page</h2>
      <p> 로그인 폼 및 관련 컴포넌트들을 여기에 추가하세요 </p>
      <form className="container">
        <h1>로그인</h1>
        <div className='log_input'>
          <input 
            type="text" 
            placeholder="e-mail@" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="log_btn">
          <button type="button" onClick={() => handleLoginClick1(email, password)}>회원가입</button>
          <button type="button" onClick={() => handleLoginClick2(email, password)}>로그인</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;

import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { loginUserState } from "../../Contexts/Atom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleLoginButton from "./GoogleLogin";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { login } from "../../Api/AuthApi";
import { handleGoogleLogin } from "../../Api/AuthApi";

const LoginDiv = styled.div`
  flex-direction: column;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  align-items: stretch;
  height: 93.9vh;
  width: 100vw;
`;

const Login = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 50%;
  bottom: 0;
  width: 100%;
  margin-top: 5%;
  font-family: "180";
  font-size: 40px;
`;

const LoginPage = () => {
  // const handleGoogleLogin = async () => {
  //   try {
  //     const auth = getAuth();
  //     const provider = new GoogleAuthProvider(); // provider를 구글로 설정
  //     await signInWithPopup(auth, provider); // popup을 이용한 signup
  //     const user = auth.currentUser;
  //     console.log("유저정보:  ", user);

  //     login(user);

  //     return user;
  //   } catch (error) {
  //     console.error("Google 로그인 에러:", error);
  //   }
  // };

  const [userInfo, setUserInfo] = useRecoilState(loginUserState);

  return (
    <LoginDiv>
      <Login>
        <Button onClick={handleGoogleLogin}>Sign to Bingo</Button>
        <GoogleLoginButton />
      </Login>
    </LoginDiv>
  );
};

export default LoginPage;
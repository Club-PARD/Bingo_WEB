/* eslint-disable */
import React from "react";
import styled from "styled-components";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {Login} from "@mui/icons-material";
import {Div} from "../../Components/NormalComponents/Section";
import {Img} from "../../Components/NormalComponents/Etc";
import GoogleLoginButton from "./GoogleLogin";

const Introwhole = styled.div `
  background-color: whitesmoke;
  height: 100vh;
  border: 1px solid black;
`;

const LoginDiv = styled.div `
  display: flex;
  height: 20vh;
  flex-direction: row;
  align-items: center;
  border: 1px solid red;
  right: 0;
  margin-left: auto; /* 이 부분을 추가하여 오른쪽에 마진을 줌 */
`;

const LoginBtn = styled.button `
  border-radius: 25px;
  border: 1px solid transparent;
  background-color: gainsboro;
  padding: 1%;
`;

const MainDiv = styled.div `
  display: flex;
  height: 80vh;
  border: 1px solid blue;
`;

const Intro = () => {
    const backgroundImageUrl = "/img/IntroBackground.jpeg";
    const divStyle = {
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", // 이미지가 div에 맞게 조절되도록 cover로 설정
        // 여기에 필요한 다른 스타일 속성들을 추가할 수 있습니다.
    };

    const GoogleLoginButtonStyle = {
        position: "Absolute",
        top: "85vh",
        left: "8.5vw",
    };
    return (
        <Div style={divStyle}>
            <Div style={GoogleLoginButtonStyle}>
                <GoogleLoginButton/>
            </Div>
        </Div>
    );
};

export default Intro;

// {/* 전체 화면 담당 Div */} <Introwhole>   {/* 로그인 버튼이 들어갈 부분 */}   <LoginDiv>
// <LoginBtn onClick={() => (window.location.href = "/Login")}>       Login
// </LoginBtn>   </LoginDiv>   <MainDiv>       Bingo   </MainDiv> </Introwhole>
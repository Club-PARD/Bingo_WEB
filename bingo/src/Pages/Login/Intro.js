/* eslint-disable */
import React from "react";
import styled from "styled-components";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {Login} from "@mui/icons-material";
import {Div} from "../../Components/NormalComponents/Section";
import {Img} from "../../Components/NormalComponents/Etc";
import GoogleLoginButton from "./GoogleLogin";

const Introwhole = styled.div`
  width: 100vw;
  height : 100vh;
  background-image: url("/img/IntroBackground.jpeg");
  background-size: cover;
  padding-top: 7%;
  box-sizing: border-box;
`;

const LoginDiv = styled.div ` 
  height: 7%;
  width: 100%;
  display: flex;
  justify-content: end;
  background-color: aliceblue;
`;

const LoginBtn = styled.button `
  width: 6%;
  height: 100%;
  font-size: 24px;
  border-radius: 30px;
  border: 1px solid transparent;
  background-color: gainsboro;
  margin-right: 3%;
`;

const MainDiv = styled.div `
  display: flex;
  height: 80vh;
  border: 1px solid blue;
`;

const Intro = () => {
    return (
      <Introwhole>
        <LoginDiv>
          <LoginBtn onClick={() => (window.location.href = "/Login")}>로그인</LoginBtn>
        </LoginDiv>
      </Introwhole>
    );
};

export default Intro;
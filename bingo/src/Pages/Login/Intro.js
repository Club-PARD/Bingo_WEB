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
  box-sizing: border-box;
`;

const LoginDiv = styled.div `
  position : absolute;
  height: 5%;
  width: 100%;
  top : 0vh;
  left : 90vw;
  font-size : 200px;
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
    return (
      <Introwhole>
        <LoginDiv>
          <LoginBtn onClick={() => (window.location.href = "/Login")}>Login</LoginBtn>
        </LoginDiv>
      </Introwhole>
    );
};

export default Intro;
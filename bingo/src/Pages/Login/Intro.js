/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Login } from "@mui/icons-material";

const Introwhole = styled.div`
  background-color: whitesmoke;
  height: 100vh;
  border: 1px solid black;
`;

const LoginDiv = styled.div`
  display: flex;
  height: 20vh;
  flex-direction: row;
  align-items: center;
  border: 1px solid red;
  right: 0;
  margin-left: auto; /* 이 부분을 추가하여 오른쪽에 마진을 줌 */
`;

const LoginBtn = styled.button`
  border-radius: 25px;
  border: 1px solid transparent;
  background-color: gainsboro;
  padding: 1%;
`;

const MainDiv = styled.div`
  display: flex;
  height: 80vh;
  border: 1px solid blue;
`;

const Intro = () => {
  return (
    <>
      {/* 전체 화면 담당 Div */}
      <Introwhole>
        {/* 로그인 버튼이 들어갈 부분 */}
        <LoginDiv>
          <LoginBtn onClick={() => (window.location.href = "/Login")}>
            Login
          </LoginBtn>
        </LoginDiv>
        <MainDiv>
            Bingo
        </MainDiv>
      </Introwhole>
    </>
  );
};

export default Intro;

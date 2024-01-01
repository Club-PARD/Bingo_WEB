/* eslint-disable */
import React from "react";
import styled from "styled-components";

const Introwhole = styled.div`
  width: 100vw;
  height : 100vh;
  background-image: url("/img/Login/Intro.png");
  background-size: cover;
  padding-top: 7%;
  box-sizing: border-box;
`;

const LoginDiv = styled.div `
  margin-left : 10%;
  height: 75%;
  width: 30%;
  display: flex;
  /* justify-content: center; */
  align-items : left;
  flex-direction : column;
  border : 1px solid red;
`;
const Div1 = styled.div`
  color : "#000";
  font-size : 15px;
  margin-top : 0;
`
const Div2 = styled.div`
  color : "#222";
  font-size : 40px;
  font-weight : 400;
`
const Div3 = styled.div`
  color : #000;
  font-size : 20px;
`
const LoginBtn = styled.button `
  width: 40%;
  height: 10%;
  font-size: 24px;
  border-radius: 40px;
  border: 1px solid transparent;
  background: url("/img/Login/IntroBtn.png") no-repeat;
  background-size: cover;
  margin-right: 3%;
`;

const Intro = () => {
    return (
      <Introwhole>
        <LoginDiv>
          <Div1>팀의 발전과 성장을 위한 회고 서비스, BINGO</Div1>
          <Div2>방법은 가볍게, <br /> 느낀점은 무겁게!</Div2>
          <Div3>
            빙고는 팀에 가장 <strong>적합한 방법과 질문</strong>으로 회고를 작성하고, <br /> 
            모두의 답변이 작성되면 <strong>한눈에 결과를 보고 분석</strong>할 수 있습니다.
          </Div3>
          <LoginBtn onClick={() => (window.location.href = "/Login")} />
        </LoginDiv>
      </Introwhole>
    );
};

export default Intro;
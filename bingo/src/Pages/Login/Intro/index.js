/* eslint-disable */
import React from "react";
import styled from "styled-components";

const Introwhole = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/img/Login/Onboard.png");
    background-size: cover;
    padding-top: 7%;
    box-sizing: border-box;
`;

const LoginDiv = styled.div`
    margin-left: 10%;
    height: 75%;
    width: 35%;
    display: flex;
    /* justify-content: center; */
    margin-top : 4%;
    align-items: left;
    flex-direction: column;
    /* border: 1px solid red; */
`;
const Div1 = styled.div`
    color: "#000";
    font-size: 17px;
    margin-top: 0;
    margin-bottom : 5%;
`;
const Div2 = styled.div`
    color: "#222";
    font-size: 50px;
    font-weight : bold;
    margin-bottom : 7%;
`;
const Div3 = styled.div`
    color: #000;
    font-size: 23px;
    margin-bottom : 5%;
`;
const Reddot = styled.img`
  width : 0.5vw;
  margin : 3% 0 5% 1%;
`
const LoginBtn = styled.button`
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
                <Div1>팀의 발전과 성장을 위한 회고 아카이빙 서비스, 빙고</Div1>
                <Div2>
                    더 나은 우리를 위해,
                    <br />
                    함께 채우는 순간들!
                </Div2>
                <Div3>
                    팀 회고를 통해 프로젝트의 결과와 과정의
                    <strong>BALANCE</strong>를 맞춰보세요! <br />
                    우리 팀에 가장 <strong>적합한 방법</strong>과 질문으로
                    과정을 돌아보고,
                    <br /> 한눈에 <strong>모두의 답변을 모아보며</strong>{" "}
                    프로젝트의 마침표를 찍어보세요.
                </Div3>
                <Reddot src="/img/Login/Reddot.png" />
                <LoginBtn onClick={() => (window.location.href = "/Login")} />
            </LoginDiv>
        </Introwhole>
    );
};

export default Intro;

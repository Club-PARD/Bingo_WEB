/* eslint-disable */

import React from "react";
import styled from "styled-components";
import Reddotimg from "../../../assets/Img/Login/Reddot.png";
import OnBoard from "../../../assets/Img/Login/Onboard.png";
import IntroBtn from "../../../assets/Img/Login/IntroBtn.png";
import "../../../font.css";

const Introwhole = styled.div`
    width: 100vw;
    height: 93.9vh;
    background-image: url(${OnBoard});
    background-size: cover;
    padding-top: 7%;
    box-sizing: border-box;
`;

const LoginDiv = styled.div`
    margin-left: 12.4vw;
    height: 75%;
    width: 35%;
    display: flex;
    /* justify-content: center; */
    margin-top: 4%;
    align-items: left;
    flex-direction: column;
    /* border: 1px solid red; */
`;
const Div1 = styled.div`
    color: #000;
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    margin-left: 0.2vw;
    margin-bottom: 1.1vh;
`;
const Div2 = styled.div`
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 72px */
    margin-bottom: 3.7vh;
`;
const Div3 = styled.div`
    color: #000;
    font-family: "140";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    margin-left: 0.2vw;
    margin-bottom: 1.1vh;
`;
const Reddot = styled.img`
    width: 0.5vw;
    margin: 2.2vh 0 3.3vh 1%;
`;
const LoginBtn = styled.button`
    width: 10.2vw;
    height: 5.7vh;
    font-size: 24px;
    border-radius: 40px;
    border: 1px solid transparent;
    background: url(${IntroBtn}) no-repeat;
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
                    팀 회고를 통해 잘하기와 자라기 사이의{" "}
                    <strong>BALANCE</strong>를 맞춰보세요!
                </Div3>
                <Div3>
                    팀에 <strong>가장 적합한 방법</strong>과{" "}
                    <strong>질문</strong>으로 프로젝트 과정을 돌아보고,
                    <br /> 모두의 답변을 <strong>한눈에 모아보며</strong>{" "}
                    마침표를 찍어보세요.
                </Div3>
                <Reddot src={Reddotimg} />
                <LoginBtn onClick={() => (window.location.href = "/Login")} />
            </LoginDiv>
        </Introwhole>
    );
};

export default Intro;

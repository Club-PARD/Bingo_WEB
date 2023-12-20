/* eslint-disable */

import React from "react";
import styled from "styled-components";
import {ID, LoginBtn, PW} from "../Preset/LoginPreset";
import GoogleLoginButton from "./GoogleLogin";

// 로그인 화면 전체를 감싸는 Div
// 서비스에 가장 먼저 접속할 화면이 로그인 화면이기 때문에, 로그인 기능과 더불어 서비스에 대한 간략한 설명을 첨부하면 좋을 것 같아 7:3 비율로 화면을 나누었습니다
const LoginDiv = styled.div`
    display: flex;
    background-color: moccasin;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto; /* 가운데 정렬을 위한 추가 */
    align-items: stretch; /* 하위 클래스 left, right의 높이를 자동으로 맞춤 */
    height: 100vh; /* 화면 전체에 적용 */
`;

// 여기서부터는 로그인 화면에서 보여줄 서비스의 간략한 설명
const AboutUs = styled.div`
    flex : 70%;
    border : 5px solid red;
`

// 여기서부터는 로그인 관련 화면과 종속 컴포넌트
const Login = styled.div`
    flex : 30%;
    border : 5px solid blue;
    display : flex;
    flex-direction : column;
    padding : 50px 10px 0px 10px;
    align-items: center;
`;
const Input = styled.input`
    border : 1px solid black;
`;
const Btn = styled.button`
    border-radius : 25px;
    background-color : beige;
`;

const LoginPage = () => {
    return (
        <LoginDiv>
            <AboutUs>프로그램 설명</AboutUs>
            <Login>
                <ID />
                <PW />
                <LoginBtn />
                <GoogleLoginButton />
            </Login>
        </LoginDiv>
    );
}

export default LoginPage;
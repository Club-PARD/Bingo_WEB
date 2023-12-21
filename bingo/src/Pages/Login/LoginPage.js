/* eslint-disable */
import React from "react";
import styled from "styled-components";
import {ID, LoginBtn, PW} from "../../Preset/LoginPreset";
import GoogleLoginButton from "./GoogleLogin";
import { Img } from "../../Components/NormalComponents/Etc";
import { P } from "../../Components/NormalComponents/Text";

// 로그인 화면 전체를 감싸는 Div
// 서비스에 가장 먼저 접속할 화면이 로그인 화면이기 때문에, 로그인 기능과 더불어 서비스에 대한 간략한 설명을 첨부하면 좋을 것 같아 7:3 비율로 화면을 나누었습니다
const LoginDiv = styled.div`
    display: flex;
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
    position: absolute;
    left: 0;
    width: 70%;
`

// 여기서부터는 로그인 관련 화면과 종속 컴포넌트
const Login = styled.div`
    // 정렬을 위해 화면을 flex하게 만들어 두기
    display : flex;
    // 가로 기준 중앙 정렬
    justify-content : center;
    // 세로 기준 중앙 정렬    
    align-items : center;
    flex-direction : column;
    right: 0;
    height: 100%;
    position: fixed;
    top: 0; 
    bottom: 0; 
    width: 30%; 
    background-color : whitesmoke;
`;

const LoginPage = () => {
    return (
        <LoginDiv>
            <AboutUs>
                <Img src="/img/Login/img1.png" width={"100%"}/>
                <Img src="/img/Login/img2.png" width={"100%"}/>
                <Img src="/img/Login/img3.png" width={"100%"}/>
                <Img src="/img/Login/img4.png" width={"100%"}/>
            </AboutUs>
            <Login>
                <P>Bingo</P>
                <GoogleLoginButton />
            </Login>
        </LoginDiv>
    );
}

export default LoginPage;
/* eslint-disable */

import React, { useEffect } from "react";
import styled from "styled-components";
import { ID, LoginBtn, PW } from "../../Preset/LoginPreset";
import GoogleLoginButton from "./GoogleLogin";
import { Img } from "../../Components/NormalComponents/Etc";
import { P } from "../../Components/NormalComponents/Text";
import { Button } from "@mui/material";
import { Div } from "../../Components/NormalComponents/Section";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginUserState } from "../../Contexts/Atom";

// 로그인 화면 전체를 감싸는 Div
// 서비스에 가장 먼저 접속할 화면이 로그인 화면이기 때문에, 로그인 기능과 더불어 서비스에 대한 간략한 설명을 첨부하면 좋을 것 같아 7:3 비율로 화면을 나누었습니다
const LoginDiv = styled.div`
    flex-direction: column;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto; /* 가운데 정렬을 위한 추가 */
    align-items: stretch; /* 하위 클래스 left, right의 높이를 자동으로 맞춤 */
    height: 100vh; /* 화면 전체에 적용 */
    width: 100vw;
`;
// 여기서부터는 로그인 화면에서 보여줄 서비스의 간략한 설명
const AboutUs = styled.div`
    position: absolute;
    left: 0;
    width: 70%;
`;
// 여기서부터는 로그인 관련 화면과 종속 컴포넌트
const Login = styled.div`
    // 정렬을 위해 화면을 flex하게 만들어 두기
    display: flex;
    // 가로 기준 중앙 정렬
    justify-content: space-evenly;
    // 세로 기준 중앙 정렬
    align-items: center;
    flex-direction: column;
    /* right: 0; */
    height: 50%;
    bottom: 0;
    width: 100%;
    margin-top: 5%;
`;
const Logo = styled.div`
    height: 10%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 40px;
    text-decoration: none;
    color: black;
    padding: 1% 0 0 2%;
`;
const LogoLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
const LoginPage = () => {
    const login = () => {
        location.href =
            "https://accounts.google.com/o/oauth2/auth?client_id=21090106612-s57k2u6n2ao9odt0p7r6l8mu2i3n4lia.apps.googleusercontent.com&redirect_uri=http://ec2-13-209-82-115.ap-northeast-2.compute.amazonaws.com:8080/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
    };

    const [userInfo, setUserInfo] = useRecoilState(loginUserState);
    // useEffect(() => {
    //     console.log("Updated UserInfo:", userInfo);
    // }, [userInfo]);
    return (
        <LoginDiv>
            <Login>
                <h1>Sign to Bingo</h1>
                <GoogleLoginButton />
            </Login>
        </LoginDiv>
    );
};

export default LoginPage;

/* eslint-disable */
import React from "react";
import styled from "styled-components";
import {ID, LoginBtn, PW} from "../../Preset/LoginPreset";
import GoogleLoginButton from "./GoogleLogin";
import { Img } from "../../Components/NormalComponents/Etc";
import { P } from "../../Components/NormalComponents/Text";
import { Button } from "@mui/material";
import { Div } from "../../Components/NormalComponents/Section";

const Intro = () => {
    return (
        <>
            {/* 전체 화면 담당 Div */}
            <Div backgroundColor="whitesmoke" height="100vh">
                {/* 로그인 버튼이 들어갈 부분 */}
                <Div height="20vh">
                    <Button borderRadius="2px" border="1px solid black">로그인</Button>
                </Div>
            </Div>
        </>
    );
}

export default Intro;
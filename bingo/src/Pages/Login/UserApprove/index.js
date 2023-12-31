import { colors } from "@mui/material";
import React from "react";
import styled from "styled-components";

// 전체를 감싸는 div
const Whole = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    padding : 7%;
`
// 모든 컴포넌트를 감싸는 옅은 회색 div
const WholeBox = styled.div`
    display : flex;
    align-items: center;
    flex-direction : column;
    text-align :center;
    background-color: #F9F9F9;
    width: 30vw;
    height: 65vh;
    border-radius: 36px;
    border: 2px solid transparent;
`
// 빙고 로고 
const LogoImg = styled.img`
    width : 15%;
    padding : 7%;
`
const ProfileBox = styled.div`
    height : 25vh;
    width : 10vw;
    margin : 5%;
`
const ProfileImgBox = styled.div`
    border : 1px solid transparent;
    border-radius : 24px;
    height : 70%;
    background-color : #EFEFEF;
    margin-bottom : 5%;
    display : flex;
    justify-content : center;
    align-items : center;
`
const ProfileImg = styled.img`
    border-radius : 50%;
    border : 1px solid red;
    width : 50%;
`
const ProfileName = styled.div`
    border : 1px solid transparent;
    border-radius : 24px;
    height : 25%;
    background-color : #EFEFEF;
    display : flex;
    justify-content : center;
    align-items : center;
`
const NameSpace = styled.div`
    
`
const Approve = styled.button`
    border : 1px solid #EA4336;
    background-color : #EA4336;
    border-radius : 40px;
    color : white;
    font-size : 20px;
    width : 35%;
    height : 8%;
    margin : 5%;
`

const UserApprove = () => {
    return (
        <Whole>
            <WholeBox>
                <LogoImg src="/img/UserApprove/Logo_UserApprove.png" />
                <div style={{ color: "#222222" }}>
                    입력하신 내용으로<br />
                    빙고 계정을 생성할까요?
                </div>
                <ProfileBox>
                    <ProfileImgBox>
                        <ProfileImg src="img/UserApprove/Logo_Circle.png" />
                    </ProfileImgBox>
                    <ProfileName>

                    </ProfileName>
                </ProfileBox>
                <div style={{ color: "#222222" }}>
                    동의하고 가입하기 버튼을 누르는 것으로<br />
                    빙고 이용 약관과 개인정보 처리 방침에 동의합니다.
                </div>
                <Approve>
                    동의하고 가입하기
                </Approve>
            </WholeBox> 
        </Whole>
    )
}

export default UserApprove;

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
    background-color: whitesmoke;
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
    border : 1px solid red;
    height : 25vh;
    width : 10vw;
    margin : 5%;
`

const UserApprove = () => {
    return (
        <Whole>
            <WholeBox>
                <LogoImg src="/img/UserApprove/Logo_UserApprove.png" />
                <div>입력하신 내용으로<br/>빙고 계정을 생성할까요?</div>
                <ProfileBox>
                </ProfileBox>
            </WholeBox> 
        </Whole>
    )
}

export default UserApprove;

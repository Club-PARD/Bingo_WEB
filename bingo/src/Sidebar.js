import {Outlet} from "react-router";
import styled from "styled-components";
import {Div} from "./Components/NormalComponents/Section";
import {Component, useEffect, useState} from "react";
import {Img} from "./Components/NormalComponents/Etc";
import {Button} from "./Components/NormalComponents/Form";
import {P} from "./Components/NormalComponents/Text";
import {CenterDiv} from "./Components/NormalComponents/Section";

// Sidebar
export default function Sidebar() {

    // 사용자 이미지
    const [userImage, setUserImage] = useState();
    // 프로젝트 이미지
    const [projectImage, setProjectImage] = useState();

    // 렌더링 시 한 번 발생
    useEffect(() => {
        setUserImage(`/img/Sidebar/account_circle.png`);
        setProjectImage(`/img/Sidebar/material-symbols_home-outline.png`);
    },);

    return (
        <Div width="100vw" height="100vh">
            {/* Sidebar 영역 */}
            <SidebarLayout userImage={userImage} projectImage={projectImage}></SidebarLayout>

            {/* Outlet 영역 */}
            <ScreenView/>
        </Div>
    );
}

//
//
//

// 사용자 정보
const UserData = [
    {
        name: "홍길동"
    }
];

// [스타일] 사각형 한 영역
const Rect = styled(CenterDiv)`
    width: 100%;  
    height : ${props => props.height || ''};
`;

// [스타일] 사각형 내의 박스 영역 (묶음을 위한 용도)
const RectBoxDetail = styled(CenterDiv)`
    flex-direction: column;

`;

// [스타일] Sidebar 레이아웃
const SideDiv = styled(CenterDiv)`
    width : 8%;
    height : 96%;
    flex-direction : column;
    margin: 1% 1%;
    position : sticky;
    top : 0;
`

// [스타일] Sidebar 내부의 회색 영역
const SideDivInner = styled(CenterDiv)`
    width: 100%;
    height: 100%;
    background-color: gainsboro;
    border-radius : 15px;
    flex-direction: column;
`;

// 좌측에 보여질 Sidebar 레이아웃
const SidebarLayout = (e) => {
    return (
        <SideDiv>
            {/* 회색 배경 */}
            <SideDivInner>
                {/* 사용자 이미지 영역 */}
                <Rect height="15%">
                    <RectBoxDetail>
                        <Img src={e.userImage} width="100%" height="auto"/>
                        <P>{UserData[0].name}</P>
                    </RectBoxDetail>
                </Rect>

                {/* 프로젝트 이미지 영역 */}
                <Rect height="15%">
                    <RectBoxDetail>
                        <Img src={e.projectImage} width="100%" height="auto "/>
                        <P>프로젝트</P>
                    </RectBoxDetail>
                </Rect>

                {/* 공백 영역 */}
                <Rect height="60%"></Rect>

                {/* 로그아웃 영역 */}
                <Rect height="10%">
                    <Button width="80px" height="30px" borderRadius="10px">로그아웃</Button>
                </Rect>

            </SideDivInner>
        </SideDiv>
    );
}

// 우측에 보여질 Outlet 레이아웃
const ScreenView = (e) => {
    return (
        <main style={{
            width: "90%",
            height : "100%"
            }}>
            <Outlet/>
        </main>
    );
}
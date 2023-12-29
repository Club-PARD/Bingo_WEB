import { Outlet } from "react-router";
import styled from "styled-components";

function TopMenuBar(){
    return(
        <>
            <header>
                <Header>
                    <LeftSide>
                        <LogoImg src="/img/TopMenuBar/Logo.png" width="100%" height="auto "/>
                        <ProjectDiv>프로젝트</ProjectDiv>
                    </LeftSide>
                    <RightSide>로그아웃</RightSide>
                </Header>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default TopMenuBar;

const Header = styled.div`
    width: 100vw;
    height: 5vh;
    border-bottom: 1px solid #DBDBDB;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
//Topmenu의 왼쪽규격
//로고와 프로젝트
const LeftSide=styled.div`
    box-sizing: border-box;
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 3%;
`
//로고
const LogoImg=styled.img`
    width: 45%;
    height: auto;
`
//프로젝트
const ProjectDiv=styled.div`
    color: #BBB;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
//Topmenu 오른쪽
//로그아웃
const RightSide=styled.div`
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 5%;
`

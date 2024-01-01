import { Outlet } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TopMenuBar(){
    return(
        <>
            <header>
                <Header>
                    <LeftSide>
                        <LogoLink>
                            <LogoImg src="/img/TopMenuBar/Logo.png" width="100%" height="auto "/>
                        </LogoLink>
                        {/* <ProjectDLink to="/WorkspaceList">프로젝트</ProjectDLink> */}
                    </LeftSide>
                    <LogoutLink to="/">로그아웃</LogoutLink>
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
    height: 6vh;
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
    justify-content: center;
    align-items: center;
    margin-left: 3%;
`
//로고
const LogoLink=styled(Link)`
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    align-items: center;
    padding-top: 3%;
`
const LogoImg=styled.img`
    width: 90%;
    height: auto;
    margin : 10% 0% 0% 0%;
`
//프로젝트
const ProjectDLink=styled(Link)`
    color: #BBB;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
`
//로그아웃
const LogoutLink=styled(Link)`
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-right: 5%;
    text-decoration: none;
`

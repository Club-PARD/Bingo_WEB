import { Outlet, useLocation } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TopMenuBar() {
    const location = useLocation();
    return (
        <>
            <header>
                <Header>
                    <LogoLink to="/workspaceView">
                        <LogoImg
                            src="/img/TopMenuBar/Logo.png"
                            width="5vw"
                            height="auto "
                        />
                    </LogoLink>
                    {location.pathname === "/" ||
                    location.pathname === "/Login" ? (
                        <LogoutLink to="/Login">로그인</LogoutLink>
                    ) : (
                        <LogoutLink to="/">로그아웃</LogoutLink>
                    )}
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
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
//Topmenu의 왼쪽규격
//로고와 프로젝트

//로고
const LogoLink = styled(Link)`
    box-sizing: border-box;
    align-items: center;
    margin-left: 12.5vw;
`;
const LogoImg = styled.img`
    width: 5vw;
    height: auto;
    margin: 10% 0% 0% 0%;
`;
//로그아웃
const LogoutLink = styled(Link)`
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    margin-right: 12.5vw;
`;

/* eslint-disable */

import { Outlet, useLocation } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Div } from "../Components/NormalComponents/Section";
import Logo from "../assets/Img/TopMenuBar/Logo.png";
import { handleGoogleLogin } from "../Api/AuthApi";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { loginUserState } from "../Contexts/Atom";
import { Logout } from "../Api/AuthApi";
import "../font.css";

function TopMenuBar() {
    const asd = localStorage.getItem("recoil-persist");
    if (asd !== null) {
        const storedData = JSON.parse(asd);
        const userId = storedData.uniqueLoginUserKey?.appUser?.id; // 옵셔널 체이닝 연산자 사용
        if (userId) {
            console.log("사용자 ID:", userId);
        } else {
            console.log("사용자 ID를 찾을 수 없습니다.");
        }
    }

    const [userInfo, setUserInfo] = useRecoilState(loginUserState);

    const handleLogout = () => {
        localStorage.removeItem("email");
        window.location.href = "/";
    };

    const location = useLocation();
    const canGoToWorkspaceView = () => {
        return location.pathname !== "/" && location.pathname !== "/Login";
    };
    return (
        <>
            <header>
                <Header>
                    {canGoToWorkspaceView() ? (
                        <LogoLink to="/workspaceList">
                            <LogoImg src={Logo} width="5vw" height="auto " />
                        </LogoLink>
                    ) : (
                        <Div
                            margin="0 0 0 12.5vw"
                            boxSizing="border-box"
                            alignItems="center"
                        >
                            <LogoImg src={Logo} width="5vw" height="auto " />
                        </Div>
                    )}
                    {location.pathname === "/" || location.pathname === "/Login" ? (
                        <LogoutLink onClick={async () => {
                            const data = await handleGoogleLogin();
                            console.log("please", data);
                            console.log("userData", userInfo);
                            setUserInfo(data);
                        }}>로그인</LogoutLink>
                    ) : (
                        <LogoutLink onClick={handleLogout}>로그아웃</LogoutLink>
                    )}
                </Header>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}



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
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    margin-right: 12.5vw;
`;

export default TopMenuBar;
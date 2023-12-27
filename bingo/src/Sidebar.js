import { Outlet } from "react-router";
import styled from "styled-components";
import { Div } from "./Components/NormalComponents/Section";

const Container = styled.div`
  display: flex;
`;

const Sidediv = styled.div`
    height : 95vh;
    width : 10vw;
    background-color : gainsboro;
    border-radius : 25px;
    margin : 1.5% 1% ;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
`
const SideTopDiv = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 20%;
`
const LinkDiv=styled.div`
    width : 100% ;
    height: 20%;
    margin-left: 62%;
    margin-top: 10%;
`
const LogOutDiv = styled.div`
    margin-bottom: 20%;
`
const Profile = styled.div`
  width: 100%;
  height: 30%;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  padding-bottom : 50%;
`
const ProfileImg = styled.img`
  width : 30%;
  height : 100%;
  margin-bottom: 5%;
  margin-top: 20%;
`
const HomeImg = styled.img`
  width : 35%;
  height : 180%;
  margin-top: -20%;
`
const Username = styled.div`
  font-weight : bold;
  font-size : 13px;
  padding : 1%;
`

const UserData = [
    {
        name : "사용자 이름",
    },
  ];

export default function Sidebar() {
    return (
      <Container>
        <Div>
            <Sidediv>
              <SideTopDiv>
                <Profile>
                    {/* 프로필 이미지, 이 부분도 추후 서버에서 가져오는 값을 사용할 수 있는 형태로 만들기 */}
                    <ProfileImg src='/img/Profile/account_circle.png' alt='프로필 이미지'/>
                    {/* 사용자 정보와 직책 */}
                    <Username>{UserData[0].name}</Username>
                </Profile>
                <div>프로젝트</div>
                <div>로그아웃</div>
          </Sidediv>
        </Div>
        <main style={{width : "90vw"}}>
          <Outlet/>
        </main>
        </Container>
    );
  }
  
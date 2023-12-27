import { Outlet } from "react-router";
import styled from "styled-components";
import { Div } from "./Components/NormalComponents/Section";

const Container = styled.div`
  display: flex;
`;

const Sidediv = styled.div`
    height : 90vh;
    width : 10vw;
    background-color : gainsboro;
    border-radius : 25px;
    margin : 1%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`
const Profile = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  padding-bottom : 50%;
`
const ProfileImg = styled.img`
  width : 80%;
  height : 50%;
  margin-bottom : 20%;
`
const Username = styled.div`
  font-weight : bold;
  font-size : 13px;
  padding : 1%;
`
const UserTask = styled.div`
  font-size : 10px;
  padding : 1%;
`

const UserData = [
    {
        name : "사용자 이름",
        task : "사용자 직책",
    },
  ];

export default function Sidebar() {
    return (
      <Container>
        <Div>
            <Sidediv>
                <Profile>
                    {/* 프로필 이미지, 이 부분도 추후 서버에서 가져오는 값을 사용할 수 있는 형태로 만들기 */}
                    <ProfileImg src='/img/Profile/profileimg.jpg' alt='프로필 이미지'/>
                    {/* 사용자 정보와 직책 */}
                    <Username>{UserData[0].name}</Username>
                    <UserTask>{UserData[0].task}</UserTask>
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
  
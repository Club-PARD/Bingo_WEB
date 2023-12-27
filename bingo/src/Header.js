import {Outlet} from "react-router";
import {CenterDiv, Div} from "./Components/NormalComponents/Section";
import {Button} from "./Components/NormalComponents/Form";
import {P} from "./Components/NormalComponents/Text";
import {useState} from "react";
import styled from "styled-components";

export default function Header() {

    // 워크스페이스 저장 변수
    const [WorkspaceInfo, setWorkspaceInfo] = useState(
        {title: '강아지들 다 모여', description: '여기는 강사모야. 강아지들을 사랑하는 모임'}
    );

    return (
        <Div flexDirection="column" width="100%" padding="20px" height="100%">
            <HeaderLayout>
                {/* 타이틀 / 설명 */}
                <Title WorkspaceInfo={WorkspaceInfo}></Title>
                {/* 팀원 초대하기 버튼 */}
                <InviteMember/>
            </HeaderLayout>

            {/* Outlet 영역 */}
            <ScreenView/>
        </Div>
    );
}

// 타이틀 컴포넌트
const Title = (e) => {
    return (
        <Div width="90%" alignItems="end">
            {/* 타이틀 */}
            <Div margin="0px 20px 0px 0px">
                <P fontSize="50px" fontWeight="bold">{e.WorkspaceInfo.title}</P>
            </Div>
            {/* 설명 */}
            <Div margin="0px 20px 5px 0px">
                <P fontSize="20px">{e.WorkspaceInfo.description}</P>
            </Div>
        </Div>
    );
}

// 팀원 초대 컴포넌트
const InviteMember = () => {
    // 팀원 초대 관련 기능
    const handleClickButton = () => {
        if (window.confirm("팀원을 초대하시겠습니까?")) {
            alert("초대합니다!");
        } else {
            alert("취소되었습니다.");
        }
    }

    return (
        <CenterDiv margin="0px 0px 5px 0px" width="10%">
            <Button
                width="100px"
                height="40px"
                borderRadius="15px"
                onClick={handleClickButton}>
                <P fontSize="15px" fontWeight="bold">팀원 초대하기</P>
            </Button>
        </CenterDiv>
    );
}

// 하단의 Outlet 컴포넌트
const ScreenView = () => {
    return (
        <main
            style={{
                height: "85%",
                backgroundColor: "gainsboro",
                borderRadius: "15px",
                padding: "20px",
                boxSizing : "border-box"
            }}>
            <Outlet/>
        </main>
    );
}

// [스타일] Header 영역
const HeaderLayout = styled(Div)`
    width: 100%;
    height: 15%;
    background-color: gainsboro;
    border-radius: 15px;
    align-items: center;
    padding: 0px 20px;
    margin-bottom: 20px;
`;
import {Outlet, useLocation} from "react-router";
import {CenterDiv, Div} from "../Components/NormalComponents/Section";
import {Button} from "../Components/NormalComponents/Form";
import {Label, P} from "../Components/NormalComponents/Text";
import {useState} from "react";
import styled from "styled-components";

import Modal from "react-modal";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Img} from "../Components/NormalComponents/Etc";

export default function Header() {
    // Modal 관련 변수
    const [modalIsOpen1, setModalIsOpen1] = useState(false); // Modal 창의 open 여부를 저장하는 변수
    const [value, setValue] = useState("12345678"); // 팀원에게 초대해주는 코드를 저장하는 변수

    // Modal 관련 핸들러 (open, close)
    const openModal1 = () => {
        setModalIsOpen1(true);
    };
    const closeModal = () => {
        setModalIsOpen1(false);
    };

    // 워크스페이스 정보 저장 변수
    const [WorkspaceInfo, setWorkspaceInfo] = useState(
        {title: '강아지들 다 모여라', description: '여기는 강사모야. 강아지들을 사랑하는 모임'}
    );

    return (
        <Div flexDirection="column" width="100%" height="95%">
            <HeaderLayout>
                {/* 타이틀 / 설명 */}
                <Title WorkspaceInfo={WorkspaceInfo}></Title>
                {/* 팀원 초대하기 버튼 */}
                <InviteMember openModal1={openModal1}/>
            </HeaderLayout>

            {/* Outlet 영역 */}
            <ScreenView/>

            {/* hidden 되어 있는 Modal 영역 */}
            <InviteModal modalIsOpen1={modalIsOpen1} closeModal={closeModal} value={value}/>
        </Div>
    );
}

// 타이틀 컴포넌트
const Title = (e) => {
    return (
        <Div alignItems="end" width="auto" padding="0 0 0 2%">
            {/* 타이틀 */}
            <Div width="auto">
                <P fontSize="80px" fontWeight="400">{e.WorkspaceInfo.title}</P>
            </Div>
            {/* 설명 */}
            <Div width="auto">
                <P fontSize="24px" margin="0 0 1% 0">{e.WorkspaceInfo.description}</P>
            </Div>
        </Div>
    );
}

// 팀원 초대 컴포넌트
const InviteMember = (e) => {
    // 현재 URL 얻기
    const location = useLocation();
    const currentURL = location.pathname;

    return (
        <>
            {
                // 현재 URL이 WOrkspaceView인 경우에만 show, 그렇지 않은 경우에는 hideen
                currentURL === '/WorkspaceView' && <CenterDiv width="9%" margin="3% 0 0 0">
                        <Button width="100px" height="30px" borderRadius="15px" onClick={e.openModal1}>
                            <P fontSize="15px" fontWeight="bold">팀원 초대하기</P>
                        </Button>
                    </CenterDiv>

            }
        </>
    );
}

// 하단의 Outlet 컴포넌트
// 사실상 작성하는 모든 컴포넌트는 이 위치에 온다
const ScreenView = () => {
    return (
        <main
            style={{
                height: "85%",
                width: "100%",
                //backgroundColor: "gainsboro",
                boxSizing: "border-box"
            }}>
            <Outlet/>
        </main>
    );
}

// [스타일] Header 영역
// 워크스페이스 이름, 소개가 오는 부분
const HeaderLayout = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    /* background-color: gainsboro; */
    border-radius: 15px;
    align-items: center;
`;

//
// 모달 관련 부분
//

const StyleModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0,0.5)"
    },
    content: {
        borderRadius: "12px",
        padding: 0,
        color: "black",
        background: `#D9D9D9`,
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        margin: "0",
        width: "35%",
        height: "39%",
        display: "flex",
        border: "none",
        //alignItems: "center",
        overflowY: "hidden",

        display: "flex",
        flexDirection: "column",
        overflowY: "auto",

        //position: 'absolute',  absolute positioning

        transform: "translate(87%, 60%)", // center the modal
        // 모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을
        // 담당합니다. 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
    }
}

// Modal 창 관련 컴포넌트
const InviteModal = (e) => {
    return (
        <Modal isOpen={e.modalIsOpen1} onRequestClose={e.closeModal} style={StyleModal}>
            {/* 이미지 추가 modal's width=1179, height=616 */}

            {/* close 이미지 section */}
            <Div
                width="100%"
                height="10%"
                alignItems="center"
                flexDirection="row-reverse"
                padding="2% 2% 0 0">
                <Img
                    src="/img/Home/close.png"
                    alt="Close"
                    onClick={e.closeModal}
                    width="4%"
                    height="90%"/>
            </Div>


            {/* 팀원 코드 section */}
            <Div
                justifyContent = "space-around"
                alignItems="center"
                width="100%"
                height="90%"
                flexDirection="column">
                <Div
                    fontSize="40px"
                    fontWeight="400">팀원 초대하기 코드</Div>
                <Div fontSize="90px">{e.value}</Div>
                <CopyToClipboard text={e.value} onCopy={() => alert("클립보드에 복사되었습니다.")}>
                    <Button
                        width="150px"
                        height="40px"
                        backgroundColor="#959595"
                        borderRadius="9px">
                        <Label fontSize = "30px">복사</Label>
                    </Button>
                </CopyToClipboard>
            </Div>
        </Modal>
    );
}
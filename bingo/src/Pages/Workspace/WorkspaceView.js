/* eslint-disable */

import { Div } from "../../Components/NormalComponents/Section";
import { React, useEffect } from "react";
import RetrospectInWorkspace from "./Components/RetrospectInWorkspace";
import BingoBoard from "../../Preset/WorkspacePreset/BingoBoard";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { useState } from "react";
import { Img } from "../../Components/NormalComponents/Etc.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    WorkspaceData,
    loginUserState,
    RetrospectData,
} from "../../Contexts/Atom.js";
import { getAllRetrospect } from "../../Api/Retrospace.js";
import Copy from "../../assets/Img/WorkspaceView/content_copy.png";

// workspace에 들어오면 보이는 화면 아직 와이어 프레임 안나와서 정확한건 미정 빙고페이지로 이동 가능 회고생성페이지로 이동 가능
// RetrospectInWorkspace component출력 회고결과 출력(이것도 디자인이 완성되고 백엔드가 연결되어야 가능하다)

function WorkspaceView() {
    const [userInfo, setUserInfo] = useRecoilState(loginUserState);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const workspaceId = searchParams.get("workspaceId");
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [value, setValue] = useState("12345678");
    const [workspaceData, setWorkspaceData] = useRecoilState(WorkspaceData);
    const [retrospectData, setRetrospectData] = useRecoilState(RetrospectData);

    const filteredWorkspaces = workspaceData.find(
        (workspace) => workspace.id == workspaceId
    );
    const openModal1 = () => {
        setModalIsOpen1(true);
    };
    const closeModal = () => {
        setModalIsOpen1(false);
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allRetrospect = await getAllRetrospect(
                    { userid: userInfo.appUser.id, projectId: workspaceId },
                    navigate
                );
                console.log("temp Data", allRetrospect);
                setRetrospectData(allRetrospect); // allRetrospect.data로 설정
            } catch (error) {
                // 에러 핸들링
                console.error("Error fetching projects:", error);
            }
        };

        fetchData();
    }, [userInfo.appUser.id, workspaceId, setRetrospectData, navigate]);

    useEffect(() => {
        // console.log(retrospectData);
    }, [retrospectData]);

    return (
        <>
            <Div
                width="100%"
                height="93.9vh"
                display="flex"
                backgroundColor="#F9F9F9"
                justifyContent="end"
                flexDirection="column"
            >
                {/* Section1 : 빙고판 */}
                <Div
                    width="66.3%"
                    margin="0 auto"
                    height="100%"
                    display="flex"
                    flexDirection="row"
                >
                    <SectionLeft>
                        <InformationDiv>프로젝트 정보</InformationDiv>
                        <Section_Bingo>
                            {/*<h1>{filteredWorkspaces[0].name}</h1>
                        <h3>{filteredWorkspaces[0].description}</h3>*/}
                            {/* Title : 빙고판 타이틀 */}
                            <TitleAndButton>
                                <Title>{filteredWorkspaces.name}</Title>
                                <InviteButton onClick={openModal1}>
                                    팀원 초대하기
                                </InviteButton>
                            </TitleAndButton>
                            <TeamDesc>
                                {filteredWorkspaces.description}
                            </TeamDesc>
                            <BingoDesc>
                                <BingoDescText>
                                    좋은 팀을 위한 9가지 가치 빙고판
                                </BingoDescText>
                            </BingoDesc>

                            {/* Content : 빙고판 */}
                            <Section_Bingo_Content>
                                <BingoBoard modalIsOpen={modalIsOpen1} />
                            </Section_Bingo_Content>
                        </Section_Bingo>
                    </SectionLeft>
                    <SectionEclipse>
                        <EclipseDiv />
                        <EclipseDiv />
                        <EclipseDiv />
                        <EclipseDiv />
                        <EclipseDiv />
                        <EclipseDiv />
                        <EclipseDiv />
                        <EclipseDiv />
                    </SectionEclipse>
                    {/* Section2 : 회고 리스트 */}
                    <Section_Retrospect>
                        {/* Title : 회고 리스트 타이틀 */}
                        <InformationDiv>회고 리스트</InformationDiv>
                        {/* Content : 회고 리스트 */}
                        <Section_Retrospect_Content>
                            <RetrospectInWorkspace />
                        </Section_Retrospect_Content>
                    </Section_Retrospect>
                </Div>
            </Div>
            <InviteModal
                modalIsOpen1={modalIsOpen1}
                closeModal={closeModal}
                value={value}
            />
        </>
    );
}

export default WorkspaceView;
const SectionLeft = styled.div`
    width: 25.7vw;
    height: 80vh;
    overflow: hidden;
`;
const InformationDiv = styled.div`
    color: #838383;
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
    margin: 7.7vh 0 1.1vh;
`;
// [컴포넌트] 빙고판 Section
const Section_Bingo = styled.div`
    width: 25.7vw;
    height: 60.9vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    background-color: #f3f3f3;
`;
const TitleAndButton = styled.div`
    width: 20.3vw;
    height: 3vh;
    margin-top: 4.7vh;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;
const Title = styled.div`
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
`;
const InviteButton = styled.div`
    width: 6vw;
    height: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    border: 1.5px solid #222;
    color: var(--sec_grey, #222);
    font-family: "140";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
`;
const TeamDesc = styled.div`
    width: 20.3vw;
    height: 2vh;
    margin-top: 0.7vh;
    color: rgba(34, 34, 34, 0.8);
    font-family: "140";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
`;
const BingoDesc = styled.div`
    width: 20.3vw;
    height: 2vh;
    margin-top: 5.3vh;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
`;
const BingoDescText = styled.div`
    color: #6b6b6b;
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
`;
const SectionEclipse = styled.div`
    width: 6.4vw;
    height: 24vh;
    margin-top: 29vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const EclipseDiv = styled.div`
    width: 0.6vw;
    height: 0.6vw;
    border: none;
    box-sizing: border-box;
    background-color: #e1e1e1;
    border-radius: 50%;
`;
// [컴포넌트] 회고 리스트 Section
const Section_Retrospect = styled.div`
    /* background-color: skyblue; */
    width: 34vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
// [컴포넌트] 빙고 Section의 컨텐츠
const Section_Bingo_Content = styled(Div)`
    width: 36vh;
    height: 36vh;
    margin-top: 1.2vh;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: center;
`;

// [컴포넌트] 회고 리스트 Section의 콘텐츠
const Section_Retrospect_Content = styled.div`
    width: 34vw;
    height: 90%;
    overflow: auto;
    align-items: end;
    justify-content: top;
    flex-direction: column;
    border: none;
`;
const StyleModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0,0.2)",
    },
    content: {
        padding: "2vh",
        color: "black",
        borderRadius: "40px",
        background: "var(--main_white, #F9F9F9)",
        backgroundSize: "cover",
        margin: "0",
        width: "27.8vw",
        height: "29.2vh",
        border: "none",
        zIndex: "2",
        display: "flex",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)", // center the modal
    },
};

const InviteModal = (e) => {
    return (
        <Modal
            isOpen={e.modalIsOpen1}
            onRequestClose={e.closeModal}
            style={StyleModal}
        >
            {/* 팀원 코드 section */}
            <Div
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
                flexDirection="column"
            >
                <ModalInfo>팀원 초대하기 코드</ModalInfo>
                <CodeDiv>
                    <Code>{e.value}</Code>
                    <CopyToClipboard
                        text={e.value}
                        onCopy={() => alert("클립보드에 복사되었습니다.")}
                    >
                        <Img
                            width="1.7vw"
                            height="1.7vw"
                            margin=".3vh 0 0 0"
                            src={Copy}
                        />
                    </CopyToClipboard>
                </CodeDiv>
                <Div
                    width="25vw"
                    height="4.7vh"
                    display="flex"
                    flexDirection="row-reverse"
                    margin="0"
                >
                    <ButtonDiv onClick={e.closeModal}>닫기</ButtonDiv>
                </Div>
            </Div>
        </Modal>
    );
};

const ModalInfo = styled.div`
    width: 25vw;
    height: 6.6vh;
    border: none;
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    margin-bottom: -0.5vh;
    margin-left: 1.5vw;
`;
const CodeDiv = styled.div`
    box-sizing: border-box;
    width: 23.6vw;
    height: 6.6vh;
    border-radius: 16px;
    background: #f0f0f0;
    padding: 1.6vh 2.7vw 1.6vh 8.7vw;
    display: flex;
    justify-content: space-between;
    margin: 1vh 0 3vh 0;
`;
const Code = styled.div`
    color: var(--sec_grey, #222);
    text-align: center;
    font-family: "160";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
`;
const ButtonDiv = styled.div`
    width: 4.7vw;
    height: 4.7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    border: 2px solid var(--main_red, #ea4336);
    background: var(--main_white, #f9f9f9);
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin-right: 0.8vw;
    cursor: pointer;
`;

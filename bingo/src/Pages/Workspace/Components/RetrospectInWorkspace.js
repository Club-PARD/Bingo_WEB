import { useState } from "react";
import { Div } from "../../../Components/NormalComponents/Section";
import { Img } from "../../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
    RetrospectData,
    WorkspaceData,
    loginUserState,
} from "../../../Contexts/Atom";
import ArrowPink from "../../../assets/Img/WorkspaceView/arrowPink.png";
import Arrow from "../../../assets/Img/WorkspaceView/arrow_forward.png";
import PlusBold from "../../../assets/Img/WorkspaceView/ph_plus-bold.png";
import "../../../font.css";
import { ButtonDiv, ModalInfo } from "../../Workspace/WorkspaceView";

//workspaceView화면 내 회고와 액션아이템 출력 컴포넌트
const RetrospectInWorkspace = (e) => {
    const [userInfo, setUserInfo] = useRecoilState(loginUserState);
    const [retrospectData, setRetrospectData] = useRecoilState(RetrospectData);
    const [state, setState] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const workspaceId = searchParams.get("workspaceId");

    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const openModal2 = () => {
        setModalIsOpen2(true);
    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
    };

    const [WriteButtonModalIsOpen, setWriteButtonModalIsOpen] = useState(false);
    const openWriteButtonModal = () => {
        setWriteButtonModalIsOpen(true);
    };
    const closeWriteButtonModal = () => {
        setWriteButtonModalIsOpen(false);
    };

    const [workspaceData, setWorkspaceData] = useRecoilState(WorkspaceData);
    const filteredWorkspaces = workspaceData.find(
        (workspace) => workspace.id == workspaceId
    );
    console.log("RetrospectData Data", retrospectData);
    return (
        <div>
            {/*Div for retrospectList height=833*/}

            {filteredWorkspaces
                ? filteredWorkspaces.role != "TEAM_MEMBER" && (
                      <AddArea
                          to={`/RetrospectCreate?userId=${e.userId}&workspaceId=${e.workspaceId}`}
                      >
                          <Img width="44px" height="44px" src={PlusBold} />
                          <WordDiv>회고생성</WordDiv>
                      </AddArea>
                  )
                : console.log("filteredWorkspaces is undefined")}
            {console.log("초기값", retrospectData)}
            {retrospectData &&
                retrospectData.length >= 1 &&
                retrospectData
                    .slice()
                    .reverse()
                    .map((data, index) => (
                        <RetrospectListDiv key={data.id}>
                            <Div
                                width="100%"
                                height="100%"
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                flexDirection="row"
                            >
                                {/*회고 list의 상단, 몇차회고 작성버튼*/}
                                <LeftSide>
                                    <NameIsValueDiv>{data.name}</NameIsValueDiv>
                                    <TwoResultChip>{
                                        data.templateType == 'Ls4' ? "4L" : data.templateType == 'F5' ? "5F" : "KPT"
                                    }</TwoResultChip>
                                    {
                                        /*hasEvaluated*/
                                        // data.isWritedList &&
                                        // data.isWritedList[index] == 2 ? (
                                        //     // TeamEvaluation이 완료된 경우
                                        //     <div>
                                        //         <NameIsValueDiv>
                                        //             {data.name}
                                        //         </NameIsValueDiv>
                                        //         <TwoResultChip>
                                        //             “서로에 대한 존중과 신뢰가
                                        //             있는”
                                        //         </TwoResultChip>
                                        //         <TwoResultChip>
                                        //             “열정 있는”
                                        //         </TwoResultChip>
                                        //     </div>
                                        // ) : (
                                        //     // TeamEvaluation이 완료되지 않은 경우
                                        //     <div>
                                        //         <NameIsNotDiv>
                                        //             {data.name}
                                        //         </NameIsNotDiv>
                                        //         <SubIsNotValue>
                                        //             이번 프로젝트는 어땠나요?
                                        //         </SubIsNotValue>
                                        //         <Div
                                        //             width="auto"
                                        //             height="2.7vh"
                                        //         >
                                        //             <EmptyValue>“</EmptyValue>
                                        //             <Div
                                        //                 width="6.9vw"
                                        //                 height="100%"
                                        //                 borderBottom="2px solid #575757"
                                        //             ></Div>
                                        //             <EmptyValue>
                                        //                 한 팀”
                                        //             </EmptyValue>
                                        //         </Div>
                                        //     </div>
                                        // )
                                    }
                                </LeftSide>
                                {/*Div for 3 chip, 조회버튼*/}
                                <RightSide>
                                    {/* {console.log("retrospectData", data.questionList.answerResponse)} */}
                                    {/* {console.log("data!!", data.isWritedList[0])}; */}
                                    {
                                        data.isWritedList &&
                                        data.isWritedList[index] == 2 ? (
                                            <WriteCompleteButton
                                                onClick={openWriteButtonModal}
                                            >
                                                작성 완료
                                                {/* <Img width="2.6vh" height="2.6vh" src={Arrow}/> */}
                                            </WriteCompleteButton>
                                        ) : (
                                            <ViewButton
                                                to={`/RetrospectWrite?userId=${userInfo.appUser.id}&workspaceId=${workspaceId}&retrospectId=${data.id}`}
                                            >
                                                작성
                                                <Img
                                                    width="2.6vh"
                                                    height="2.6vh"
                                                    src={ArrowPink}
                                                />
                                            </ViewButton>
                                        )
                                        // : null
                                    }

                                    <WriteButton
                                        to={`/RetrospectView?userId=${userInfo.appUser.id}&workspaceId=${workspaceId}&retrospectId=${data.id}`}
                                    >
                                        조회
                                        <Img
                                            width="2.6vh"
                                            height="2.6vh"
                                            src={ArrowPink}
                                        />
                                    </WriteButton>
                                </RightSide>
                            </Div>
                        </RetrospectListDiv>
                    ))}
            <WriteButtonModal
                WriteButtonModalIsOpen={WriteButtonModalIsOpen}
                closeWriteButtonModal={closeWriteButtonModal}
            />
        </div>
    );
};

export default RetrospectInWorkspace;
const AddArea = styled(Link)`
    height: 15.5vh;
    width: 100%;
    background-color: #eee;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1% 0 0 0;
    flex-direction: column;
    text-decoration: none;
`;
const WordDiv = styled.div`
    width: auto;
    height: 2.2vh;
    color: #6f6f6f;
    text-align: center;
    font-family: "160";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
`;
const RetrospectListDiv = styled.div`
    height: 15.5vh;
    width: 100%;
    background-color: rgba(234, 67, 54, 0.05);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    padding: 0 1.4vw;
    box-sizing: border-box;
`;
const LinkToRetrospectCreate2 = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2%;
    box-sizing: border-box;
    padding: 2.3vh 2.5vh;
`;
const LeftSide = styled.div`
    height: 11.4vh;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const TwoResultChip = styled.div`
    width: auto;
    height: 2.6vh;
    color: #575757;
    font-family: WefontGothic(OTF);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const RightSide = styled.div`
    height: 11vh;
    width: 5.5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    align-items: center;
    text-decoration: none;
`;
const ViewButton = styled(Link)`
    height: 4.8vh;
    width: 5.5vw;
    border-radius: 40px;
    background: #f7dfdc;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
`;
const WriteButton = styled(Link)`
    height: 4.8vh;
    width: 5.5vw;
    border-radius: 40px;
    background: #fce3e1;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
`;

const NameIsValueDiv = styled(Div)`
    font-family: "160";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: #7f7f7f;

    text-align: center;
    align-items: center;
    margin: 0 0 3.8vh 0;
`;
const SubIsNotValue = styled(Div)`
    margin: 0 0 4.5vh 0;

    color: var(--main_red, #ea4336);
    font-family: "110";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const NameIsNotDiv = styled(Div)`
    font-family: "160";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: #7f7f7f;

    text-align: center;
    align-items: center;
    margin: 0 0 0.7vh 0;
`;
const EmptyValue = styled(Div)`
    color: #575757;
    font-family: "160";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const WriteCompleteButton = styled.button`
    height: 4.8vh;
    width: 5.5vw;
    border-radius: 40px;
    background: var(--main_red, #ea4336);
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    color: white;
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    border: none;
`;

const WriteButtonModal = (e) => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

    return (
        <Modal
            isOpen={e.WriteButtonModalIsOpen}
            onRequestClose={e.closeWriteButtonModal}
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
                <ModalInfo>이미 작성된 회고입니다.</ModalInfo>
                <Div
                    width="25vw"
                    height="4.7vh"
                    display="flex"
                    flexDirection="row-reverse"
                    margin="0"
                >
                    <ButtonDiv onClick={e.closeWriteButtonModal}>
                        닫기
                    </ButtonDiv>
                </Div>
            </Div>
        </Modal>
    );
};

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

import { useState } from "react";
import { Div } from "../../../Components/NormalComponents/Section";
import { Img } from "../../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { RetrospectData, loginUserState } from "../../../Contexts/Atom";
import ArrowPink from "../../../assets/Img/WorkspaceView/arrowPink.png";
import PlusBold from "../../../assets/Img/WorkspaceView/ph_plus-bold.png";
import "../../../font.css";

//workspaceView화면 내 회고와 액션아이템 출력 컴포넌트
const RetrospectInWorkspace = (e) => {
    const [userInfo, setUserInfo] = useRecoilState(loginUserState);
    const [tasks, setTasks] = useRecoilState(RetrospectData);
    const state = true;
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

    return (
        <>
            {/*Div for retrospectList height=833*/}

            <AddArea
                to={`/RetrospectCreate?userId=${e.userId}&workspaceId=${e.workspaceId}`}
            >
                <Img width="44px" height="44px" src={PlusBold} />
                <WordDiv>회고생성</WordDiv>
            </AddArea>
            {tasks.length >= 1 &&
                tasks
                    .slice()
                    .reverse()
                    .map((task) => (
                        <RetrospectListDiv key={task.id}>
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
                                    {
                                        /*hasEvaluated*/
                                        state ? (
                                            // TeamEvaluation이 완료된 경우
                                            <>
                                                <NameIsValueDiv>
                                                    {task.name}
                                                </NameIsValueDiv>
                                                <TwoResultChip>
                                                    “서로에 대한 존중과 신뢰가
                                                    있는”
                                                </TwoResultChip>
                                                <TwoResultChip>
                                                    “열정 있는”
                                                </TwoResultChip>
                                            </>
                                        ) : (
                                            // TeamEvaluation이 완료되지 않은 경우
                                            <>
                                                <NameIsNotDiv>
                                                    {task.name}
                                                </NameIsNotDiv>
                                                <SubIsNotValue>
                                                    이번 프로젝트는 어땠나요?
                                                </SubIsNotValue>
                                                <Div
                                                    width="auto"
                                                    height="2.7vh"
                                                >
                                                    <EmptyValue>“</EmptyValue>
                                                    <Div
                                                        width="6.9vw"
                                                        height="100%"
                                                        borderBottom="2px solid #575757"
                                                    ></Div>
                                                    <EmptyValue>
                                                        한 팀”
                                                    </EmptyValue>
                                                </Div>
                                            </>
                                        )
                                    }
                                </LeftSide>

                                {/*Div for 3 chip, 조회버튼*/}
                                <RightSide>
                                    <ViewButton
                                        to={`/RetrospectWrite?userId=${userInfo.appUser.id}&workspaceId=${workspaceId}&retrospectId=${task.id}`}
                                    >
                                        작성
                                        <Img
                                            width="2.6vh"
                                            height="2.6vh"
                                            src={ArrowPink}
                                        />
                                    </ViewButton>
                                    <WriteButton
                                        to={`/RetrospectView?userId=${userInfo.appUser.id}&workspaceId=${workspaceId}&retrospectId=${task.id}`}
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
        </>
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

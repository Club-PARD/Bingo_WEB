import { useState } from "react";
import { Div } from "../../../Components/NormalComponents/Section";
import { Img } from "../../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { RetrospectData, loginUserState } from "../../../Contexts/Atom";

//workspaceView화면 내 회고와 액션아이템 출력 컴포넌트
function RetrospectInWorkspace() {
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

            <AddArea to="/RetrospectCreate">
                <Img
                    width="44px"
                    height="44px"
                    src="/Img/WorkspaceView/ph_plus-bold.png"
                />
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
                                                <Div
                                                    color="#7F7F7F"
                                                    fontWeight="400"
                                                    fontFamily="WefontGothic(OTF)"
                                                    fontSize="14px"
                                                    textAlign="center"
                                                    alignItems="center"
                                                    margin="0 0 3.8vh 0"
                                                >
                                                    {task.name}
                                                </Div>
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
                                                <Div
                                                    color="#7F7F7F"
                                                    fontWeight="400"
                                                    fontFamily="WefontGothic(OTF)"
                                                    fontSize="14px"
                                                    textAlign="center"
                                                    alignItems="center"
                                                    margin="0 0 .7vh 0"
                                                >
                                                    {task.name}
                                                </Div>
                                                <Div
                                                    color="var(--main_red, #EA4336)"
                                                    fontFamily=" WefontGothic(OTF)"
                                                    fontSize="13.5px"
                                                    fontStyle="normal"
                                                    fontWeight="400"
                                                    margin="0 0 4.5vh 0"
                                                >
                                                    이번 프로젝트는 어땠나요?
                                                </Div>
                                                <Div
                                                    color="#575757"
                                                    fontFamily=" WefontGothic(OTF)"
                                                    fontSize="24px"
                                                    fontStyle="normal"
                                                    fontWeight="400"
                                                >
                                                    “_____________한 팀”
                                                </Div>
                                            </>
                                        )
                                    }
                                </LeftSide>

                                {/*Div for 3 chip, 조회버튼*/}
                                <RightSide>
                                    <ViewButton to={task.linktoWrite}>
                                        작성
                                        <Img
                                            width="2.6vh"
                                            height="2.6vh"
                                            src="/img/WorkspaceView/arrowPink.png"
                                        />
                                    </ViewButton>
                                    <WriteButton to={task.linktoView}>
                                        조회
                                        <Img
                                            width="2.6vh"
                                            height="2.6vh"
                                            src="/img/WorkspaceView/arrowPink.png"
                                        />
                                    </WriteButton>
                                </RightSide>
                            </Div>
                        </RetrospectListDiv>
                    ))}
        </>
    );
}

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
    font-family: WefontGothic(OTF);
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
    background: #fce3e1;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    color: var(--main_red, #ea4336);
    font-family: WefontGothic(OTF);
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
    font-family: WefontGothic(OTF);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
`;
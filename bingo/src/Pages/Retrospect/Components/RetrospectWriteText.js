/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import {
    WorkspaceData,
    retrospectQuestionsListState,
} from "../../../Contexts/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import { Div } from "../../../Components/NormalComponents/Section";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Button } from "../../../Components/NormalComponents/Form";
import { ConstructionOutlined } from "@mui/icons-material";

import { cloneDeep } from "lodash";
import { postRetrospect } from "../../../Api/Retrospace";

// 전체를 감싸는 div, 이 아래에 Header / Body / Footer로 나뉘어 있음
const Whole = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 93.9vh;
    overflow: hidden;
`;

// breadcrumb가 들어가는 부분
const Header = styled.div`
    box-sizing: border-box;
    height: 18.4vh;
    width: 66.4vw;
    margin-left: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
`;
const LeftHead = styled.div`
    padding-bottom: 1.5vh;
    box-sizing: border-box;
    width: auto;
    height: 100%; //114px
    display: flex;
    flex-direction: column;
    justify-content: end;
`;
const TitleDiv = styled.div`
    width: auto;
    height: 4vh;
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
`;
const RightHead = styled.div`
    width: 30%; //330px
    height: 24%; //59px
    display: flex;
    flex-direction: row;
    justify-content: Right;
    align-items: end;
    margin-bottom: 1.5vh;
`;
// 회고 종류와 작성 창이 들어가는 부분
const BodyMom = styled.div`
    width: 71.1vw;
    height: 75.6vh;
    overflow: auto;
`;
const Body = styled.div`
    box-sizing: border-box;
    width: 70.4vw;
    height: auto;
    background-color: #f3f3f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    padding-bottom: 2.5vh;
`;

// Body 안에 들어가는 회고 작성칸을 감싸는 테두리
const Border = styled.div`
    box-sizing: border-box;
    width: 66.3vw;
    height: auto;
    border-radius: 40px;
    background-color: #f3f3f3;
`;
const RetroType = styled.div`
    width: 66.3vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-top: 3.6vh;
`;

const RetroABC = styled.div`
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
`;
const RetroLabel = styled.div`
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
    color: rgba(234, 67, 52, 0.4);
    margin: 0 0 0.6vh 0.4vw;
`;
const RetroData = styled.div`
    width: 66.3vw;
    height: 2.8vh;
    color: #222;
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
    opacity: 0.8;
    margin: 2.5vh 0 1vh 0;
`;
const RetroText = styled.textarea`
    background-color: #ebebeb;
    width: 66.3vw;
    border-radius: 24px;
    margin: 0 auto;
    /* 높이를 동적으로 조절하기 위해 */
    height: 15.6vh;
    padding: 3vh 2vw;
    box-sizing: border-box;
    border: none;
    color: #222;
    font-family: "140";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: -0.2px;
`;

// Footer 안에 들어갈 버튼들의 Preset이다
const Btn = styled.button`
    height: 5vh;
    width: 5.5vw;
    font-size: 18px;
    font-weight: 400;
    border: 2px solid var(--main_red, #ea4336);
    border-radius: 40px;
    margin: 0 0 1vh 0.8vw;
    align-items: center;
    display: flex;
    justify-content: center;
`;
const TemplateTypeDiv = styled(Div)`
    width: 66.3vw;
    height: 4.2vh;
    display: flex;
    margin: 2.2vh 0 0 0;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    color: rgba(22, 22, 22, 0.3);
    font-family: "180";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    border-radius: 14px;
`;

const RetrospectWriteText = (e) => {
    // console.log(e.retrospectQuestionsList.questionList[0])
    // Recoil 상태 사용
    // const [retrospective, setRetrospective] = useRecoilState(retrospectiveState);
    const navigate = useNavigate();

    const [workspaceData, setWorkspaceData] = useRecoilState(WorkspaceData);
    const [retrospectQuestionsList, setRetrospectQuestionsList] =
        useRecoilState(retrospectQuestionsListState);

    const filteredWorkspaces = workspaceData.find(
        (workspace) => workspace.id == e.workspaceId
    );
    console.log("WoekspaceDate :", workspaceData);
    console.log("filteredWorkspaces Data", filteredWorkspaces);

    const [isFilled, setIsFilled] = useState(false);

    const checkIfAllFilled = () => {
        if (retrospectQuestionsList && retrospectQuestionsList.questionList) {
            for (let data of retrospectQuestionsList.questionList) {
                for (let retro of data.subQuestions) {
                    if (
                        !retro.answerResponse ||
                        (typeof retro.answerResponse === "string" &&
                            retro.answerResponse.trim() === "")
                    ) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    };

    const handleInputChange = () => {
        const allFilled = checkIfAllFilled();
        setIsFilled(allFilled);
    };

    const handleNextButtonClick = () => {
        // if (isFilled) {
            navigate(
                `/TeamEvaluation?userId=${e.userId}&workspaceId=${e.workspaceId}&retrospectId=${e.retrospectId}`
            );
        // }
    };

    const resizeTextarea = (event) => {
        event.target.style.height = "15.6vh"; // 초기 높이로 재설정
        event.target.style.height = `${event.target.scrollHeight}px`;
    };
const handleRetroTextChange = (event, dataIndex, subQuestionIndex) => {
    const updatedValue = event.target.value;
    console.log(dataIndex + ", " + subQuestionIndex + ", " + updatedValue);

    const tempList = cloneDeep(retrospectQuestionsList);
    const currentQuestion = tempList.questionList[dataIndex];

    if (currentQuestion.subQuestions && currentQuestion.subQuestions.length > 0) {
        const currentSubQuestion = currentQuestion.subQuestions[subQuestionIndex];
        if (currentSubQuestion) {
            currentSubQuestion.answerResponse = updatedValue;
        }
    } else {
        // 문제가 발생할 수 있는 부분입니다.
        // currentQuestion에 subQuestions가 없으면 새로운 배열을 할당하는데, 이 부분이 문제를 일으킬 수 있습니다.
        // 새로운 배열을 할당하는 것이 아니라, 객체에 바로 answerResponse를 설정하는 방식으로 수정해야 합니다.
        // currentQuestion.subQuestions = [{ answerResponse: updatedValue }];
        
        // 수정된 부분
        currentQuestion.subQuestions = [{ subQuestion: "", answerResponse: updatedValue }];
    }

    setRetrospectQuestionsList(tempList);
};
    useEffect(() => {
        handleInputChange();
    }, [retrospectQuestionsList]);
    //CancleModal관련
    const [modalCancleIsOpen, setModalCancleIsOpen] = useState(false); // Modal 창의 open 여부를 저장하는 변수
    const openModalCancle = () => {
        setModalCancleIsOpen(true);
    };
    const closeModalCancle = () => {
        setModalCancleIsOpen(false);
    };

    const [temp, setTemp] = useState();
    const handlerSetTemp = (e) => {
        setTemp(e.target.value);
    };

    return (
        <Whole>
            {/* 상단바 */}
            <Header>
                <LeftHead>
                    <TitleDiv>{filteredWorkspaces.name}</TitleDiv>
                    {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                    <Breadcrumb activeKey={1} />
                </LeftHead>
                <RightHead>
                    <StepButton
                        onClick={openModalCancle}
                        targetLabel="취소"
                        backgroundColor="#F9F9F9"
                        color="#EA4336"
                    />
                    <StepButton
                        targetLabel="다음"
                        onClick={handleNextButtonClick}
                        backgroundColor={
                            isFilled ? "#EA4336" : "rgba(234, 67, 54, 0.4)"
                        }
                        color="#F9F9F9"
                    />
                </RightHead>
            </Header>

            {/* 회고 작성 창 */}
            <BodyMom>
                {retrospectQuestionsList ? (
                    <Body>
                        <TemplateTypeDiv>
                            {retrospectQuestionsList.templateType}
                        </TemplateTypeDiv>

                        {console.log(
                            "pangil love you ",
                            retrospectQuestionsList.questionList
                        )}
                        {retrospectQuestionsList.questionList.map(
                            (data, index) => (
                                // data.title &&
                                <Border key={index}>
                                    <RetroType>
                                        <RetroABC>
                                            {data.mainQuestion[0]}
                                        </RetroABC>
                                        <RetroLabel>
                                            {data.mainQuestion}
                                        </RetroLabel>
                                    </RetroType>
                                    {console.log("제발", data)}
                                    {
                                        // data.subQuestions[0].subQuestion == null && data.subQuestions[1].subQuestion == null && data.subQuestions[2].subQuestion == null
                                        // ? <div>
                                        //     <RetroData>
                                        //                 "자유롭게 작성해주세요."
                                        //                 </RetroData>
                                        //                 <RetroText
                                        //                     placeholder="답변을 입력하세요..."
                                        //                     onInput={resizeTextarea}
                                        //                     value={
                                        //                         data.subQuestions[0].answerResponse ==
                                        //                         null
                                        //                             ? ""
                                        //                             : data
                                        //                                 .subQuestions[0]
                                        //                                 .ams
                                        //                     }
                                        //                     onChange={(f) =>
                                        //                         handleRetroTextChange(
                                        //                             f,
                                        //                             index,
                                        //                             0
                                        //                         )
                                        //                     }
                                        //                 />
                                        // </div>
                                        // :
                                        // data.subQuestions &&
                                            // data.subQuestions.map(
                                            //     (retro, index2) => (
                                            //         retro.subQuestion != '' ?
                                            //         <div key={index2}>
                                            //             <RetroData>
                                            //                 {retro.subQuestion}
                                            //             </RetroData>
                                            //             <RetroText
                                            //                 placeholder="답변을 입력하세요..."
                                            //                 onInput={resizeTextarea}
                                            //                 value={
                                            //                     retro.answerResponse ==
                                            //                     null
                                            //                         ? ""
                                            //                         : retro
                                            //                             .answerResponse
                                            //                             .ams
                                            //                 }
                                            //                 onChange={(f) =>
                                            //                     handleRetroTextChange(
                                            //                         f,
                                            //                         index,
                                            //                         index2
                                            //                     )
                                            //                 }
                                            //             />
                                            //             </div>
                                            //             :
                                            //             <div key={index2}>

                                            //             <RetroText
                                            //                 placeholder="답변을 입력하세요..."
                                            //                 onInput={resizeTextarea}
                                            //                 value={
                                            //                     ""
                                            //                 }
                                            //             />
                                            //             </div>
                                            // )
                                        // )
                                        data.subQuestions[0].subQuestion == '' 
                                        ? <div key={index}>
                                                    <RetroData>
                                                        "자유롭게 답변을 남겨주세요."
                                                    </RetroData>
                                                    <RetroText
                                                        placeholder="답변을 입력하세요..."
                                                        onInput={resizeTextarea}
                                                        value={
                                                            data.subQuestions.answerResponse // 서브질문의 첫 번째 값에 대한 처리

                                                        }
                                                        onChange={(f) =>
                                                            handleRetroTextChange(f, index,  data.subQuestions[0].subQuestion == ''  ? 0 : index2)
                                                        }
                                                    />
                                                </div>
                                        : data.subQuestions.map((retro, index2) => {
                                            const subQuestionArray = retro.subQuestion !== '' ? [retro.subQuestion] : [''];  // 서브질문이 비어있는 경우에도 하나의 값을 갖는 배열로 만듦

                                            return subQuestionArray.map((subQ, subIndex) => (
                                                <div key={index2 + subIndex}>
                                                    <RetroData>
                                                        {subQ}
                                                    </RetroData>
                                                    <RetroText
                                                        placeholder="답변을 입력하세요..."
                                                        onInput={resizeTextarea}
                                                        value={
                                                            subIndex === 0 ? retro.answerResponse || "" : ""  // 서브질문의 첫 번째 값에 대한 처리
                                                        }
                                                        onChange={(f) =>
                                                            handleRetroTextChange(f, index, index2)
                                                        }
                                                    />
                                                </div>
                                            ));
                                        })
                                        
                                        }
                                    
                                </Border>
                            )
                        )}
                    </Body>
                ) : (
                    ""
                )}
                {/* 취소 다음 버튼 */}
                {/*
                <footer>
                    <Btn onClick={handleCancelClick}>
                        취소
                    </Btn>
                    <Btn onClick={handleNextClick}>
                        다음
                    </Btn>
                </footer>
            */}
            </BodyMom>

            <CancleModal
                modalCancleIsOpen={modalCancleIsOpen}
                closeModalCancle={closeModalCancle}
                workspaceId={e.workspaceId}
            />
        </Whole>
    );
};

export default RetrospectWriteText;

//Modal
const StyleModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0,0.2)",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "40px",
        padding: 0,
        color: "black",
        background: `#F9F9F9`,
        margin: "0",
        width: "23.6vw",
        height: "25.5vh",
        display: "flex",
        border: "none",
        flexDirection: "column",
        justifyContent: "end",
    },
};
const CancleModal = (e) => {
    return (
        <Modal
            isOpen={e.modalCancleIsOpen}
            onRequestClose={e.closeModalCancle}
            style={StyleModal}
        >
            <ModalLargest>
                <ModalTextDiv>정말 나가시겠어요?</ModalTextDiv>
                <ModalButtonDiv>
                    <ModalCloseButton onClick={e.closeModalCancle}>
                        취소
                    </ModalCloseButton>
                    <ModalExitButton
                        to={`/WorkspaceView?workspaceId=${e.workspaceId}`}
                    >
                        나가기
                    </ModalExitButton>
                </ModalButtonDiv>
            </ModalLargest>
        </Modal>
    );
};

const ModalLargest = styled.div`
    width: 100%;
    height: 91%;
    margin-top: 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
const ModalTextDiv = styled.div`
    width: auto;
    height: 30px;
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
`;
//width:213px; height:51px;
const ModalButtonDiv = styled.div`
    width: 47%;
    height: 18.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const ModalCloseButton = styled.button`
    width: 42%;
    height: 100%;
    background-color: var(--main_white, #f9f9f9);
    align-items: center;
    justify-content: center;
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    border-radius: 40px;
    border: 2px solid var(--main_red, #ea4336);
    cursor: pointer;
`;
const ModalExitButton = styled(Link)`
    width: 50%;
    height: 90%;
    background-color: #ea4336;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    color: var(--main_white, #f9f9f9);
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    border-radius: 40px;
    border: 2px solid var(--main_red, #ea4336);
    text-decoration: none;
    cursor: pointer;
`;

const StepButton = (e) => {
    return (
        <a href={e.targetPage}>
            <StepBtn
                onClick={e.onClick}
                backgroundColor={e.backgroundColor}
                color={e.color}
            >
                {e.targetLabel}
            </StepBtn>
        </a>
    );
};
const StepBtn = styled(Button)`
    width: 5.5vw;
    height: 5vh;
    border-radius: 40px;
    font-size: 18px;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0.8vw;
    border: 2px solid var(--main_red, #ea4336);
    font-family: "160";
`;
// openInviteModal

/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import { retrospectiveState } from "../../../Contexts/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from 'react-router'
import { useState, useRef, useEffect } from "react";
import { Div } from "../../../Components/NormalComponents/Section";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Button } from "../../../Components/NormalComponents/Form";

// 전체를 감싸는 div, 이 아래에 Header / Body / Footer로 나뉘어 있음
const Whole = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 93.9vh;
    overflow: hidden;
`

// breadcrumb가 들어가는 부분
const Header = styled.div `
    box-sizing: border-box;
    height : 18.4vh;
    width: 66.4vw;
    margin-left: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
`
const LeftHead=styled.div`
    padding-bottom: 1.5vh;
    box-sizing: border-box;
    width: auto;
    height: 100%;//114px
    display: flex;
    flex-direction: column;
    justify-content: end;
`
const TitleDiv=styled.div`
    width: auto;
    height: 4vh;
    color: var(--sec_grey, #222);
    font-family: WefontGothic(OTF);
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
`
const RightHead=styled.div`
    width: 30%;//330px
    height: 24%;//59px
    display: flex;
    flex-direction: row;
    justify-content: Right;
    align-items: end;
    margin-bottom: 1.5vh;
`
// 회고 종류와 작성 창이 들어가는 부분
const BodyMom=styled.div`
    width: 70.4vw;
    height : 75.6vh;
    overflow: auto;
`
const Body = styled.div `
    box-sizing: border-box;
    width: 70.4vw;
    height : auto;
    background-color: #F3F3F3;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
`

// Body 안에 들어가는 회고 작성칸을 감싸는 테두리
const Border = styled.div `
    box-sizing: border-box;
    width: 66.3vw;
    height : auto;
    border-radius: 40px;
    background-color: #F3F3F3;
`
const RetroType = styled.div `
    width: 66.3vw;
    box-sizing: border-box;
    display : flex;
    flex-direction : row;
    align-items : end;
    margin-top: 3.6vh;
`

const RetroABC = styled.div `
    color: var(--main_red, #EA4336);
    font-family: WefontGothic(OTF);
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
`
const RetroLabel = styled.div`
    font-family: WefontGothic(OTF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
    color: rgba(234, 67, 52, 0.4);
    margin: 0 0 0.6vh 0.4vw;
`
const RetroData = styled.div`
    width: 66.3vw;
    height: 2.8vh;
    color: #222;
    font-family: WefontGothic(OTF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
    opacity: 0.8;
    margin: 2.5vh 0 1vh 0;
`
const RetroText = styled.textarea `
    background-color : #EBEBEB;
    width : 66.3vw;
    border-radius : 24px;
    margin: 0 auto;
    /* 높이를 동적으로 조절하기 위해 */
    height: 15.6vh;
    padding: 3vh 2vw;
    box-sizing: border-box;
    border: none;
    color: #222;
    font-family: WefontGothic(OTF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: -0.2px;
`

// Footer 안에 들어갈 버튼들의 Preset이다
const Btn = styled.button `
    height : 5vh;
    width : 5.5vw;
    font-size : 18px;
    font-weight: 400;
    border : 2px solid var(--main_red, #EA4336);
    border-radius : 40px;
    margin: 0 0 1vh .8vw;
    align-items: center;
    display: flex;
    justify-content: center;
`

function RetrospectWriteText() {
    // Recoil 상태 사용
    const [retrospective, setRetrospective] = useRecoilState(retrospectiveState);
    const navigate = useNavigate();
    const [isFilled, setIsFilled] = useState(false);
    const checkIfAllFilled = (retrospective) => {
        for (let question of retrospective.questions) {
            for (let content of question.content) {
                if (content.dataA === '') {
                    setIsFilled(false);
                    return;
                }
            }
        }
        setIsFilled(true);
    };
    const handleNextButtonClick = (e) => {
        if (isFilled) { // isFilled가 true일 경우에만 다음 페이지로 이동
            navigate("/TeamEvaluation");
        }
    };

    const resizeTextarea = (event) => {
        event.target.style.height = '15.6vh'; // 초기 높이로 재설정
        event.target.style.height = `${event.target.scrollHeight}px`;
    }
    //CancleModal관련
    const [modalCancleIsOpen, setModalCancleIsOpen] = useState(false); // Modal 창의 open 여부를 저장하는 변수
    const openModalCancle = () => {
        setModalCancleIsOpen(true);
    };
    const closeModalCancle = () => {
        setModalCancleIsOpen(false);
    };
    return (
        <Whole>
            {/* 상단바 */}
            <Header>
                <LeftHead>
                    <TitleDiv>{retrospective.retrospectTitle}</TitleDiv>
                    {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                    <Breadcrumb activeKey={1}/>
                </LeftHead>
                <RightHead>
                <StepButton onClick={openModalCancle} targetLabel="취소" 
                        backgroundColor="#F9F9F9" color="#EA4336"/>
                    <StepButton
                        targetLabel="다음"
                        onClick={handleNextButtonClick}
                        backgroundColor={isFilled ? "#EA4336" : "rgba(234, 67, 54, 0.4)"}
                        color="#F9F9F9"
                    />
                </RightHead>
            </Header>
            {/* 회고 작성 창 */}
            <BodyMom>
                <Body>
                    <Div 
                        width="66.3vw" 
                        height="4.2vh" 
                        display="flex" 
                        margin="2.2vh 0 0 0"
                        justifyContent="center" 
                        alignItems="center" 
                        backgroundColor="#F9F9F9"
                        color= "rgba(22, 22, 22, 0.3)"
                        fontFamily="WefontGothic(OTF)"
                        fontSize="18px"
                        fontStyle="normal"
                        fontWeight="400"
                        borderRadius="14px"
                        >{retrospective.selectedWays}</Div>
                    {
                        retrospective
                        .questions
                        .map((data, index) => (
                            data.title &&
                            <Border key={index}>
                                <RetroType>
                                <RetroABC>{data.title[0]}</RetroABC>
                                <RetroLabel>{data.title}</RetroLabel>
                                </RetroType>
                                {
                                data
                                    .content
                                    .map((retro, index2) => (
                                    retro.dataQ &&
                                    <div key={index2}>
                                        <RetroData>{retro.dataQ}</RetroData>
                                        <RetroText
                                        placeholder="답변을 입력하세요..."
                                        onInput={resizeTextarea}
                                        value={retro.dataA}
                                        onChange={(e) => {
                                            const updatedAnswers = { ...retrospective };
                                            updatedAnswers.questions = [...updatedAnswers.questions];
                                            updatedAnswers.questions[index] = {
                                            id: index + 1,
                                            content: [...(updatedAnswers.questions[index]?.content) || []],
                                            };
                                            updatedAnswers.questions[index].title = data.title;
                                            updatedAnswers.questions[index].content[index2] = {
                                            ...(updatedAnswers.questions[index]?.content[index2] || {}),
                                            dataA: e.target.value,
                                            }
                                            setRetrospective(updatedAnswers);
                                            checkIfAllFilled(updatedAnswers);
                                            console.log(retrospective);
                                        }}
                                        />
                                    </div>
                                    ))
                                }
                            </Border>
                        ))
                    }
                </Body>
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

            <CancleModal modalCancleIsOpen={modalCancleIsOpen} closeModalCancle={closeModalCancle} />
        </Whole>
    );
}

export default RetrospectWriteText;

//Modal
const StyleModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0,0.2)"
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
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
    }
}
const CancleModal = (e) => {
    return (
        <Modal isOpen={e.modalCancleIsOpen} onRequestClose={e.closeModalCancle} style={StyleModal}>
            <ModalLargest>
                <ModalTextDiv>정말 나가시겠어요?</ModalTextDiv>
                <ModalButtonDiv>
                    <ModalCloseButton onClick={e.closeModalCancle}>취소</ModalCloseButton>
                    <ModalExitButton to="/WorkspaceView">나가기</ModalExitButton>
                </ModalButtonDiv>
            </ModalLargest>
        </Modal>
    );
}

const ModalLargest=styled.div`
    width: 100%;
    height: 91%;
    margin-top: 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const ModalTextDiv=styled.div`
    width: auto;
    height: 30px;
    color: var(--sec_grey, #222);
    font-family: WefontGothic(OTF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
`
//width:213px; height:51px;
const ModalButtonDiv=styled.div`
    width: 47%;
    height: 18.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const ModalCloseButton=styled.button`
    width: 42%;
    height: 100%;
    background-color: var(--main_white, #F9F9F9);    
    align-items: center;
    justify-content: center;
    color: var(--main_red, #EA4336);
    font-family: WefontGothic(OTF);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    border-radius: 40px;
    border: 2px solid var(--main_red, #EA4336);
    cursor: pointer;
`
const ModalExitButton=styled(Link)`
    width: 50%;
    height: 90%;
    background-color: #EA4336;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    color: var(--main_white, #F9F9F9);
    font-family: WefontGothic(OTF);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    border-radius: 40px;
    border: 2px solid var(--main_red, #EA4336);
    text-decoration: none;
    cursor: pointer;
`

const StepButton = (e) => {
    return (
        <a href={e.targetPage}>
            <Button
                width="5.5vw"
                height="5vh"
                borderRadius="40px"
                fontSize="18px"
                fontWeight="400"
                onClick={e.onClick}
                justifyContent= "center"
                alignItems= "center"
                margin=" 0 0 0 .8vw"
                border="2px solid var(--main_red, #EA4336)"
                backgroundColor={e.backgroundColor}
                color={e.color}
            >{e.targetLabel}</Button>
        </a>
    );
}
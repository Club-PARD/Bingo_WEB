/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import { retrospectiveState } from "../../../Contexts/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from 'react-router'
import { useState, useRef, useEffect } from "react";
import { Div } from "../../../Components/NormalComponents/Section";
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
    const [isEmpty, setIsEmpty] = useState(false);
    
    const handleCancelClick = () => {
        navigate("/WorkspaceView");
    };

    const handleNextClick = () => {
        const textAreas = document.querySelectorAll('textarea');
        let emptyTextAreaIndex = -1;

        textAreas.forEach((textarea, index) => {
            if (textarea.value === '') {
                emptyTextAreaIndex = index;
                return;
            }
        });

        if (emptyTextAreaIndex !== -1) {
            setIsEmpty(true);
            alert('textarea에 텍스트를 입력해주세요.');
            return;
        }

        setIsEmpty(false);
        navigate("/teamevaluation");
    };

    const resizeTextarea = (event) => {
        event.target.style.height = '15.6vh'; // 초기 높이로 재설정
        event.target.style.height = `${event.target.scrollHeight}px`;
    }
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
                    <Btn style={{backgroundColor: "#F9F9F9", color:"#EA4336"}} onClick={handleCancelClick}>이전</Btn>
                    <Btn style={{backgroundColor: "#EA4336", color: "#F9F9F9"}} onClick={handleNextClick}>완료</Btn>
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
        </Whole>
    );
}

export default RetrospectWriteText;

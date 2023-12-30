/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import {retrospectiveState} from "../../../Contexts/Atom";
import { useRecoilState } from "recoil";
import {useNavigate} from 'react-router'
import { useState } from "react";

// import RetroWrite from "./RetroWrite"; 전체를 감싸는 div, 이 아래에 Header / Body /
// Footer로 나뉘어 있음
const Whole = styled.div `
    min-height: 100%;
    height : auto;
`
// breadcrumb가 들어가는 부분
const Header = styled.div `
    height : 3.5%;
    width: 90%;
    margin-left: 5%;
    margin-top: 1%;
`
// 회고 종류와 작성 창이 들어가는 부분
const Body = styled.div `
    min-height : 80%;
    /* height : 80%; */
    /* background-color : whitesmoke; */
`
// 취소, 다음이 들어가는 부분
const Footer = styled.div `
    display : flex;
    height : 10%;
    /* border : 1px solid red; */
    width: 96%;
    margin-left: 4%;
    align-items : center;
    justify-content : end;
    background:rgba(150,0.8); 
    backdrop-filter: blur(8px);
    padding-right: 10%;
    box-sizing: border-box;
`

// Body 안에 들어가는 회고 작성칸을 감싸는 테두리
const Border = styled.div `
    border : 5px solid gray;
    height : 100%;
    background-color : white;
    border-bottom: none;
    border-top-right-radius : 25px;
    border-top-left-radius : 25px;
    margin: 0 10% 0 5%;
    overflow: auto;
`
const BorderInside = styled.div `
    padding : 1%;
`
const RetroType = styled.div `
    display : flex;
    flex-direction : row;
    align-items : end;
`
const RetroABC = styled.div `
    /* font-weight : bold; */
    font-size : 100px;
    padding-right : 1%;
`
const RetroText = styled.textarea `
    border : 1px solid transparent;
    background-color : gainsboro;
    width : 90%;
    height : 20vh;
    font-size : 25px;
    border-radius : 15px;
`

// Footer 안에 들어갈 버튼들의 Preset
const Btn = styled.button `
    height : 100%;
    width : 6.5%;
    font-size : 40px;
    border : 1px solid transparent;
    background-color : gainsboro;
    border-radius : 10px;
    margin-right: 2%;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #000;
`

function RetrospectWriteText() {

    // Recoil 상태 사용
    const [retrospective, setRetrospective] = useRecoilState(retrospectiveState);
    const navigate = useNavigate();
    const [isEmpty, setIsEmpty] = useState(false);

    const handleCancelClick = () => {
        navigate("/WorkspaceView");
    };
    
    /*
    const handleNextClick = () => {
        navigate("/teamevaluation");
    };
    */

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

    return (
        <Whole>
            {/* 상단바 */}
            <Header>
                {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                <Breadcrumb activeKey={1}/>
            </Header>
            {/* 회고 작성 창 */}
            <Body>
                
                {
                    retrospective
                        .questions
                        .map((data, index) => (
                            data.title &&
                            <Border>
                                <BorderInside>
                                    {/* 회고 종류와 풀네임 */}
                                    <RetroType>
                                        <RetroABC>{data.title[0]}</RetroABC>
                                        <h1>{data.title}</h1>
                                    </RetroType>
                                    {/* RetrospectData의 각 항목에 대해 RetroWrite 컴포넌트를 렌더링 */}
                                    {
                                        data
                                        .content
                                        .map((retro, index2) => (
                                        retro.dataQ && 
                                            <div>
                                                <h2>{retro.dataQ}</h2>
                                                <RetroText placeholder="답변을 입력하세요..." value={retro.dataA} onChange={
                                                    (e) => {
                                                        const updatedAnswers = {...retrospective};
                                                        updatedAnswers.questions = [...updatedAnswers.questions]; // 깊은 복사
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
                                                    }
                                                } />
                                            </div>
                                        ))
                                    }
                                </BorderInside>
                                </Border>
                            
                        ))
                }
            </Body>
            {/* 취소 다음 버튼 */}
            <Footer>
                <Btn onClick={handleCancelClick}>
                    취소
                </Btn>
                <Btn onClick={handleNextClick}>
                    다음
                </Btn>
            </Footer>
        </Whole>

    );
}

export default RetrospectWriteText;
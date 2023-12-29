/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import { retrospectiveState } from "../../../Contexts/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

// import RetroWrite from "./RetroWrite";

// 전체를 감싸는 div, 이 아래에 Header / Body / Footer로 나뉘어 있음
const Whole = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 85vh;
    overflow: hidden;
`
// breadcrumb가 들어가는 부분
const Header = styled.div`
    box-sizing: border-box;
    height : 3.5%;
    width: 90%;
    margin-left: 5%;
    margin-top: 1%;
`
// 회고 종류와 작성 창이 들어가는 부분
const Body = styled.div`
    box-sizing: border-box;
    width: 100%;
    height : 96.5%;
    margin-bottom: -7%;
    /* height : 80%; */
    /* background-color : whitesmoke; */
`
// 취소, 다음이 들어가는 부분
const Footer = styled.div`
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
    background-color: aliceblue;
`

// Body 안에 들어가는 회고 작성칸을 감싸는 테두리
const Border = styled.div`
    box-sizing: border-box;
    border : 5px solid gray;
    height : 100%;
    background-color : white;
    border-bottom: none;
    border-top-right-radius : 25px;
    border-top-left-radius : 25px;
    margin: 0 10% 0 5%;
    overflow: auto;
`
const BorderInside = styled.div`
    box-sizing: border-box;
    padding : 1%;
`
const RetroType = styled.div`
    box-sizing: border-box;
    display : flex;
    flex-direction : row;
    align-items : end;
`
const RetroABC = styled.div`
    box-sizing: border-box;
    /* font-weight : bold; */
    font-size : 100px;
    padding-right : 1%;
`
const RetroText = styled.textarea`
    border: ${({ isEmpty }) => (isEmpty ? '1px solid red' : 'none')};
    //border : 1px solid transparent;
    background-color : #F4F4F4;
    width : 90%;
    height : 20vh;
    font-size : 25px;
    border-radius : 15px;
`

// Footer 안에 들어갈 버튼들의 Preset
const Btn = styled.button`
    height : 60%;
    width : 10%;
    font-size : 34px;
    font-weight: 400;
    border : 1px solid transparent;
    background-color : gainsboro;
    border-radius : 10px;
    margin-right: 2%;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #000;
`

const RetrospectData = [
    {
        name : "아이디에이션 할 때 유지할만한 점은 없었나요?",
        desc : "",
    },
    {
        name : "프로젝트를 하면서 유지할만한 점은 없었나요?",
        desc : "",
    },
    {
        name : "개발 과정에서 유지할만한 점은 없었나요?",
        desc : "",
    },
];



function RetrospectWriteText() {
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
                <Breadcrumb activeKey={1} />
            </Header>
            {/* 회고 작성 창 */}
            <Body>
                <Border>
                    {
                        retrospective.questions.map((data, index) => (
                            
                                <BorderInside>
                                    {/* 회고 종류와 풀네임 */}
                                    <RetroType>
                                        <RetroABC>{retrospective.selectedWays[index]}</RetroABC>
                                        <h1>{data.title}</h1>
                                    </RetroType>
                                    {/* RetrospectData의 각 항목에 대해 RetroWrite 컴포넌트를 렌더링 */}
                                    {retrospective.questions.map((retro, index) => (
                                        <div key={index}>
                                            <h2>{retro.content[0]}</h2>
                                            <RetroText 
                                            isEmpty={isEmpty && retrospective.selectedWays[index] === ''}
                                            placeholder="답변을 입력하세요..." />
                                        </div>
                                    ))}
                                </BorderInside>
                            
                        ))
                    }
                </Border>
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
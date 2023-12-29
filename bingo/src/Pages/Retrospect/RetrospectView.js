import Breadcrumb from "../../Layout/Breadcrumb";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function RetrospectView() {
    {/*회고 종류와 각단계의 이름에 대한 리스트*/}
    const retrospectiveCategories = {
        'KPT': ['Keep', 'Problem', 'Try'],
        '4L': ['Liked', 'Learned', 'Lacked', 'Longed for'],
        '5F': ['Feel', 'Find', 'Finish', 'Future', 'Feedback'],
    };
    const [retrospectTitle, setRetrospectTitle] = useState('KPT');
    const [titleArray, setTitleArray] = useState([]);

    useEffect(() => {
        // retrospectTitle이 변경될 때마다 호출되는 부분
        const titleChars = retrospectTitle.split('');
        setTitleArray(titleChars);
    }, [retrospectTitle]);

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
    return (
        <Whole>
            <Header>
                {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                <Breadcrumb activeKey={3} />
            </Header>
            <Body>
                {/*
                구조- body는 overflow : auto;이다
                1. 큰 div n개 -> 회고의 step을 표현해줄 so flex-direction : row
                    1-1 div2개 -> 1개는 initial, 1개는 full word
                2. 큰 div내부에 작은 div n+1개 (n==생성자가 생성한 질문 개수)
                    2-1 첫번째 div는 생성자가 작성한 질문을 bold처리해서 출력
                    2-2 이후의 n개의 div는 또 쪼개짐 2개
                        2-2-1  
                */}
                {titleArray.map((char, index) => (
                    <Mother key={index}>
                        <StepDiv>
                            <StepInitial>{char}</StepInitial>
                            <StepFullWord>{retrospectiveCategories[retrospectTitle][index]}</StepFullWord>
                        </StepDiv>
                        <InnerDiv>
                            <QuestionDiv>아이디에이션</QuestionDiv>
                            <OuterAnswer>
                                <AnswerDiv>
                                    <AnswerText>아이디에이션</AnswerText>
                                    <AnswerDate>23.12.28</AnswerDate>
                                </AnswerDiv>
                                <Eclipse />
                            </OuterAnswer>
                            <OuterAnswer>
                                <AnswerDiv>
                                    <AnswerText>아이디에이션아이디에이션아이디에이션아이디에이션아이디에이션아이디에이션아이디에이션아이디에이션아이디에이션아이디에이션아이디에이션</AnswerText>
                                    <AnswerDate>23.12.28</AnswerDate>
                                </AnswerDiv>
                                <Eclipse />
                            </OuterAnswer>
                        </InnerDiv>
                    </Mother>
                ))}
            </Body>
            <Footer>
                <BtnLink to="/WorkspaceView">
                    나가기
                </BtnLink>
            </Footer>
        </Whole>
    );
}

export default RetrospectView;

const Whole =styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 85vh;
    overflow: hidden;
`
const Header = styled.div`
    box-sizing: border-box;
    height : 3.5%;
    width: 90%;
    margin-left: 5%;
    margin-top: 1%;
`
const Body = styled.div`
    border: 5px dashed #E9E9E9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    overflow: auto;
    padding: 0 4%;
    height : 95%;
    width: 75%;
    border-bottom: none;
    border-top-right-radius : 25px;
    border-top-left-radius : 25px;
    margin: 0 10% -6% 5%;
`
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
    padding-right: 6%;
    box-sizing: border-box;
    background-color: aliceblue;
`
const Mother = styled.div`
    width: 100%;
    height: 100%;

`
//회고내부의 단계(ex.K,P,T)를 나타내는 div
const StepDiv = styled.div`
    height: 18%;
    width: 100%;
    display: flex;
    flex-direction: row;
`
const StepInitial = styled.div`
    height: 100%;
    width: 5%;
    font-size: 110px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
`
const StepFullWord = styled.div`
    height: 100%;
    width: 30%;
    font-size: 40px;
    display: flex;
    justify-content: left;
    align-items: end;
    margin:3% 1%;
    color: #737373;
    font-size: 52px;
`
//질문과 답변을 감싸주는 div
const InnerDiv = styled.div`
    width: 100%;
    height: auto;
    margin-top: 8%;
    display: flex;
    flex-direction: column;
`
const QuestionDiv = styled.div`
    width: 100%;
    height: 130%;
    align-items: center;
    font-size: 36px;
    font-weight: 700;
`
const OuterAnswer = styled.div`
    width: 101%;
    height: 130%;
    display: flex;
    flex-direction: row;
    align-items: top;
    margin-top: 1%;
`
const AnswerDiv = styled.div`
    width: 92%;
    height: auto;
    background-color: #EAEAEA;
    display: flex;
    flex-direction: row;
`
const AnswerText = styled.div`
    width: 70%;
    height: auto;
    font-size: 36px;
    display: flex;
    align-items: center;
`
const AnswerDate = styled.div`
    width: 34%;
    height: auto;
    font-size: 25px;
    color: #C9C9C9;
    margin-left: 1%;
`
const Eclipse = styled.div`
    width: 6%;
    height: 55px;
    background-color: #EAEAEA;
    border-radius: 50%;
    margin-left: 2%;
`
const BtnLink = styled(Link)`
    height : 60%;
    width : 11%;
    font-size : 34px;
    font-weight: 400;
    border : 1px solid transparent;
    background-color : gainsboro;
    border-radius : 10px;
    margin-right: 6%;
    text-decoration: none;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #000;
`
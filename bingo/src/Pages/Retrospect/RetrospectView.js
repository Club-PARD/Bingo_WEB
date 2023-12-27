import Breadcrumb from "../../Breadcrumb";
import styled from "styled-components";


function RetrospectView() {
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
                <StepDiv>
                    <StepInitial>K</StepInitial>
                    <StepFullWord>Keep</StepFullWord>
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
            </Body>
        </Whole>
    );
}

export default RetrospectView;

const Whole =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const Header = styled.div`
    height : 3.5%;
`
const Body = styled.div`
    /*
    이부분 넘겨받을 때주의할 점
    height값은 화면을 벗어나지 않는가?
    header부분과의 마진은 몇퍼센트인가?
    내부 패딩이라던가 요소 있는가?
    flex설정은 어떻게 되었는가?
    */
    height : 96.5%;
    width: 92%;

    /* background-color : whitesmoke; */

    /*
    여기는 용현이형과 다른 내가 필요한 css요소들
    형한테 레이아웃 통째로 받아올 때 이부분은 확실히 고려해서 받아오자
    */
    border: 5px dashed #E9E9E9;
    border-radius: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    overflow: auto;
    padding: 0 4%;
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
    font-size: 147px;
    display: flex;
    justify-content: center;
    margin-top: 2%;
`
const StepFullWord = styled.div`
    height: 100%;
    width: 30%;
    font-size: 147px;
    display: flex;
    justify-content: left;
    align-items: end;
    margin: 0.2%;
    color: #737373;
    font-size: 52px;
`
//질문과 답변을 감싸주는 div
const InnerDiv = styled.div`
    width: 100%;
    height: auto;
    margin-top: 4%;
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
    width: 100%;
    height: 130%;
    display: flex;
    flex-direction: row;
    align-items: top;
    margin-top: 1%;
`
const AnswerDiv = styled.div`
    width: 86%;
    height: auto;
    background-color: #EAEAEA;
    display: flex;
    flex-direction: row;
`
const AnswerText = styled.div`
    width: 65%;
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
    width: 5%;
    height: 66px;
    background-color: #EAEAEA;
    border-radius: 50%;
    margin-left: 2%;
`
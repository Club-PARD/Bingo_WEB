/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import {retrospectiveState} from "../../../Contexts/Atom";
import {useRecoilState} from "recoil";
// import RetroWrite from "./RetroWrite"; 전체를 감싸는 div, 이 아래에 Header / Body /
// Footer로 나뉘어 있음
const Whole = styled.div `
    min-height: 100%;
    height : auto;
`
// breadcrumb가 들어가는 부분
const Header = styled.div `
    height : 3.5%;
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
    height : 15%;
    /* border : 1px solid red; */
    align-items : end;
    justify-content : end;
`

// Body 안에 들어가는 회고 작성칸을 감싸는 테두리
const Border = styled.div `
    border : 5px solid gray;
    border-radius : 25px;
    margin : 1%;
    height : 100%;
    background-color : white;
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
    border-radius : 15px;
    margin : 1%;
`

function RetrospectWriteText() {

    // Recoil 상태 사용
    const [retrospective, setRetrospective] = useRecoilState(retrospectiveState);
    // alert(retrospective.questions.length);

    const handleCancelClick = () => {
        history.push("/teamevaluation");
    };

    const handleNextClick = () => {
        history.push("/teamevaluation");
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

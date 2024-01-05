import Breadcrumb from "../../Layout/Breadcrumb";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { retrospectiveState } from "../../Contexts/Atom";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { Button } from "../../Components/NormalComponents/Form";
import { Div } from "../../Components/NormalComponents/Section";
import LeftDD from "../../assets/Img/Retrospect/DDL.png";
import RightDD from "../../assets/Img/Retrospect/DDR.png";
import { getAllRetrospect, getRetrospect } from "../../Api/Retrospace";

function RetrospectView() {
    const [retrospective, setRetrospective] = useState();

    const [oneRetrospect, setOneRetrospect] = useState();

    const navigate = useNavigate();

    {
        /*회고 종류와 각단계의 이름에 대한 리스트*/
    }
    const retrospectiveCategories = {
        KPT: ["Keep", "Problem", "Try"],
        "4L": ["Liked", "Learned", "Lacked", "Longed for"],
        "5F": ["Feel", "Find", "Finish", "Future", "Feedback"],
    };
    const [retrospectTitle, setRetrospectTitle] = useState("4L");
    const [titleArray, setTitleArray] = useState([]);

    // useEffect(() => {      retrospectTitle이 변경될 때마다 호출되는 부분     const titleChars
    // = retrospectTitle.split("");     setTitleArray(titleChars); },
    // [retrospectTitle]); 취소 버튼 누르면 workspace 페이지로 이동하는 핸들러
    const handleExitClick = () => {
        navigate(`/WorkspaceView?workspaceId=${workspaceId}`);
    };

    //

    // url로부터 정보 가져오기
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const workspaceId = searchParams.get("workspaceId");
    const userId = searchParams.get("userId");
    const retrospectId = searchParams.get("retrospectId");

    // 페이지 로딩 시 특저 워크스페이스에 있는 회고 데이터 가져오기
    useEffect(() => {
        const getData = async () => {
            try {
                const allRetrospect = await getAllRetrospect({
                    projectId: workspaceId,
                    templateId: retrospectId
                },);
                setRetrospective(allRetrospect);
            } catch (error) {
                // 에러 핸들링
                console.error("Error getting all projects(workspaces):", error);
            }
        };
        const getOneData = async () => {
            try {
                const oneRetrospect = await getRetrospect({
                    userId: userId,
                    projectId: workspaceId,
                    templateId: retrospectId
                },);
                setOneRetrospect(oneRetrospect);
            } catch (error) {
                console.error("Error getting one projects(workspaces):", error);
            }
        };
        getData();
        getOneData();
        {
            console.log("(UseEffect) retrospective 현황", retrospective)
        } {
            console.log("(UseEffect) oneRetrospect 현황", oneRetrospect)
        }
    }, [workspaceId]);

    //

    return (
        <Whole>
            {console.log("return retrospective", retrospective)}
            {console.log("(UseEffect) oneRetrospect 현황", oneRetrospect)}
            {/* 상단바 */}
            <Header>
                <LeftHead>
                    <TitleDiv>{
                            retrospective
                                ? retrospective.name
                                : "조회 불가"
                        }</TitleDiv>
                    {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 3 (회고 조회하기) */}
                    <Breadcrumb activeKey={3} />
                </LeftHead>
                <RightHead>
                    <StepButton
                        onClick={handleExitClick}
                        targetLabel="나가기"
                        backgroundColor="#F9F9F9"
                        color="#EA4336"
                    />
                </RightHead>
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
                <DivLabel>팀 가치</DivLabel>
                <TeamValue>
                    <DivOurTeam>우리 팀은</DivOurTeam>
                    <DivColumn>
                        <img
                            style={{
                                width: "1.6vw",
                                height: "1.6vw",
                                marginBottom: "15vh",
                            }}
                            src={LeftDD}
                        />
                    </DivColumn>
                    <DivValue>
                        <SpanValue>서로에 대한 존중과 신뢰가 있는</SpanValue>
                        <SpanValue>소통이 활발한</SpanValue>
                    </DivValue>
                    <DivColumn>
                        <img
                            style={{
                                width: "1.6vw",
                                height: "1.6vw",
                                marginBottom: "14vh",
                            }}
                            src={RightDD}
                        />
                    </DivColumn>
                    <DivOurTeam>팀이에요!</DivOurTeam>
                </TeamValue>
                {console.log("pangil", retrospective)}
                {
                    retrospective
                        ? <div>
                                <Div display="flex" alignItems="center" flexDirection="column">
                                    {
                                        <div>
                                                <DivLabel>
                                                    {
                                                        retrospective.templateType
                                                            ? retrospective.templateType
                                                            : "방식이 없습니다. 이거 고쳐야 함"
                                                    }
                                                </DivLabel>
                                                {
                                                    retrospective
                                                        .template
                                                        .questionList
                                                        .map((data, index2) => {
                                                            // console.log("data", data);
                                                            return (
                                                                <Mother key={index2}>
                                                                    <StepDiv>
                                                                        <StepInitial>
                                                                            {data.mainQuestion[0]}
                                                                        </StepInitial>
                                                                        <StepFullWord>
                                                                            {data.mainQuestion}
                                                                        </StepFullWord>
                                                                    </StepDiv>
                                                                    {
                                                                        data
                                                                            .subQuestionList
                                                                            .map((question, index) => {
                                                                                 // console.log(question);
                                                                                return (
                                                                                    <InnerDiv>
                                                                                        <QuestionDiv>
                                                                                            {question.subQuestion}
                                                                                        </QuestionDiv>
                                                                                        {
                                                                                            question.answerResponse.length < 2
                                                                                                ? 
                                                                                                    question.answerResponse.map((data, index)  => {
                                                                                                        return (
                                                                                                            <OuterAnswer>
                                                                                                                <ProfileDiv>
                                                                                                                    <Eclipse/>
                                                                                                                    <UserName>박정규</UserName>
                                                                                                                </ProfileDiv>
                                                                                                                <AnswerDiv>
                                                                                                                    <AnswerText>
                                                                                                                        {/* {console.log("답변", question.answerResponse.ams)} */}
                                                                                                                        {data.ams}
                                                                                                                    </AnswerText>
                                                                                                                </AnswerDiv>
                                                                                                            </OuterAnswer>
                                                                                                        );
                                                                                                    })
                                                                                                : 
                                                                                                <OuterAnswer>
                                                                                                    <ProfileDiv>
                                                                                                        <Eclipse/>
                                                                                                        <UserName>박정규</UserName>
                                                                                                    </ProfileDiv>
                                                                                                    <AnswerDiv>
                                                                                                        <AnswerText>
                                                                                                            {/* {console.log("답변", question.answerResponse.ams)} */}
                                                                                                            {question.answerResponse.ams}
                                                                                                        </AnswerText>
                                                                                                    </AnswerDiv>
                                                                                                </OuterAnswer>
                                                                                        }

                                                                                    </InnerDiv>
                                                                                )
                                                                            })
                                                                    }
                                                                </Mother>
                                                            )
                                                        })
                                                }

                                            </div>
                                    }
                                </Div>
                            </div>

                        : <h1>데이터가 없습니다.</h1>
                }
            </Body>
        </Whole>
    );
}

export default RetrospectView;

const Whole = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 93.9vh;
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
const Body = styled.div`
    width: 100vw;
    height: 75.5vh;
    overflow: auto;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
`;
const TeamValue = styled.div`
    width: 70.4vw;
    height: 27.4vh;
    display: flex;
    flex-direction: row;
    border-radius: 40px;
    background: #f8f0ef;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.3vh;
`;
const DivOurTeam = styled.div`
    width: 6.3vw;
    height: 100%;
    color: var(--sec_grey, #222);
    text-align: center;
    font-family: "140";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 280%; /* 78.4px */
    display: flex;
    align-items: center;
`;
const DivColumn = styled.div`
    width: 7.3vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const DivValue = styled.div`
    width: auto;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 9.1vh 0 9.1vh 0;
    justify-content: space-between;
`;
const SpanValue = styled.div`
    display: inline;
    height: 3.3vh;
    text-align: center;
    font-family: "160";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    background: rgba(234, 67, 54, 0.15);
    color: #000000;
`;
const DivLabel = styled.div`
    width: 70.4vw;
    height: 4.2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background-color: #f8f0ef;
    color: rgba(22, 22, 22, 0.3);
    font-family: "180";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    flex-shrink: 0;
    margin-bottom: 1vh;
`;
const Mother = styled.div`
    width: 70.4vw;
    height: auto;
    border-radius: 40px;
    background-color: #f8f0ef; //#f8f0ef;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.3vh;
    padding-top: 2.2vh;
    padding-bottom: 3.7vh;
`;
//회고내부의 단계(ex.K,P,T)를 나타내는 div
const StepDiv = styled.div`
    height: 18%;
    width: 66.3vw;
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5vh;
`;
const StepInitial = styled.div`
    height: 100%;
    width: 2.1vw;
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
`;
const StepFullWord = styled.div`
    height: 100%;
    width: 30%;
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
    margin-top: 3.2vh;
    margin-left: 0.5vw;
`;
//질문과 답변을 감싸주는 div
const InnerDiv = styled.div`
    width: 66.3vw;
    height: auto;
    /* margin-top: 4%; */
    display: flex;
    flex-direction: column;
`;
const QuestionDiv = styled.div`
    width: auto;
    height: 2.7vh;
    color: #222;
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.2px;
`;
const OuterAnswer = styled.div`
    width: 100%;
    height: 130%;
    display: flex;
    flex-direction: row;
    align-items: top;
    margin-top: 1%;
`;
const AnswerDiv = styled.div`
    width: 86%;
    height: auto;
    display: flex;
    flex-direction: row;
`;
const AnswerText = styled.div`
    width: 62.2vw;
    height: auto;
    font-size: 36px;
    display: flex;
    align-items: center;
    padding: 3.1vh 2.1vw;
    color: #222;
    font-family: "140";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: -0.2px;
    border-radius: 24px;
    background: rgba(234, 67, 54, 0.04);
`;
const AnswerDate = styled.div`
    width: 34%;
    height: auto;
    font-size: 25px;
    color: #c9c9c9;
    margin-left: 1%;
`;
const Eclipse = styled.div`
    width: 4.4vh;
    height: 4.4vh;
    background-color: #eaeaea;
    border-radius: 50%;
`;
const BtnLink = styled(Link)`
    height: 60%;
    width: 11%;
    font-size: 34px;
    font-weight: 400;
    border: 1px solid transparent;
    border-radius: 10px;
    margin-right: 6%;
    text-decoration: none;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #000;
`;
const ProfileDiv = styled.div`
    width: 4.4vh;
    height: 5.6vh;
    margin-right: 2%;
`;
const UserName = styled.div`
    width: 4.4vh;
    height: 2.4vh;
    color: var(--sec_grey, #222);
    text-align: center;
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    opacity: 0.6;
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

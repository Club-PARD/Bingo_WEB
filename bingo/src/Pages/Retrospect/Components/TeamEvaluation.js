/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import Chips from "./Chips";
import {Link} from "react-router-dom";
import {ChipData, retrospectQuestionsListState, retrospectiveState} from "../../../Contexts/Atom";
import {useRecoilState} from "recoil";
import {useEffect, useState} from "react";
import {Button} from "../../../Components/NormalComponents/Form";
import {useLocation, useNavigate} from "react-router";
import {postRetrospect} from "../../../Api/Retrospace";

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
`;

// breadcrumb가 들어가는 부분
const Header = styled.div `
    box-sizing: border-box;
    height: 18.4vh;
    width: 66.4vw;
    margin-left: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
`;
const LeftHead = styled.div `
    padding-bottom: 1.5vh;
    box-sizing: border-box;
    width: auto;
    height: 100%; //114px
    display: flex;
    flex-direction: column;
    justify-content: end;
`;
const TitleDiv = styled.div `
    width: auto;
    height: 4vh;
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
`;
const RightHead = styled.div `
    width: 30%; //330px
    height: 24%; //59px
    display: flex;
    flex-direction: row;
    justify-content: Right;
    align-items: end;
    margin-bottom: 1.5vh;
`;
// 회고 종류와 작성 창이 들어가는 부분
const Body = styled.div `
    width: 70.4vw;
    height: 67.5vh;
    overflow: auto;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    border-radius: 40px;
    background-color: #f3f3f3;
    margin-bottom: 7vh;
`;
const Title = styled.div `
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    margin-top: 17.5vh;
    margin-bottom: 9vh;
`;
const ChipDiv = styled.div `
    height: 19.4vh;
    width: 48vw;
`;

const TeamEvaluation = (e) => {
    // const [retrospective, setRetrospective] = useRecoilState(retrospectiveState);
    const [retrospectQuestionsList, setRetrospectQuestionsList] = useRecoilState(
        retrospectQuestionsListState
    );
    console.log("정보 보자잇", retrospectQuestionsList.tagList[0]);
    const navigate = useNavigate();
    const handleBeforeClick = () => {
        navigate(
            `/RetrospectWrite?userId=${userId}&workspaceId=${workspaceId}&retrospectId=${retrospectId}`
        );
    };
    const [isFilled, setIsFilled] = useState(false);
    const handleNextButtonClick = () => {
        if (isFilled) {
            // isFilled가 true일 경우에만 다음 페이지로 이동
            navigate(`/WorkspaceView?workspaceId=${e.workspaceId}`);
        }
    };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userId");
    const workspaceId = queryParams.get("workspaceId");
    const retrospectId = queryParams.get("retrospectId");

    const [chipData, setChipData] = useRecoilState(ChipData);
    const [updatedChipData, setUpdatedChipData] = useState(chipData);
    const [finalChipData, setFinalChipData] = useState();
    useEffect(() => {
        setUpdatedChipData(chipData);
        changeData();
    }, chipData);

    const changeData = () => {
        const tempChipData = [...chipData]; // 배열로 변경

        console.log("Before tempChipData", tempChipData);

        const modifiedData = tempChipData.map(({key, flag}) => ({
            id: retrospectQuestionsList
                .tagList[key]
                .id
                    ? retrospectQuestionsList
                        .tagList[key]
                        .id
                    : null,
            selected: flag === true
                ? 1
                : flag === false
                    ? 2
                    : flag
        }));

        console.log("After tempChipData", modifiedData);
        setFinalChipData(modifiedData);
        // 여기서 modifiedData를 사용하거나 필요한 처리를 추가하세요.
    };

    // console.log("Again Check : " + workspaceId + ", " + userId + ", " +
    // retrospectId);
    return (
        <Whole>
            {/* 상단바 */}
            <Header>
                <LeftHead>
                    <TitleDiv>{retrospectQuestionsList.name}</TitleDiv>
                    {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                    <Breadcrumb activeKey={2}/>
                </LeftHead>
                <RightHead>
                    <StepButton
                        onClick={handleBeforeClick}
                        targetLabel="이전"
                        backgroundColor="#F9F9F9"
                        color="#EA4336"/>
                    <StepButton targetLabel="완료" onClick={() => {
                            if (isFilled) {
                                changeData();

                                postRetrospect({
                                    workspaceId: workspaceId,
                                    userId: userId,
                                    retrospectId: retrospectId,
                                    retrospectQuestionsList: retrospectQuestionsList,
                                    chipData: finalChipData,
                                    setChipData: setChipData
                                }, navigate);

                            }
                        }}
                        // onClick={postRetrospect({ workspaceId: e.workspaceId, userId: e.userId, retrospectId: e.retrospectId, retrospectQuestionsList : retrospectQuestionsList})}
                        backgroundColor={isFilled
                            ? "#EA4336"
                            : "rgba(234, 67, 54, 0.4)"
} color="#F9F9F9"/>
                </RightHead>
            </Header>
            {/* 회고 작성 창 */}
            <Body>
                <Title>우리 팀에게 가장 알맞은 형용사를 골라주세요.</Title>
                <ChipDiv>
                    <Chips isFilled={isFilled} setIsFilled={setIsFilled}/>
                </ChipDiv>
            </Body>
        </Whole>
    );
};

export default TeamEvaluation;

const StepButton = (e) => {
    return (
        <a href={e.targetPage}>
            <StepBtn
                onClick={e.onClick}
                backgroundColor={e.backgroundColor}
                color={e.color}>
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

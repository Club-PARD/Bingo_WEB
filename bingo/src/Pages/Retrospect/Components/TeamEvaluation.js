/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import Chips from "./Chips";
import { Link } from "react-router-dom";
import { retrospectiveState } from "../../../Contexts/Atom";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { Button } from "../../../Components/NormalComponents/Form";
import { useNavigate } from "react-router";

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
    font-family: WefontGothic(OTF);
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
const Body = styled.div`
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
const Title = styled.div`
    color: var(--sec_grey, #222);
    font-family: WefontGothic(OTF);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    margin-top: 17.5vh;
    margin-bottom: 9vh;
`;
const ChipDiv = styled.div`
    height: 19.4vh;
    width: 48vw;
`;

const TeamEvaluation = (e) =>  {    
    const [retrospective, setRetrospective] = useRecoilState(retrospectiveState);
    const navigate = useNavigate();
    const handleBeforeClick = () => {
        navigate("/RetrospectWriteText");
    };
    const [isFilled, setIsFilled] = useState(false);
    const handleNextButtonClick = () => {
        if (isFilled) { // isFilled가 true일 경우에만 다음 페이지로 이동
            navigate(`/WorkspaceView?workspaceId=${e.workspaceId}`);
        }
    };
    return (
        <Whole>
            {/* 상단바 */}
            <Header>
                <LeftHead>
                    <TitleDiv>{retrospective.retrospectTitle}</TitleDiv>
                    {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                    <Breadcrumb activeKey={2} />
                </LeftHead>
                <RightHead>
                    <StepButton
                        onClick={handleBeforeClick}
                        targetLabel="이전"
                        backgroundColor="#F9F9F9"
                        color="#EA4336"
                    />
                    <StepButton
                        targetLabel="완료"
                        onClick={handleNextButtonClick}
                        backgroundColor={
                            isFilled ? "#EA4336" : "rgba(234, 67, 54, 0.4)"
                        }
                        color="#F9F9F9"
                    />
                </RightHead>
            </Header>
            {/* 회고 작성 창 */}
            <Body>
                <Title>우리 팀에게 가장 알맞은 형용사를 골라주세요.</Title>
                <ChipDiv>
                    <Chips isFilled={isFilled} setIsFilled={setIsFilled} />
                </ChipDiv>
            </Body>
        </Whole>
    );
}

export default TeamEvaluation;

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
                justifyContent="center"
                alignItems="center"
                margin=" 0 0 0 .8vw"
                border="2px solid var(--main_red, #EA4336)"
                backgroundColor={e.backgroundColor}
                color={e.color}
            >
                {e.targetLabel}
            </Button>
        </a>
    );
};

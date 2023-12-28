/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import Chips from "./Chips";
import { Link } from "react-router-dom";

// 전체를 감싸는 div, 이 아래에 Header / Body / Footer로 나뉘어 있음
const Whole = styled.div`
    height : auto;
    overflow: hidden;`
// breadcrumb가 들어가는 부분
const Header = styled.div`
    height : 3.5%;
`
// 회고 종류와 작성 창이 들어가는 부분
const Body = styled.div`
    height : 66vh;
    overflow: auto;
    border-radius : 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
// 취소, 다음이 들어가는 부분
const Footer = styled.div`
    display : flex;
    height : 15%;
    align-items : end;
    justify-content : end;
`
const Title = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 50px;
`
const ChipDiv = styled.div`
`
// Footer 안에 들어갈 버튼들의 Preset
const BtnLink = styled(Link)`
    height : 100%;
    width : 6.5%;
    font-size : 40px;
    border : 1px solid transparent;
    background-color : gainsboro;
    border-radius : 15px;
    margin : 1%;
    text-decoration: none;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #000;
`

function TeamEvaluation() {    
    return(
        <Whole>
            {/* 상단바 */}
            <Header>
                {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 2 (팀 평가하기) */}
                <Breadcrumb activeKey={2} />
            </Header>
            {/* 회고 작성 창 */}
            <Body>
                <Title>우리 팀에게 가장 알맞은 형용사를 골라주세요.</Title>
                <ChipDiv>
                    <Chips />
                </ChipDiv>
            </Body>
            {/* 취소 다음 버튼 */}
            <Footer>
                <BtnLink to="/RetrospectWriteText">
                    이전
                </BtnLink>
                <BtnLink to="/WorkspaceView">
                    완료
                </BtnLink>
            </Footer>
        </Whole>
    );
}

export default TeamEvaluation;
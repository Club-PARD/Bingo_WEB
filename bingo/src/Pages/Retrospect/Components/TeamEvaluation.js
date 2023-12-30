/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import Chips from "./Chips";
import { Link } from "react-router-dom";

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
    height : 86%;
    overflow: auto;
    border-radius : 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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

`
const Title = styled.div`
    box-sizing: border-box;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 50px;
`
const ChipDiv = styled.div`
`
// Footer 안에 들어갈 버튼들의 Preset
const BtnLink = styled(Link)`
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
    text-decoration: none;
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
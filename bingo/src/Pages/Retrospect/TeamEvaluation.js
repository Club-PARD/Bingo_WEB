/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../Breadcrumb";

// 전체를 감싸는 div, 이 아래에 Header / Body / Footer로 나뉘어 있음
const Whole = styled.div`
    min-height: 100%;
    height : auto;
`
// breadcrumb가 들어가는 부분
const Header = styled.div`
    height : 3.5%;
    border : 1px solid red;
`
// 회고 종류와 작성 창이 들어가는 부분
const Body = styled.div`
    min-height : 80%;
    /* height : 80%; */
    border : 1px solid red;
    /* background-color : whitesmoke; */
`
// 취소, 다음이 들어가는 부분
const Footer = styled.div`
    display : flex;
    height : 15%;
    /* border : 1px solid red; */
    align-items : end;
    justify-content : end;
`

// Footer 안에 들어갈 버튼들의 Preset
const Btn = styled.button`
    height : 100%;
    width : 6.5%;
    font-size : 40px;
    border : 1px solid transparent;
    background-color : gainsboro;
    border-radius : 15px;
    margin : 1%;
`

function TeamEvaluation() {
    const handlePrevClick = () => {
        history.push("/teamevaluation");
    };
    const handleCompleteClick = () => {
        history.push("/teamevaluation");
    };
    return(
        <Whole>
            {/* 상단바 */}
            <Header>
                {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 2 (팀 평가하기) */}
                <Breadcrumb activeKey={2} />
            </Header>
            {/* 회고 작성 창 */}
            <Body>

            </Body>
            {/* 취소 다음 버튼 */}
            <Footer>
                <Btn onClick={handlePrevClick}>
                    이전
                </Btn>
                <Btn onClick={handleCompleteClick}>
                    완료
                </Btn>
            </Footer>
        </Whole>
    );
}

export default TeamEvaluation;
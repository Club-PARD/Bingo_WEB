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
    border : 1px solid red;
    align-items : center;
    justify-content : end;
`

// Body 안에 들어가는 회고 작성칸을 감싸는 테두리
const DottedBorder = styled.div`
    border : 5px solid gray;
    border-radius : 25px;
    margin : 0.5%;
    height : 100%;
    background-color : white;
`
// Footer 안에 들어갈 버튼들의 Preset
const Btn = styled.button`
    height : 100%;
`

function RetrospectWriteText() {
    const handleNextClick = () => {
        history.push("/teamevaluation");
    };

    return (
        <Whole>
            {/* 상단바 */}
            <Header>
                {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                <Breadcrumb activeKey={1} />
            </Header>
            <Body>
                <DottedBorder>
                    <p>회고 작성하기</p>
                </DottedBorder>
            </Body>
            <Footer>
                <Btn onClick={handleNextClick}>
                    다음
                </Btn>
            </Footer>
        </Whole>
        
    );
}

export default RetrospectWriteText;

/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../Breadcrumb";
// import RetroWrite from "./RetroWrite";

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
const Border = styled.div`
    border : 5px solid gray;
    border-radius : 25px;
    margin : 1%;
    height : 100%;
    background-color : white;
`
const BorderInside = styled.div`
    border : 2px solid red;
    padding : 1%;
`
const RetroType = styled.div`
    display : flex;
    flex-direction : row;
    align-items : end;
`
const RetroABC = styled.div`
    /* font-weight : bold; */
    font-size : 100px;
    padding-right : 1%;
`

// Footer 안에 들어갈 버튼들의 Preset
const Btn = styled.button`
    height : 100%;
`

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
            {/* 회고 작성 창 */}
            <Body>
                <Border>
                    <BorderInside>
                        {/* 회고 종류와 풀네임 */}
                        <RetroType>
                            <RetroABC>K</RetroABC>
                            <h1>Keep</h1>
                        </RetroType>
                    </BorderInside>
                    {/* RetrospectData의 각 항목에 대해 RetroWrite 컴포넌트를 렌더링 */}
                    {RetrospectData.map((retro, index) => (
                        <div>
                            <h2>{retro.name}</h2>
                            <p>{retro.desc}</p>
                        </div>
                    ))}
                </Border>
            </Body>
            {/* 취소 다음 버튼 */}
            <Footer>
                <Btn onClick={handleNextClick}>
                    다음
                </Btn>
            </Footer>
        </Whole>
        
    );
}

export default RetrospectWriteText;

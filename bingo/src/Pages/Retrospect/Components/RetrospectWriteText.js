/* eslint-disable */
import styled from "styled-components";
import Breadcrumb from "../../../Layout/Breadcrumb";
import { Link } from "react-router-dom";
// import RetroWrite from "./RetroWrite";

// 전체를 감싸는 div, 이 아래에 Header / Body / Footer로 나뉘어 있음
const Whole = styled.div`
    margin-bottom: 0;
    height : 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
// breadcrumb가 들어가는 부분
const Header = styled.div`
    height : 5%;
`
// 회고 종류와 작성 창이 들어가는 부분
const Body = styled.div`
    height : 86%;
    border : 5px solid gray;
    border-radius : 25px;

    /* height : 80%; */
    /* background-color : whitesmoke; */
`
// 취소, 다음이 들어가는 부분
const Footer = styled.div`
    display : flex;
    height : 6%;
    /* border : 1px solid red; */
    align-items : center;
    justify-content : end;
`

// Body 안에 들어가는 회고 작성칸을 감싸는 테두리
const Border = styled.div`
    border-radius : 25px;
    height : 100%;
    overflow: auto;
`
const BorderInside = styled.div`
    padding : 2%;
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
const RetroText = styled.textarea`
    border : 1px solid transparent;
    background-color : gainsboro;
    width : 92%;
    height : 20vh;
    font-size : 25px;
    border-radius : 15px;
`
const BtnLink = styled(Link)`
    height : 100%;
    width : 8%;
    font-size : 34px;
    border : 1px solid transparent;
    background-color : gainsboro;
    border-radius : 10px;
    margin : 1%;
    text-decoration: none;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #000;
`
// Footer 안에 들어갈 버튼들의 Preset


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
                        {/* RetrospectData의 각 항목에 대해 RetroWrite 컴포넌트를 렌더링 */}
                        {RetrospectData.map((retro, index) => (
                            <div>
                                <h2>{retro.name}</h2>
                                <RetroText placeholder="답변을 입력하세요..." />
                            </div>
                        ))}
                    </BorderInside> 
                </Border>
            </Body>
            {/* 취소 다음 버튼 */}
            <Footer>
                <BtnLink to="/WorkspaceView">
                    취소
                </BtnLink>
                <BtnLink to="/TeamEvaluation">
                    다음
                </BtnLink>
            </Footer>
        </Whole>
        
    );
}

export default RetrospectWriteText;


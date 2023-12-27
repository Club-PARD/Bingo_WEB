import styled from "styled-components";
import { P } from "../../Components/NormalComponents/Text";
import Breadcrumb from "../../Breadcrumb";
import { Div } from "../../Components/NormalComponents/Section";

const Whole = styled.div`
    height : 100%;
`
const Header = styled.div`
    height : 3.5%;
`
const Body = styled.div`
    height : 93%;
    /* background-color : whitesmoke; */
`
const DottedBorder = styled.div`
    border : 5px solid gray;
    border-radius : 25px;
    margin : 0.5%;
    height : 100%;
    background-color : white;
`
const Question = styled(Div)`
`

function RetrospectWrite() {
    // 상태에 따라 어떤 Typo가 active 되는지 결정
    return (
        <Whole>
            {/* 상단바 */}
            <Header>
                {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                <Breadcrumb activeKey={1} />
            </Header>
            <Body>
                <DottedBorder er>
                    <p>회고 작성하기</p>
                </DottedBorder>
            </Body>
        </Whole>
        
    );
}

export default RetrospectWrite;

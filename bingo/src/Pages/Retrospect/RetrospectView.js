import Breadcrumb from "../../Breadcrumb";
import styled from "styled-components";


function RetrospectView() {
    return (
        <Whole>
            <Header>
                {/* Breadcrumb은 현재 위치에 따라 달라진다 / 현위치 : 1 (회고 작성하기) */}
                <Breadcrumb activeKey={3} />
            </Header>
            <Body>
                
            </Body>
        </Whole>
    );
}

export default RetrospectView;

const Whole =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const Header = styled.div`
    height : 3.5%;
`
const Body = styled.div`
    /*
    이부분 넘겨받을 때주의할 점
    height값은 화면을 벗어나지 않는가?
    header부분과의 마진은 몇퍼센트인가?
    내부 패딩이라던가 요소 있는가?
    flex설정은 어떻게 되었는가?
    */
    height : 96.5%;
    width: 100%;

    /* background-color : whitesmoke; */

    /*
    여기는 용현이형과 다른 내가 필요한 css요소들
    형한테 레이아웃 통째로 받아올 때 이부분은 확실히 고려해서 받아오자
    */
    border: 1px dashed #E9E9E9;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    overflow: auto;
    background-color: aquamarine;
`


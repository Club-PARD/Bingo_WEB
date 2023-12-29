import {Div} from "../../Components/NormalComponents/Section";
import {React} from "react";
import RetrospectInWorkspace from "./Components/RetrospectInWorkspace";
import BingoBoard from "../../Preset/WorkspacePreset/BingoBoard";
import styled from "styled-components";
import {P} from "../../Components/NormalComponents/Text";
import { Link } from "react-router-dom";

// workspace에 들어오면 보이는 화면 아직 와이어 프레임 안나와서 정확한건 미정 빙고페이지로 이동 가능 회고생성페이지로 이동 가능
// RetrospectInWorkspace component출력 회고결과 출력(이것도 디자인이 완성되고 백엔드가 연결되어야 가능하다)
function WorkspaceView() {
    return (
        <Div width="100%" height="80vh" display="flex" justifyContent="end" flexDirection="column">
                {/* Section1 : 빙고판 */}
            <Div width="100%" height="95%" >
                <Section_Bingo>
                    {/* Title : 빙고판 타이틀 */}
                    <Section_Title style={{marginLeft:'5%'}}>좋은 팀을 위한 9가지 가치</Section_Title>

                    {/* Content : 빙고판 */}
                    <Section_Bingo_Content>
                        <BingoBoard/>
                    </Section_Bingo_Content>
                </Section_Bingo>

                {/* Section2 : 회고 리스트 */}
                <Section_Retrospect>
                    {/* Title : 회고 리스트 타이틀 */}
                    <Section_Title>회고 리스트<Link to = "/RetrospectViewerPage">보러가기</Link></Section_Title>
                    {/* Content : 회고 리스트 */}
                    <Section_Retrospect_Content>
                        <RetrospectInWorkspace/>
                    </Section_Retrospect_Content>
                </Section_Retrospect>
            </Div>
        </Div>
    );
}

export default WorkspaceView;

// [컴포넌트] 빙고판 Section
const Section_Bingo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-right: 1px solid black;
`;

// [컴포넌트] 회고 리스트 Section
const Section_Retrospect = styled.div`
    /* background-color: skyblue; */
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2.5%;
    border-left: 1px solid black;
`
// [컴포넌트] Section의 Title
const Section_Title = styled.div`
    align-items: end;
    font-size: 30px;
`;

// [컴포넌트] 빙고 Section의 컨텐츠
const Section_Bingo_Content = styled(Div)`
    width: 90%;
    height : 90%;
    margin: 0 5%;
    background-color: #444;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: center;
`;

// [컴포넌트] 회고 리스트 Section의 콘텐츠
const Section_Retrospect_Content = styled.div`
    width: 90%;
    height : 90%;
    overflow: auto;
    justify-content: top;
    flex-direction: column;
`;

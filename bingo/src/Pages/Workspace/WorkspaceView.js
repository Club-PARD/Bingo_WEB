import {Div} from "../../Components/NormalComponents/Section";
import {React} from "react";
import RetrospectInWorkspace from "./Components/RetrospectInWorkspace";
import BingoBoard from "../../Preset/WorkspacePreset/BingoBoard";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {useRecoilState} from "recoil";
import {WorkspaceData} from "../../Contexts/Atom.js";
import Modal from "react-modal";
import { useState } from "react";
import { Img } from "../../Components/NormalComponents/Etc.js";
import {CopyToClipboard} from 'react-copy-to-clipboard';

// workspace에 들어오면 보이는 화면 아직 와이어 프레임 안나와서 정확한건 미정 빙고페이지로 이동 가능 회고생성페이지로 이동 가능
// RetrospectInWorkspace component출력 회고결과 출력(이것도 디자인이 완성되고 백엔드가 연결되어야 가능하다)

function WorkspaceView() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const workspaceId = searchParams.get('workspaceId');
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [value, setValue] = useState("12345678");
    const [workspaceData, setWorkspaceData] = useRecoilState(WorkspaceData);

    const filteredWorkspaces = workspaceData.filter(workspace => workspace.id == workspaceId);
    console.log(filteredWorkspaces.name);
    const openModal1 = () => {
        setModalIsOpen1(true);
    };
    const closeModal = () => {
        setModalIsOpen1(false);
    };
    return (
        <Div width="100%" height="93.9vh" display="flex" backgroundColor="#F9F9F9" justifyContent="end" flexDirection="column">
                {/* Section1 : 빙고판 */}
            <Div width="66.3%" margin="0 auto" height="100%" display="flex" flexDirection="row">
                <SectionLeft>
                    <InformationDiv>프로젝트 정보</InformationDiv>
                    <Section_Bingo>
                        
                        {/*<h1>{filteredWorkspaces[0].name}</h1>
                        <h3>{filteredWorkspaces[0].description}</h3>*/}
                        {/* Title : 빙고판 타이틀 */}
                        <TitleAndButton>
                            <Title>3!4!(쓰리포)</Title>
                            <InviteButton onClick={openModal1}>팀원 초대하기</InviteButton>
                        </TitleAndButton>
                        <TeamDesc>한동대학교 PARD 롱커톤 3!4! 파이팅 !</TeamDesc>
                        <BingoDesc>
                            <BingoDescText>좋은 팀을 위한 9가지 가치 빙고판</BingoDescText>
                        </BingoDesc>

                        {/* Content : 빙고판 */}
                        <Section_Bingo_Content>
                            <BingoBoard/>
                        </Section_Bingo_Content>
                    </Section_Bingo>
                </SectionLeft>
                <SectionEclipse>
                    <EclipseDiv/>
                    <EclipseDiv/>
                    <EclipseDiv/>
                    <EclipseDiv/>
                    <EclipseDiv/>
                    <EclipseDiv/>
                    <EclipseDiv/>
                    <EclipseDiv/>
                </SectionEclipse>
                {/* Section2 : 회고 리스트 */}
                <Section_Retrospect>
                    {/* Title : 회고 리스트 타이틀 */}
                    <InformationDiv>회고 리스트<Link to = "/RetrospectViewerPage">보러가기</Link></InformationDiv>
                    {/* Content : 회고 리스트 */}
                    <Section_Retrospect_Content>
                        <RetrospectInWorkspace/>
                    </Section_Retrospect_Content>
                </Section_Retrospect>
            </Div>
            <InviteModal modalIsOpen1={modalIsOpen1} closeModal={closeModal} value={value}/>
        </Div>
    );
}

export default WorkspaceView;
const SectionLeft=styled.div`
    width: 25.7vw;
    height: 80vh;
`
const InformationDiv=styled.div`
    color: #838383;
    font-family: WefontGothic(OTF);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
    margin: 7.7vh 0 1.1vh;
`
// [컴포넌트] 빙고판 Section
const Section_Bingo = styled.div`
    width: 25.7vw;
    height: 60.9vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    background-color: #F3F3F3;
`;
const AdRetero=styled.div`
    width: 14vw;
    height: 4vh;
    margin: 0 auto;
    padding: .9vh 1.8vh;
    border-radius: 40px;
    background: var(--main_red, #EA4336);
    align-items: center;
    justify-content: center;
    display: flex;
    color: var(--main_white, #F9F9F9);
    font-family: WefontGothic(OTF);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`
const TitleAndButton=styled.div`
    width: 20.3vw;
    height: 3vh;
    margin-top: 4.7vh;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`
const Title=styled.div`
    color: var(--sec_grey, #222);
    font-family: WefontGothic(OTF);
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
`
const InviteButton=styled.div`
    width: 6vw;
    height: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    border: 1.5px solid #222;
    color: var(--sec_grey, #222);
    font-family: WefontGothic(OTF);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
`
const TeamDesc=styled.div`
    width: 20.3vw;
    height: 2vh;
    margin-top: .7vh;
    color: rgba(34, 34, 34, 0.80);
    font-family: WefontGothic(OTF);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
`
const BingoDesc=styled.div`
    width: 20.3vw;
    height: 2vh;
    margin-top: 5.3vh;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
`
const BingoDescText=styled.div`
    color: #6B6B6B;
    font-family: WefontGothic(OTF);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
`
const SectionEclipse=styled.div`
    width: 6.4vw;
    height: 24vh;
    margin-top: 29vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const EclipseDiv =styled.div`
    width: 0.6vw;
    height: .6vw;
    border: none;
    box-sizing: border-box;
    background-color: #E1E1E1;
    border-radius: 50%;
`
// [컴포넌트] 회고 리스트 Section
const Section_Retrospect = styled.div`
    /* background-color: skyblue; */
    width: 34vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
// [컴포넌트] 빙고 Section의 컨텐츠
const Section_Bingo_Content = styled(Div)`
    width: 36vh;
    height : 36vh;
    margin-top: 1.2vh;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: center;
`;

// [컴포넌트] 회고 리스트 Section의 콘텐츠
const Section_Retrospect_Content = styled.div`
    width: 34vw;
    height : 90%;
    overflow: auto;
    align-items: end;
    justify-content: top;
    flex-direction: column;
    border: none;
`;
const StyleModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0,0.2)"
    },
    content: {
        padding: "2vh",
        color: "black",
        borderRadius: "40px",
        background: "var(--main_white, #F9F9F9)",
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        margin: "0",
        width: "35%",
        height: "39%",
        border: "none",
        //alignItems: "center",

        display: "flex",
        flexDirection: "column",

        //position: 'absolute',  absolute positioning

        transform: "translate(87%, 60%)", // center the modal
        // 모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을
        // 담당합니다. 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
    }
}

const InviteModal = (e) => {
    return (
        <Modal isOpen={e.modalIsOpen1} onRequestClose={e.closeModal} style={StyleModal}>
            {/* 팀원 코드 section */}
            <Div
                justifyContent = "space-around"
                alignItems="center"
                width="100%"
                height="90%"
                flexDirection="column">
                <Div
                    fontSize="40px"
                    fontWeight="400" 
                    >팀원 초대하기 코드</Div>
                <Div>
                    <Div fontSize="90px">{e.value}</Div>
                    <CopyToClipboard text={e.value} onCopy={() => alert("클립보드에 복사되었습니다.")}>
                        <Img></Img>
                    </CopyToClipboard>
                </Div>
                    <Div></Div>
            </Div>
        </Modal>
    );
}
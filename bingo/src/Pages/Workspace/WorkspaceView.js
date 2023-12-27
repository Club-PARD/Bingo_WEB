import {Div} from "../../Components/NormalComponents/Section";
import {Img} from "../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import {useState, React} from "react";
import {Button} from "../../Components/NormalComponents/Form";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link, useLocation} from "react-router-dom";
import RetrospectInWorkspace from "./RetrospectInWorkspace";
import BingoBoard from "../../Preset/WorkspacePreset/BingoBoard";
import styled from "styled-components";
import {P} from "../../Components/NormalComponents/Text";


// workspace에 들어오면 보이는 화면 아직 와이어 프레임 안나와서 정확한건 미정 빙고페이지로 이동 가능 회고생성페이지로 이동 가능
// RetrospectInWorkspace component출력 회고결과 출력(이것도 디자인이 완성되고 백엔드가 연결되어야 가능하다)
function WorkspaceView() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [value, setValue] = useState("12345678");
    const openModal1 = () => {
        setModalIsOpen1(true);
    };

    const closeModal = () => {
        setModalIsOpen1(false);
    };
    return (
        <Div width="100%" height="100%">

            {/* 보여지는 화면 구조 */}
            {/*Right Space width=1706px*/}

            {/* 9가지 가치 빙고판 */}
            {/*height=926px */}
            <Div height="100%" width="100%">

                {/* Section1 : 빙고판 */}
                <Section_Bingo>
                    {/* Title : 빙고판 타이틀 */}
                    <Section_Title>좋은 팀을 위한 9가지 가치</Section_Title>

                    {/* Content : 빙고판 */}
                    <Section_Bingo_Content>
                        <BingoBoard/>
                    </Section_Bingo_Content>
                </Section_Bingo>

                {/* Section2 : 회고 리스트 */}
                <Section_Retrospect>
                    {/* Title : 회고 리스트 타이틀 */}
                    <Section_Title>회고 리스트</Section_Title>
                    {/* Content : 회고 리스트 */}
                    <Section_Retrospect_Content>
                        <RetrospectInWorkspace/>
                    </Section_Retrospect_Content>
                </Section_Retrospect>

            </Div>

            {/*
            Modal size: width:584px, height:372px
            Modal show invite code to user, user can copy the code to click "복사 " button*/
            }

            <Modal
                isOpen={modalIsOpen1}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0,0.5)"
                    },
                    content: {
                        borderRadius: "12px",
                        padding: 0,
                        color: "black",
                        background: `#D9D9D9`,
                        backgroundSize: "cover",
                        // backgroundRepeat: "no-repeat",
                        margin: "0",
                        width: "35%",
                        height: "39%",
                        display: "flex",
                        border: "none",
                        //alignItems: "center",
                        overflowY: "hidden",

                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",

                        //position: 'absolute',  absolute positioning

                        transform: "translate(87%, 60%)", // center the modal
                        // 모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을
                        // 담당합니다. 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                    }
                }}>
                {/* 이미지 추가 modal's width=1179, height=616 */
                }
                <Div
                    width="100%"
                    height="10%"
                    alignItems="center"
                    flexDirection="row-reverse"
                    padding="2% 2% 0 0">
                    <Img
                        src="/img/Home/close.png"
                        alt="Close"
                        onClick={closeModal}
                        width="4%"
                        height="90%"/>
                </Div>
                <Div alignItems="center" width="100%" height="70%" flexDirection="column">
                    <Div fontSize="20px" fontWeight="400" margin="0 0 12% 0">팀원 초대하기 코드</Div>
                    <Div fontSize="75px">{value}</Div>
                </Div>
                <CopyToClipboard text={value} onCopy={() => alert("클립보드에 복사되었습니다.")}>
                    <Button
                        width="99px"
                        height="30px"
                        style={{
                            marginLeft: "40%"
                        }}
                        backgroundColor="#959595"
                        borderRadius="9px">복사</Button>
                </CopyToClipboard>
            </Modal>
        </Div>
    );
}

export default WorkspaceView;

// [컴포넌트] 영역을 절반으로 나눈 Div 컴포넌트
const Div_50per_100per = styled(Div)`
    width:  50%;
    height:  100%;
    flex-direction: column;
`

// [컴포넌트] 빙고판 Section
const Section_Bingo = styled(Div_50per_100per)`
    /* background-color: orange; */
    padding-right: 100px;
    border-right: 1px solid black;
`;

// [컴포넌트] 회고 리스트 Section
const Section_Retrospect = styled(Div_50per_100per)`
    /* background-color: skyblue; */
    padding-left: 100px;
    border-left: 1px solid black;
`
// [컴포넌트] Section의 Title
const Section_Title = styled(P)`
    font-size: 30px;
    margin-bottom: 30px;
`;

// [컴포넌트] 빙고 Section의 컨텐츠
const Section_Bingo_Content = styled(Div)`
    width: 100%;
    height : 90%;
    background-color: #444;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    align-items: center;
`;

// [컴포넌트] 회고 리스트 Section의 콘텐츠
const Section_Retrospect_Content = styled(Div)`
    width: 90%;
    height : 100%;
    overflow: auto;
    justify-content: center;
`;

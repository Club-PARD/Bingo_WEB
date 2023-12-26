import {Div} from "../../Components/NormalComponents/Section";
import { Img } from "../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import { useState, React } from "react";
import { Button } from "../../Components/NormalComponents/Form";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";
import RetrospectInWorkspace from "./RetrospectInWorkspace";
import BingoBoard from "../../Preset/WorkspacePreset/BingoBoard";

//workspace에 들어오면 보이는 화면
//아직 와이어 프레임 안나와서 정확한건 미정
//빙고페이지로 이동 가능
//회고생성페이지로 이동 가능
//RetrospectInWorkspace component출력
//회고결과 출력(이것도 디자인이 완성되고 백엔드가 연결되어야 가능하다)
function WorkspaceView() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [value, setValue] = useState("123456");
    const openModal1 = () => {
        setModalIsOpen1(true);
    };

    const closeModal = () => {
        setModalIsOpen1(false);
    };
    return (
        <Div flexDirection="row" width="90vw" height="100vh">
            
            {/*Right Space width=1706px*/}
            <Div flexDirection="column" height="100%" width="100%">
                {/*height=154px */}
                <Div
                    height="20%"
                    width="100%" 
                    flexDirection="row"
                    alignItems="flex-end"
                    padding=" 0 0 4% 0"
                >
                    {/*title area*/}
                    <Div
                        flexShirnk="0"
                        display= "inline-block"
                        color="black"
                        fontSize="56px"
                        fontWeight="100"
                        lineHeight="150%"
                        fontStyle="normal"
                        margin="0 0.7%"
                    >
                        강아지들 다 모여
                    </Div>
                    {/*project introduce*/}
                    <Div
                        display= "inline-block"
                        color="black"
                        fontSize="17px"
                        fontWeight="100"
                        lineHeight="150%"
                        fontStyle="normal"
                        margin="0 2.3% .5% 0"
                    >
                        여기는 강사모야 강아지들을 사랑하는 모임
                    </Div>
                    {/*open Modal*/}
                    <Div>
                        <Button 
                            onClick={openModal1} 
                            borderRadius= "50px"
                            backgroundColor= "#D9D9D9"
                            color= "black"
                            alignItems="center"
                            justifyContent="center"
                            padding="4px 12px"
                            margin=" 0 0 5% 0"

                            fontWeight="0"
                            fontSize="15px"
                            fontStyle="normal"
                        >
                            팀원 초대하기
                        </Button>
                    </Div>
                    
                </Div>
                {/*height=926px */}
                <Div
                    height="80%"
                    width="100%"
                >
                    {/*Bingo layout width=800 */}
                    <Div 
                        width="47%"
                        height="100%"
                        flexDirection="column"
                    >
                        {/*Div for vertical Line */}
                        <Div
                            width="100%"
                            height="93%"
                            borderRight="1px solid black"
                        >
                            <Div
                                width="90%"
                                height="91%"
                                backgroundColor="#444"
                                margin="9% 0 0 2%"
                                flexWrap="wrap" 
                                justifyContent="space-evenly" 
                                alignContent="space-evenly"
                                alignItems="center"
                            >
                                <BingoBoard />
                            </Div>
                        </Div>
                    </Div>
                    {/*retrospectlist layout width=906 */}
                    <Div
                        width="53%"
                        height="100%"
                        alignItems="center"
                        flexDirection="column"
                    >
                        {/*retrospectlist top*/}
                        <Div
                            width="83%"
                            height="9%"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            margin="0 0 2% 0"
                        >
                            <Div fontSize="14px">회고 리스트</Div>
                        </Div>
                        {/*retrospectlist body height=833*/}
                        <Div
                            width="550px"
                            height="833px"
                            overflow="auto"
                            justifyContent="center"
                        >
                            <RetrospectInWorkspace />
                        </Div>
                    </Div>
                </Div>
                
            </Div>

{/*
    Modal size: width:584px, height:372px 
    Modal show invite code to user, user can copy the code to click "복사"button
*/}
            <Modal isOpen={modalIsOpen1} onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0,0.5)",                    
                        },
                        content: {
                            borderRadius: "12px",
                            padding:0,
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
                    
                            //position: 'absolute', // absolute positioning
                            
                            transform: "translate(87%, 60%)", // center the modal
                            //모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을 담당합니다.
                    
                            // 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                        },
                    }}
            >
                {/* 이미지 추가 modal's width=1179, height=616 */}
                <Div 
                    width="100%" 
                    height="10%" 
                    alignItems="center" 
                    flexDirection="row-reverse" 
                    padding="2% 2% 0 0">
                    <Img src="/img/Home/close.png" alt="Close" onClick={closeModal} width="4%" height="90%"/>
                </Div>
                <Div alignItems="center" width="100%" height="70%" flexDirection="column">
                    <Div fontSize="20px" fontWeight="400" margin="0 0 12% 0">팀원 초대하기 코드</Div>
                    <Div fontSize="75px">{value}</Div>
                </Div>
                <CopyToClipboard text={value} onCopy={() => alert("클립보드에 복사되었습니다.")}>
                    <Button 
                        width="99px" 
                        height="30px" 
                        style={{marginLeft: "40%"}} 
                        backgroundColor="#959595"
                        borderRadius="9px"
                    >복사</Button>
                </CopyToClipboard>
            </Modal>
        </Div>
    );
}

export default WorkspaceView;


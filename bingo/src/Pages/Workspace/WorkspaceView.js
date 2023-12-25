import {Div} from "../../Components/NormalComponents/Section";
import styled from "styled-components";
import { Img } from "../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import { useState, React } from "react";
import { Button } from "../../Components/NormalComponents/Form";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";


function WorkspaceView() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [value, setValue] = useState("123456");
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
    return (
        <Div flexDirection="row" width="100vw" height="100vh">
            {/*Left Space width=415px*/}
            <Div flexDirection="column" height="100%" width="20%" backgroundColor="#D9D9D9">
                <Div 
                    width="46%" 
                    height="8%" 
                    margin=" 4% 0 10% 11%"
                    fontFamily="Inter"
                    fontSize="60px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="150%"
                >BINGO</Div>
                <Div
                    margin="0 0 2% 10%"
                    fontFamily="Inter"
                    fontSize="35px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="150%"
                >메인</Div>
                <Div
                    margin="0 0 2% 10%"
                    fontFamily="Inter"
                    fontSize="35px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="150%"
                >빙고</Div>
                <Div
                    margin="0 0 2% 10%"
                    fontFamily="Inter"
                    fontSize="35px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="150%"
                >회고</Div>
            </Div>
            {/*Right Space width=1565px*/}
            <Div flexDirection="column" height="100%" width="80%">
                <Div
                    height="27%"
                    width="100%" 
                >
                    {/*retrospect result div*/}
                    <Div
                        height="77%"
                        width="62%"
                        flexShirnk="0"
                        borderRadius="18px"
                        backgroundColor="#D9D9D9"
                        margin="2% 0 0 3%"
                    >

                    </Div>
                    {/*UI Space width=547px */}
                    <Div
                        height="100%"
                        width="62%"
                        justifyContent="space-evenly"
                        padding="2% 1% 0 5%"
                    >
                        <Link to = "/RetrospectCreate">
                            <Div width="15%" height="25%" margin="0 0 0 25%">
                                <Img src="/img/WorkspaceView/ph_plus-bold.png"/>
                            </Div>
                        </Link>
                        <Button onClick={openModal} width="15%" height="25%" backgroundColor="white">
                            <Img width="100%" height="100%" src="/img/WorkspaceView/mdi_share-outline.png"/>
                        </Button>
                        <Div width="15%" height="25%">
                            <Img src="/img/WorkspaceView/notifications.png"/>
                        </Div>
                        <Div width="15%" height="25%">
                            <Img src="/img/WorkspaceView/account_circle.png"/>
                        </Div>
                    </Div>
                </Div>
            </Div>

{/*
    Modal size: width:584px, height:372px 
    Modal show invite code to user, user can copy the code to click "복사하기"button
*/}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0,0.5)",                    
                        },
                        content: {
                            borderRadius: "25px",
                            padding:0,
                            color: "black",
                            background: `#D9D9D9`,
                            backgroundSize: "cover",
                            // backgroundRepeat: "no-repeat",
                            margin: "0",
                            width: "29%",
                            height: "34%",
                            display: "flex",
                            border: "none",
                            //alignItems: "center",
                            overflowY: "hidden",
                        
                            display: "flex",
                            flexDirection: "column",
                            overflowY: "auto",
                    
                            //position: 'absolute', // absolute positioning
                            left: "50%", // center the modal horizontally
                            top: "53%", // center the modal vertically
                            transform: "translate(50%, -110%)", // center the modal
                            //모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을 담당합니다.
                    
                            // 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                        },
                    }}
            >
                {/* 이미지 추가 modal's width=1179, height=616 */}
                <Div 
                    width="100%" 
                    height="20%" 
                    alignItems="center" 
                    flexDirection="row-reverse" 
                    padding="0 1% 0 0">
                    <Img src="/img/Home/close.png" alt="Close" onClick={closeModal} width="10%" height="80%"/>
                </Div>
                <Div alignItems="center" width="100%" height="50%" justifyContent="center" flexDirection="column">
                    <Div fontSize="50px" fontWeight="900">코드</Div>
                    <Div fontSize="30px">{value}</Div>
                </Div>
                <CopyToClipboard text={value} onCopy={() => alert("클립보드에 복사되었습니다.")}>
                    <Button width="10%" height="10%" style={{marginLeft: "45%"}}>복사</Button>
                </CopyToClipboard>
            </Modal>
        </Div>
    );
}

export default WorkspaceView;


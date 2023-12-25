import { useState, React } from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import WorkspaceCard from "./WorkspaceCard";
import { Button } from "../../Components/NormalComponents/Form";
import { Img } from "../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import WorkspaceCreate from "./WorkspaceCreate.js"
import { Link } from "react-router-dom";

// 불러온 값 저장하기
const WorkspaceData = [
    {
        name : "Hello",
        desc : "3!4! Bingo!",
        period : "231111 ~ 231111",
    },
    {
        name : "Longcurtion",
        desc : "힘냅시다..",
        period : "231111 ~ 231111",
    },
    {
        name : "명성",
        desc : "맛있어",
        period : "231111 ~ 231111",
    },
    {
        name : "맹륜진사갈비",
        desc : "맹구 마지막 우승",
        period : "130512 ~ ",
    },
];

const Home =()=> {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };  
    const generateRandomValue = () => {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomValue = '';
        const length = 6; // 6자리 난수 생성
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomValue += characters.charAt(randomIndex);
        }
        
        console.log(randomValue);
        
    };
    const onButtonClick = () => {
        generateRandomValue();
        setModalIsOpen(false);
    };
    return(
        <>
            {/* 상단바 부분 */}
            <Div flexDirection="row" justifyContent="space-between" padding="1%" alignItems="center">
                {/* 빙고 로고, 현재 페이지 이름 표시 부분 */}
                <Div flexDirection="row">
                    <Img src="/img/Home/logo.jpg" width={"10%"}/>
                    <P fontSize="30px" fontWeight="bolder" marginRight="10px">현재 워크스페이스</P>
                </Div>
                {/* 새 워크스페이스 생성 버튼 */}
                <Button borderRadius="5px" padding="1%" fontWeight="bolder" fontSize="15px" onClick={openModal}>새 워크스페이스 생성</Button>
            </Div>
            <hr />
            {/* 워크스페이스 카드 부분 */}
            <Div
                flexDirection="row"
                justifyContent="center"
            >
                {/* 현재는 더미값이지만 장기적으로는 워크스페이스 데이터 기반으로 카드 출력  */}
                {WorkspaceData.map((workspace, index) => (
                    <WorkspaceCard
                        key={index}
                        name={workspace.name}
                        desc={workspace.desc}
                        period={workspace.period}
                    />
                ))}
            </Div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0,0.5)",                    
                        },
                        content: {
                            padding:0,
                            color: "black",
                            background: `#D9D9D9`,
                            backgroundSize: "cover",
                            // backgroundRepeat: "no-repeat",
                            margin: "0",
                            width: "61%",
                            height: "57%",
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
                            transform: "translate(-50%, -50%)", // center the modal
                            //모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을 담당합니다.
                    
                            // 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                        },
                    }}
            >
                {/* 이미지 추가 modal's width=1179, height=616 */}
                <Div width="100%" height="8%" alignItems="center" flexDirection="row-reverse" padding="0 1% 0 0">
                    <Img src="/img/Home/close.png" alt="Close" onClick={closeModal} width="34px" height="34px"/>
                </Div>
                {/* 모달 내용 */}
                <WorkspaceCreate />
                <Link to = "/Home">
                    <Button onClick={onButtonClick}>생성하기</Button>
                </Link>
            </Modal>
        </>
        
    )
}

export default Home;

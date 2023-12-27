import { useState, React } from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section.js";
import { P } from "../../Components/NormalComponents/Text.js";
import WorkspaceCard from "./WorkspaceCard.js";
import { Button } from "../../Components/NormalComponents/Form.js";
import { Img } from "../../Components/NormalComponents/Etc.js";
import Modal from "react-modal";
import WorkspaceCreate from "./WorkspaceCreate.js"
import { Link } from "react-router-dom";
import DrawerBtn from "../../DrawerBtn.js";

// 불러온 값 저장하기
const WorkspaceData = [
    {
        name : "개발팀 회고",
        desc : "23-4 롱커톤 3!4!",
        picture : "/img/Login/img4.png",
        link : "/WorkspaceView",
    },
    {
        name : "공설입 회고",
        desc : "공학설계입문 2분반 1조",
        picture : " ",
        link : "/",
    },
    {
        name : "SLESLE 2023",
        desc : "23-2 슬기짜기 임원단",
        picture : " ",
        link : "/",
    },
    {
        name : "맹맹맹",
        desc : "맹구 마지막 우승",
        picture : " ",
        link : "/",
    },
    {
        name : "멍멍멍",
        desc : "북런던 강아지",
        picture : " ",
        link : "/",
    },
];

const WorkspaceList =()=> {
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
            <Div flexDirection="row" justifyContent="space-between" alignItems="center" height="24vh" width="90vw" >
                {/* 빙고 로고, 현재 페이지 이름 표시 부분 */}
                <Div  fontSize="160px" alignItems="center" margin="2% 0 0 0">
                    {/* <Img src="/img/Home/logo.jpg" width={"10%"}/> */}
                    Bingo
                </Div>
            </Div>
            {/*프로젝트 카드들의 나열, 해당 공간의 이름을 감싼 Div */}
            <Div flexDirection="column" height="76vh" width="90vw">
                <Div height="4%" fontSize="27px">워크스페이스 리스트</Div>
                {/* 워크스페이스 카드 부분 */}
                
                <Div
                    flexDirection="row"
                    alignContent="baseline"
                    alignItems="center"
                    height="96%"
                    width="100%"
                    flexWrap="wrap"
                    overflow="auto"
                >
                    {/*디자이너 요청으로 워크스페이스 생성버튼 옮김 */}
                    <Div 
                        flexDirection="column"
                        margin="1% 1% 1% 0"
                        padding="1%"
                        border="1px solid transparent"
                        borderRadius="15px"
                        width="24%"
                        height="37.4%"
                        backgroundColor="#EDEDED"
                        onClick={openModal}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Img width="20%" height="auto" src="/Img/WorkspaceView/ph_plus-bold.png"/>
                    </Div>
                    {/* 현재는 더미값이지만 장기적으로는 워크스페이스 데이터 기반으로 카드 출력  */}
                    {WorkspaceData.map((workspace, index) => (
                        <WorkspaceCard
                            key={index}
                            name={workspace.name}
                            desc={workspace.desc}
                            picture={workspace.picture}
                            link={workspace.link}
                            period={workspace.period}
                        />
                    ))}
                </Div>
            </Div>

            {/* 모달창 출력 부분 */}
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
                            width: "50%",
                            height: "60%",
                            display: "flex",
                            border: "none",
                            //alignItems: "center",
                            overflowY: "hidden",
                        
                            display: "flex",
                            flexDirection: "column",
                            overflowY: "auto",
                    
                            //position: 'absolute', // absolute positioning
                            left: "50%", // center the modal horizontally
                            top: "50%", // center the modal vertically
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
                <Div justifyContent="center">
                    <Link to = "/Home">
                        <Button onClick={onButtonClick}>
                            생성하기
                        </Button>
                    </Link>
                </Div>
            </Modal>
        </>
        
    )
}

export default WorkspaceList;
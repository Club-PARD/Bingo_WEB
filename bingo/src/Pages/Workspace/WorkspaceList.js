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
import WorkspaceModal from "./\bWorkspaceModal.js";

// 불러온 값 저장하기
const WorkspaceData = [
    {
        name : "개발팀 회고",
        desc : "23-4 롱커톤 3!4!",
        picture : " ",
    },
    {
        name : "공설입 회고",
        desc : "공학설계입문 2분반 1조",
        picture : " ",
    },
    {
        name : "SLESLE 2023",
        desc : "23-2 슬기짜기 임원단",
        picture : " ",
    },
    {
        name : "맹맹맹",
        desc : "맹구 마지막 우승",
        picture : " ",
    },
    {
        name : "멍멍멍",
        desc : "북런던 강아지",
        picture : " ",
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

    return (
    <>
      <Div flexDirection="row" justifyContent="space-between" padding="1% 3% 1% 3%" alignItems="center" height="15vh">
        <Div flexDirection="row">
          <P fontSize="70px" margin="0 0 0 1%">Bingo</P>
        </Div>

        <Button borderRadius="25px" padding="1%" fontSize="15px" backgroundColor="gainsboro" color="black" onClick={openModal}>
          워크스페이스 생성
        </Button>

      </Div>

      <Div margin="0 0 0 3%">워크스페이스 리스트</Div>

      <Div flexDirection="row" justifyContent="center">
        {WorkspaceData.map((workspace, index) => (
          <WorkspaceCard key={index} name={workspace.name} desc={workspace.desc} period={workspace.period} />
        ))}
      </Div>
      
      <WorkspaceModal isOpen={modalIsOpen} closeModal={closeModal} onButtonClick={onButtonClick} />
    </>
  );
};

export default WorkspaceList;
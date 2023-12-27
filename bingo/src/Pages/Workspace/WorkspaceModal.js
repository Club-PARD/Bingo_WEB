// WorkspaceModal.js
import React from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section.js";
import { Button } from "../../Components/NormalComponents/Form.js";
import { Img } from "../../Components/NormalComponents/Etc.js";
import Modal from "react-modal";
import WorkspaceCreate from "./WorkspaceCreate.js";
import { Link } from "react-router-dom";

const WorkspaceModal = ({ isOpen, closeModal, onButtonClick }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0,0.5)",
        },
        content: {
          padding: 0,
          color: "black",
          background: `#D9D9D9`,
          backgroundSize: "cover",
          margin: "0",
          width: "50%",
          height: "60%",
          display: "flex",
          border: "none",
          overflowY: "hidden",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <Div width="100%" height="8%" alignItems="center" flexDirection="row-reverse" padding="0 1% 0 0">
        <Img src="/img/Home/close.png" alt="Close" onClick={closeModal} width="34px" height="34px" />
      </Div>
      <WorkspaceCreate />
      <Div justifyContent="center">
        <Link to="/Home">
          <Button onClick={onButtonClick}>
            생성하기
          </Button>
        </Link>
      </Div>
    </Modal>
  );
};

export default WorkspaceModal;

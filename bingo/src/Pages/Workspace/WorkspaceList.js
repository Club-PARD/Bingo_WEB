import { React, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Img } from "../../Components/NormalComponents/Etc.js";
import { Button, Input } from "../../Components/NormalComponents/Form.js";
import { Div } from "../../Components/NormalComponents/Section.js";
import { Label } from "../../Components/NormalComponents/Text.js";
import WorkspaceCard from "./Components/WorkspaceCard.js";
import { joinProject } from "../../Api/Workspace.js";
import {
  createWorkspace,
  getAllProjects,
  getProject,
  postProject,
} from "../../Api/Workspace.js";

// 불러온 값 저장하기
const WorkspaceData = [
  {
    name: "개발팀 회고",
    desc: "23-4 롱커톤 3!4!",
  },
  {
    name: "공설입 회고",
    desc: "공학설계입문 2분반 1조",
  },
  {
    name: "SLESLE 2023",
    desc: "23-2 슬기짜기 임원단",
  },
  {
    name: "맹맹맹",
    desc: "맹구 마지막 우승",
  },
  {
    name: "멍멍멍",
    desc: "북런던 강아지",
  },
];

const WorkspaceList = () => {
  const [projectList, setProjectList] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [code, setCode] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const fileInputRef = useRef(null);

  useEffect (() =>{
      getAllProjects().then(function (data){
          setProjectList(data.data);

          console.log(data.data);
      })
  }, []);

  const generateRandomValue = () => {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomValue = "";
    const length = 8; // 8자리 난수 생성

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomValue += characters.charAt(randomIndex);
    }

    setCode(randomValue);

    console.log(randomValue);
  };

//   // 모달창에서 확인 버튼을 눌렀을 때 동작하는 것들 (버전 1)
//   const onButtonClick = () => {
//     generateRandomValue();
//     const data = {
//       title: title,
//       desc: desc,
//       code: code,
//     };

//     // 1) 단순히 워크스페이스 정보를 만드는 것 
//     createWorkspace(data);
//     // 2) 사용자를 추가하는 것 
//     const res = postProject(data);
//     console.log(res);
//     setModalIsOpen(false);


//     // joinProject(data);

//     // 새로운 변수 추가 후 화면 새로고침 -> 바로 반영되게 하기 위해서
//     window.location.reload();
// };

const onButtonClick = async () => {
    generateRandomValue();
    const data = {
        title: title,
        desc: desc,
        code: code,
    };

    // 1) 단순히 워크스페이스 정보를 만드는 것 
    await createWorkspace(data);

    // 2) 사용자를 추가하는 것 
    const res = await postProject(data);
    console.log(res);

    setModalIsOpen(false);

    // joinProject(data);

    // 새로운 변수 추가 후 화면 새로고침 -> 바로 반영되게 하기 위해서
    window.location.reload();
};



  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeIntroduce = (event) => {
    setDesc(event.target.value);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current && fileInputRef.current.click();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const gap = () => {
    const Allpro = getAllProjects();
  };

  const gp = () => {
    getProject();
  };

  return (
    <>
      <button onClick={gap}>모든 프로젝트 정보 불러오기</button>
      <button onClick={gp}>하나의 프로젝트 정보 불러오기</button>
      {/* 상단바 부분 */}
      <Div
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height="20vh"
        width="90vw"
      >
        {/* 빙고 로고, 현재 페이지 이름 표시 부분 */}
        <Div
          fontSize="120px"
          alignItems="center"
          backgroundColor="#D9D9D9"
          borderRadius="15px"
          margin="0 0 0 1%"
        >
          {/* <Img src="/img/Home/logo.jpg" width={"10%"}/> */}
          Bingo
        </Div>
      </Div>
      {/*프로젝트 카드들의 나열, 해당 공간의 이름을 감싼 Div */}
      <Div flexDirection="column" height="80vh" width="99%" margin="0 0 0 1%">
        <Div
          height="4%"
          fontSize="20px"
          width="auto"
          borderRadius="15px"
          alignItems="center"
        >
          워크스페이스 리스트
        </Div>
        {/* 워크스페이스 카드 부분 */}

        <Div
          flexDirection="row"
          alignContent="baseline"
          alignItems="center"
          height="96%"
          width="99%"
          flexWrap="wrap"
          overflow="auto"
        >
          {/*디자이너 요청으로 워크스페이스 생성버튼 옮김 */}
          <Div
            flexDirection="column"
            margin="1% 1% 1% 0"
            border="1px solid transparent"
            borderRadius="15px"
            width="23%"
            height="37.4%"
            backgroundColor="#EDEDED"
            onClick={openModal}
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <Img
              width="20%"
              height="auto"
              src="/Img/WorkspaceView/ph_plus-bold.png"
            />
          </Div>
          {/* 현재는 더미값이지만 장기적으로는 워크스페이스 데이터 기반으로 카드 출력  */}
          {projectList.map((Allpro, index) => (
            <WorkspaceCard
              key={index}
              name={Allpro.name}
              desc={Allpro.desc}
            />
          ))}
        </Div>
      </Div>

      {/* 모달창 출력 부분 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0,0.5)",
          },
          content: {
            padding: 0,
            color: "black",
            background: `#FFF`,
            backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            margin: "0",
            width: "61.4%",
            height: "58%",
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
        {/* 모달 내용 */}
        <Div
          width="93%"
          height="100%"
          flexDirection="column-reverse"
          justifyContent="top"
          alignItems="center"
          padding="0 3.5% 0 3.5%"
        >
          <Div
            height="24%"
            width="100%"
            flexDirection="row"
            justifyContent="right"
            alignItems="center"
          >
            <Button
              width="11%"
              height="33%"
              backgroundColor="#D9D9D9"
              margin=" 0 3.5% 0 0"
              color="black"
              borderRadius="10px"
              fontSize="28px"
              onClick={closeModal}
            >
              취소
            </Button>
            <Button
              width="11%"
              height="33%"
              backgroundColor="#D9D9D9"
              margin=" 0 3.5% 0 0"
              color="black"
              borderRadius="10px"
              fontSize="28px"
              onClick={onButtonClick}
            >
              완료
            </Button>
          </Div>

          <Div
            alignItems="left"
            flexDirection=" column-reverse"
            justifyContent="space-between"
            width="100%"
            height="68%"
          >
            <Div flexDirection="column">
              <Div fontSize="32px" margin=".5% 0 0 0">
                프로젝트 배너 이미지
              </Div>
              <Input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileSelect}
              />
              <Div alignItems="center">
                <FileInputButton onClick={handleButtonClick}>
                  +파일 업로드
                </FileInputButton>
                {selectedFile && (
                  <SelectedFileName>{selectedFile.name}</SelectedFileName>
                )}
              </Div>
            </Div>
            <Div flexDirection="column">
              <Label fontSize="32px">프로젝트 설명</Label>
              <CustomInput
                type="text"
                height="10vh"
                value={desc}
                onChange={onChangeIntroduce}
              />
            </Div>
            <Div flexDirection="column">
              <Label fontSize="32px">프로젝트 이름</Label>
              <CustomInput
                type="text"
                height="5vh"
                value={title}
                onChange={onChangeTitle}
              />
            </Div>
          </Div>
        </Div>
      </Modal>
    </>
  );
};

export default WorkspaceList;

const FileInputButton = styled.button`
  height: 3vh;
  width: auto;
  font-size: 24px;
  background-color: #d9d9d9;
  align-items: center;
  border-radius: 24px;
  margin-top: 0.5%;
  border: none;
`;

const SelectedFileName = styled.span`
  font-size: 24px;
  margin-left: 10px;
`;

const CustomInput = styled(Input)`
  width: 100%;
  background-color: #d9d9d9;
  margin: 0.5% 0 0 0;
  font-size: 32px;
`;
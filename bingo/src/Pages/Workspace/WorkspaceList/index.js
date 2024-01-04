import { useState, React, useRef, useEffect } from "react";
import styled from "styled-components";
import { Div } from "../../../Components/NormalComponents/Section.js";
import WorkspaceCard from "./Components/WorkspaceCard.js";
import { Button, Input } from "../../../Components/NormalComponents/Form.js";
import { Img } from "../../../Components/NormalComponents/Etc.js";
import Modal from "react-modal";
import { Label } from "../../../Components/NormalComponents/Text.js";
import Add from "../../../assets/Img/WorkspaceList/add.png";
import "../../../font.css";
import { WorkspaceData, loginUserState } from "../../../Contexts/Atom.js";
import { useRecoilState } from "recoil";
import { getAllProjects } from "../../../Api/Workspace.js";
import { useNavigate } from "react-router";
import { createWorkspace, handleUpload } from "../../../Api/Workspace.js";
import axios from "axios";
import WorkspaceBanner from "../../../assets/Img/WorkspaceList/Workspace_Banner.png";
import { useRecoilValue } from "recoil";

const TextDescDiv = styled.div`
    color: #9c9c9c;
    height: 3%;
    font-size: 16px;
    width: auto;
    align-items: center;
    margin: 5% 0 0 0;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
    font-family: "140";
`;
const TextTitleDiv = styled.div`
    width: auto;
    border-radius: 15px;
    align-items: center;
    color: #6a6a6a;
    font-family: "140";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
`;
const CreateTextDiv = styled(Div)`
    font-family: "160";
`;
const WorkspaceList = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const keepUserId = useRecoilValue(loginUserState);
    const keepuserId = keepUserId.appUser.id;
    console.log("KUID", keepuserId);

    const [userInfo, setUserInfo] = useRecoilState(loginUserState);
    const [titleEmpty, setTitleEmpty] = useState(false);
    const [descEmpty, setDescEmpty] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [workspaceData, setWorkspaceData] = useRecoilState(WorkspaceData);
    const [isCreate, setisCreate] = useState(false);

    // 페이지 새로고침 함수 정의
    const refreshPage = () => {
        window.location.reload();
    };

    // 워크스페이스 생성 후 페이지 새로고침
    useEffect(() => {
        if (isCreate) {
            refreshPage();
        }
    }, [isCreate]);

    const openModal = () => {
        setModalIsOpen(true);
        // Modal이 열릴 때 상태 초기화
        setTitle("");
        setDesc("");
        setSelectedFile(null);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const generateRandomValue = () => {
        const characters =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomValue = "";
        const length = 8; // 8자리 난수 생성

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomValue += characters.charAt(randomIndex);
        }
        console.log(randomValue);

        return randomValue;
    };

    // 난수생성 버튼 클릭 시 동작
    const onButtonClick = async () => {
        const randomCode = generateRandomValue();
        console.log(randomCode);
        setModalIsOpen(false);
        setTitleEmpty(false);
        setDescEmpty(false);

        // 새로운 워크스페이스 데이터 생성
        const newWorkspace = {
            name: title,
            desc: desc,
            picture: file ? file.name : "default_image.jpg", // 이미지 파일명 저장 (선택된 파일이 없으면 디폴트 이미지 파일명),
            code: randomCode,
            userId: userInfo.appUser.id,
        };
        console.log("NEW", newWorkspace);
        setisCreate(true);

        // 이미지 업로드 처리
        if (file) {
            await handleUpload();
        }

        // 기존 WorkspaceData 배열에 새로운 워크스페이스 데이터 추가
        setWorkspaceData((prevData) => [...prevData, newWorkspace]);
    };

    const [title, setTitle] = useState("");
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const [desc, setDesc] = useState("");
    const onChangeIntroduce = (event) => {
        setDesc(event.target.value);
    };
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    // 워크스페이스 사진 추가
    const handleUpload = async () => {
        console.log("실행", file);
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch(`${process.env.REACT_APP_URL}upload`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const result = await response.text(); // 또는 response.url 등을 사용
                console.log("파일 업로드 성공:", result);
            } else {
                console.error("파일 업로드 실패:", response.statusText);
            }
        } catch (error) {
            console.error("파일 업로드 중 에러:", error);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.style.display = "block"; // 파일 선택창을 보이도록 변경
            fileInputRef.current.click();
            fileInputRef.current.style.display = "none"; // 다시 숨김으로 변경
        }
    };
    const [inviteModalIsOpen, setInviteModalIsOpen] = useState(false);
    const openInviteModal = () => {
        setInviteModalIsOpen(true);
    };
    const closeInviteModal = () => {
        setInviteModalIsOpen(false);
    };
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await getAllProjects(
                    {
                        userid: userInfo.appUser.id,
                    },
                    navigate
                );
                console.log("프로젝트 목록", projects);
                setWorkspaceData(projects);
            } catch (error) {
                // 에러 핸들링
                console.error("Error fetching projects:", error);
            }
        };

        if (userInfo.appUser.id) {
            fetchData();
            console.log(userInfo);
        }
    }, [userInfo.appUser.id, isCreate]);

    // useEffect(() => {     const fetchData = async () => {       try {
    // const projects = await getAllProjects(           {             userid:
    // userInfo.appUser.id,           },           navigate         );
    // console.log("프로젝트 목록", projects);         setWorkspaceData(projects);       }
    // catch (error) {          에러 핸들링         console.error("Error fetching
    // projects:", error);       }     };     fetchData();
    // console.log(userInfo.appUser.id);   }, [isCreate, userInfo.appUser.id]);
    // userInfo.appUser.id도 의존성에 추가

    return (
        <Div
            display="flex"
            flexDirection="column"
            height="100%"
            width="100%"
            overflow="hidden"
            justifyContent="center"
            alignContent="center"
        >
            <BannerImg src={WorkspaceBanner} />{" "}
            {/*프로젝트 카드들의 나열, 해당 공간의 이름을 감싼 Div */}
            <Div
                flexDirection="column"
                height="58.9vh"
                width="100vw"
                backgroundColor="#F9F9F9"
                display="flex"
                alignContent="center"
                justifyContent="center"
                margin="0 auto"
                padding="3.2vh 0 0 0"
                boxSizing="border-box"
            >
                {/* 프로젝트 리스트 + 초대 모달창 버튼이 들어갈 div */}

                <InnerHeader>
                    <div>
                        <TextTitleDiv>프로젝트 리스트</TextTitleDiv>
                        <TextDescDiv>
                            프로젝트를 생성하여 우리만의 솔직한 회고를 진행해
                            보세요!
                        </TextDescDiv>
                    </div>

                    <CodeBtn onClick={openInviteModal}>
                        초대 코드 입력하기
                    </CodeBtn>
                </InnerHeader>

                {/* 워크스페이스 카드 부분 */}
                <Div
                    display="flex"
                    justifyContent="start"
                    flexDirection="row"
                    alignItems="top"
                    height="96%"
                    width="75vw"
                    flexWrap="wrap"
                    overflow="auto"
                    boxSizing="border-box"
                    margin="0 auto"
                >
                    {/* 워크스페이스 생성버튼 */}
                    <Div
                        margin="2vh 0 0 0"
                        flexDirection="column"
                        border="1px solid transparent"
                        borderRadius="32px"
                        width="24vw"
                        height="21vh"
                        backgroundColor="#EDEDED"
                        onClick={openModal}
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        fontSize="20px"
                    >
                        <Img width="4vh" height="4vh" src={Add} />
                        <CreateTextDiv
                            style={{ marginTop: "1vh", color: "#B3b3b3" }}
                        >
                            프로젝트 생성
                        </CreateTextDiv>
                    </Div>
                    {/* 현재는 더미값이지만 장기적으로는 워크스페이스 데이터 기반으로 카드 출력  */}
                    {/* {console.log("워크스페이스 정보 : ", workspaceData)} */}
                    {workspaceData.length > 1 &&
                        workspaceData
                            .slice()
                            .reverse()
                            .map((workspace, index) => (
                                <WorkspaceCard
                                    number={index}
                                    workspaceId={workspace.id}
                                    name={workspace.name}
                                    desc={workspace.description}
                                    picture={workspace.picture}
                                    code={workspace.code}
                                    period={workspace.period}
                                    total={workspaceData.length}
                                />
                            ))}
                </Div>
            </Div>
            {/* (모달) 모달창 전체 */}
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
                        width: "49vw",
                        height: "59vh",
                        border: "none",
                        //alignItems: "center",
                        overflowY: "hidden",
                        borderRadius: "42px",

                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",

                        //position: 'absolute',  absolute positioning
                        left: "50%", // center the modal horizontally
                        top: "50%", // center the modal vertically
                        transform: "translate(-50%, -50%)", // center the modal
                        // 모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을
                        // 담당합니다. 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                    },
                }}
            >
                {/* 모달 내용 */}

                {/* (모달) 취소버튼 */}
                <Div
                    width="90%"
                    height="100%"
                    display="flex"
                    flexDirection="column-reverse"
                    justifyContent="top"
                    alignItems="center"
                    boxSizing="border-box"
                    margin="0 auto"
                >
                    <Div
                        height="24%"
                        width="100%"
                        flexDirection="row"
                        justifyContent="right"
                        alignItems="center"
                    >
                        <ModalCancleBtn onClick={closeModal}>
                            취소
                        </ModalCancleBtn>

                        {/* (모달) 완료버튼 */}
                        <ModalCompleteBtn
                            onClick={() => {
                                if (!title.trim() && !desc.trim()) {
                                    alert("프로젝트 이름과 설명을 작성하세요");
                                    setTitleEmpty(true);
                                    setDescEmpty(true);
                                } else if (!title.trim()) {
                                    alert("프로젝트 이름을 작성하세요");
                                    setTitleEmpty(true);
                                } else if (!desc.trim()) {
                                    alert("프로젝트 설명을 작성하세요");
                                    setDescEmpty(true);
                                } else if (!file) {
                                    alert("프로젝트 사진을 넣으세요");
                                    setDescEmpty(true);
                                } else {
                                    onButtonClick(handleUpload);
                                }
                            }}
                        >
                            프로젝트 생성
                        </ModalCompleteBtn>
                    </Div>

                    {/* (모달) 프로젝트 배너 이미지 */}
                    <Div
                        alignItems="left"
                        flexDirection=" column-reverse"
                        justifyContent="space-between"
                        width="100%"
                        height="68%"
                        borderRadius="50%"
                    >
                        <Div flexDirection="column">
                            <ModalLabel>프로젝트 사진</ModalLabel>
                            <Input
                                type="file"
                                style={
                                    {
                                        // display: "",
                                    }
                                }
                                ref={fileInputRef}
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <Div alignItems="center">
                                <FileInputButton>
                                    {file ? (
                                        <>
                                            {" "}
                                            <FileInputText>
                                                {" "}
                                                {file.name}
                                            </FileInputText>{" "}
                                            <FileInputImg
                                                src="img\WorkspaceList\close.png"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setFile(null);
                                                }}
                                            />{" "}
                                        </>
                                    ) : (
                                        <>
                                            {" "}
                                            <FileInputImg src="img\WorkspaceList\arrow_upward.png" />{" "}
                                            <FileInputText>
                                                파일 업로드
                                            </FileInputText>
                                        </>
                                    )}
                                </FileInputButton>
                            </Div>
                        </Div>

                        {/* (모달) 프로젝트 설명 */}
                        <Div flexDirection="column">
                            <ModalLabel>
                                프로젝트 설명 (30자 이내로 작성해 주세요)
                            </ModalLabel>
                            <CustomInput
                                placeholder="우리팀은 그냥 최고지"
                                type="text"
                                height="6.5vh"
                                value={desc}
                                onChange={onChangeIntroduce}
                                style={
                                    descEmpty
                                        ? {
                                              border: "1px solid red",
                                          }
                                        : {}
                                }
                            />
                        </Div>

                        {/* (모달) 프로젝트 이름 */}
                        <ModalTitle>
                            <ModalLabel>프로젝트 이름</ModalLabel>
                            <CustomInput
                                placeholder="빙고"
                                type="text"
                                height="6.5vh"
                                value={title}
                                onChange={onChangeTitle}
                                style={
                                    titleEmpty
                                        ? {
                                              border: "1px solid red",
                                          }
                                        : {}
                                }
                            />
                        </ModalTitle>
                        <ModalHeader onClick={handleUpload}>
                            프로젝트 생성
                        </ModalHeader>
                    </Div>
                </Div>
            </Modal>
            <InviteModal
                inviteModalIsOpen={inviteModalIsOpen}
                closeInviteModal={closeInviteModal}
            />
        </Div>
    );
};

export default WorkspaceList;
const ModalCompleteBtn = styled(Button)`
    width: 20%;
    height: 33%;
    background-color: #ea4336;
    margin-right: 2.5%;
    color: #f9f9f9;
    border-radius: 40px;
    border: 1px solid #ea4336;
    font-size: 20px;
    font-family: "160";
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
`;
const ModalCancleBtn = styled(Button)`
    width: 20%;
    height: 33%;
    background-color: #f9f9f9;
    margin-right: 2.5%;
    color: #ea4336;
    border-radius: 40px;
    font-size: 20px;
    font-family: "160";
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
`;
const InnerHeader = styled.div`
    width: 75vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    /* border : 1px solid red; */
`;
const CodeBtn = styled.button`
    border-radius: 22.8px;
    border: 1.5px solid var(#222);
    background-color: white;
    color: #222;
    height: 3.2vh;
    width: 7.8vw;
    margin-top: 2vh;

    font-family: "140";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
    cursor: pointer;
`;

const ModalHeader = styled.div`
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
`;
const ModalTitle = styled.div`
    flex-direction: column;
`;
const ModalLabel = styled.label`
    color: rgba(34, 34, 34, 0.6);

    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;
const BannerImg = styled.img`
    height: 35vh;
    width: 100%;
    margin: 0 auto;
`;
const FileInputButton = styled.div`
    height: 4.8vh;
    width: auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 1.1vh 0.9vw;
    margin-top: 0.5%;
    border-radius: 40px;
    background-color: #f0f0f0;
    border: none;
`;
const FileInputImg = styled.img`
    width: 2.6vh;
    height: 2.6vh;
    margin: 0 0.1vw;
`;
const FileInputText = styled.div`
    color: rgba(var(--sec_grey, #222), 0.8);
    font-family: "140";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin: 0 0.1vw;
    line-height: 150%; /* 27px */
`;
const SelectedFileName = styled.span`
    font-size: 18px;
    margin-left: 10px;
`;
const CustomInput = styled(Input)`
    width: 43.4vw;
    background-color: #f0f0f0;
    margin: 0.5% 0 0 0;
    border-radius: 24px;
    padding: 1vh 1.4vw;
    color: #222;
    font-family: "140";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: -0.2px;

    &:focus {
        border: 2px solid var(--main_red, #ea4336);
        outline: none;
    }
`;
const StyleModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0,0.2)",
    },
    content: {
        padding: "2vh",
        color: "black",
        borderRadius: "40px",
        background: "var(--main_white, #F9F9F9)",
        backgroundSize: "cover",
        margin: "0",
        width: "27.8vw",
        height: "29.2vh",
        border: "none",
        zIndex: "2",
        display: "flex",
        flexDirection: "column",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)", // center the modal
    },
};

const InviteModal = (e) => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

    return (
        <Modal
            isOpen={e.inviteModalIsOpen}
            onRequestClose={e.closeInviteModal}
            style={StyleModal}
        >
            {/* 팀원 코드 section */}
            <Div
                justifyContent="space-around"
                alignItems="center"
                width="100%"
                height="100%"
                flexDirection="column"
            >
                <ModalInfo>초대 코드 입력하기</ModalInfo>
                <CodeDiv type="text" />
                <Div
                    width="25vw"
                    height="4.7vh"
                    display="flex"
                    flexDirection="row-reverse"
                >
                    <ButtonDiv
                        background="var(--main_red, #EA4336)"
                        color="#F9F9F9"
                        onClick={() => navigate("/workspaceView")}
                        // '/workspaceView'는 원하는 경로로 변경해주세요.
                    >
                        완료
                    </ButtonDiv>
                    <ButtonDiv
                        background="var(--main_white, #f9f9f9)"
                        color="var(--main_red, #ea4336)"
                        onClick={e.closeInviteModal}
                    >
                        닫기
                    </ButtonDiv>
                </Div>
            </Div>
        </Modal>
    );
};

const ModalInfo = styled.div`
    width: 25vw;
    height: 6.6vh;
    border: none;
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    margin-bottom: -0.5vh;
    margin-left: 1.5vw;
`;
const CodeDiv = styled.input`
    box-sizing: border-box;
    width: 23.6vw;
    height: 6.6vh;
    border-radius: 16px;
    background: #f0f0f0;
    display: flex;
    justify-content: space-between;

    color: rgba(34, 34, 34, 0.8);
    align-items: center;
    text-align: center;
    font-family: "160";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */

    &:focus {
        border: 2px solid var(--main_red, #ea4336);
        outline: none;
    }
`;

const ButtonDiv = styled.div`
    width: 4.7vw;
    height: 4.7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    border: 2px solid var(--main_red, #ea4336);
    background: ${(props) =>
        props.background ||
        "var(--main_white, #f9f9f9)"}; // background를 props로 받아오고, 값이 없을 경우 default로 var(--main_white, #f9f9f9)를 설정
    color: ${(props) =>
        props.color ||
        "var(--main_red, #ea4336)"}; // color를 props로 받아오고, 값이 없을 경우 default로 var(--main_red, #ea4336)를 설정
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin-right: 0.8vw;
    cursor: pointer;
`;

import {useState, React, useRef, useEffect} from "react";
import styled from "styled-components";
import {Div} from "../../../Components/NormalComponents/Section.js";
import WorkspaceCard from "./Components/WorkspaceCard.js";
import {Button, Input} from "../../../Components/NormalComponents/Form.js";
import {Img} from "../../../Components/NormalComponents/Etc.js";
import Modal from "react-modal";
import {Label} from "../../../Components/NormalComponents/Text.js";
import {WorkspaceData, loginUserState} from "../../../Contexts/Atom.js";
import {useRecoilState} from "recoil";
import {getAllProjects} from "../../../Api/Workspace.js";
import {useNavigate} from "react-router";

const WorkspaceList = () => {
    const [userInfo, setUserInfo] = useRecoilState(loginUserState);
    const [titleEmpty, setTitleEmpty] = useState(false);
    const [descEmpty, setDescEmpty] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [workspaceData, setWorkspaceData] = useRecoilState(WorkspaceData);
    const openModal = () => {
        setModalIsOpen(true);
        // Modal이 열릴 때 상태 초기화
        setTitle('');
        setDesc('');
        setSelectedFile(null);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const generateRandomValue = () => {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomValue = '';
        const length = 8; // 8자리 난수 생성

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomValue += characters.charAt(randomIndex);
        }
        console.log(randomValue);

        return randomValue;
    };

    // 난수생성 버튼 클릭 시 동작
    const onButtonClick = () => {
        const randomCode = generateRandomValue();
        console.log(randomCode);
        setModalIsOpen(false);
        setTitleEmpty(false);
        setDescEmpty(false);

        // 새로운 워크스페이스 데이터 생성
        const newWorkspace = {
            name: title,
            desc: desc,
            picture: selectedFile
                ? selectedFile.name
                : "", // 이미지 파일명 저장 (선택된 파일이 없으면 빈 문자열),
            code: randomCode
        };

        // 기존 WorkspaceData 배열에 새로운 워크스페이스 데이터 추가
        setWorkspaceData((prevData) => [
            ...prevData,
            newWorkspace
        ]);
    };
    const [title, setTitle] = useState('');
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const [desc, setDesc] = useState('');
    const onChangeIntroduce = (event) => {
        setDesc(event.target.value);
    };
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (event) => {
        const file = event
            .target
            .files[0];
        setSelectedFile(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current && fileInputRef
            .current
            .click();
    };

    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await getAllProjects({
                    userid: userInfo.appUser.id
                }, navigate);
                console.log(projects);
                setWorkspaceData(projects);
            } catch (error) {
                // 에러 핸들링
                console.error('Error fetching projects:', error);
            }
        };

        fetchData();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

    return (
        <Div
            display="flex"
            flexDirection="column"
            height="100%"
            width="100%"
            overflow="hidden"
            justifyContent="center"
            alignContent="center">
            <BannerImg src="/img/WorkspaceList/Workspace_Banner.png"/> {/*프로젝트 카드들의 나열, 해당 공간의 이름을 감싼 Div */}
            <Div
                flexDirection="column"
                height="54vh"
                width="100%"
                backgroundColor="#F9F9F9"
                display="flex"
                alignContent="center"
                justifyContent="center">
                <Div
                    margin="0 0 0 5%"
                    height="4%"
                    fontSize="20px"
                    width="auto"
                    borderRadius="15px"
                    alignItems="center">프로젝트 리스트</Div>
                {/* 워크스페이스 카드 부분 */}

                <Div
                    flexDirection="row"
                    alignContent="baseline"
                    alignItems="center"
                    height="96%"
                    width="100%"
                    flexWrap="wrap"
                    overflow="auto"
                    boxSizing="border-box"
                    padding=" 0 0 0 3%">
                    {/*디자이너 요청으로 워크스페이스 생성버튼 옮김 */}
                    <Div
                        flexDirection="column"
                        margin="2% 0 0 2%"
                        border="1px solid transparent"
                        borderRadius="15px"
                        width="30%"
                        height="50%"
                        backgroundColor="#EDEDED"
                        onClick={openModal}
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer">
                        <Img width="15%" height="auto" src="/Img/WorkspaceView/ph_plus-bold.png"/>
                        <div>프로젝트 생성</div>
                    </Div>
                    {/* 현재는 더미값이지만 장기적으로는 워크스페이스 데이터 기반으로 카드 출력  */}
                    {/* {console.log("워크스페이스 정보 : ", workspaceData)} */}
                    {
                        workspaceData.length > 1 && workspaceData
                            .slice()
                            .reverse()
                            .map((workspace, index) => (
                                <WorkspaceCard
                                    key={index}
                                    workspaceId={workspace.id}
                                    name={workspace.name}
                                    desc={workspace.description}
                                    picture={workspace.picture}
                                    code={workspace.code}
                                    period={workspace.period}/>

                            ))
                    }
                </Div>
            </Div>

            {/* 모달창 출력 부분 */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0,0.5)"
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

                        //position: 'absolute',  absolute positioning
                        left: "50%", // center the modal horizontally
                        top: "50%", // center the modal vertically
                        transform: "translate(-50%, -50%)", // center the modal
                        // 모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을
                        // 담당합니다. 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                    }
                }}>
                {/* 모달 내용 */}
                <Div
                    width="93%"
                    height="100%"
                    flexDirection="column-reverse"
                    justifyContent="top"
                    alignItems="center"
                    padding="0 3.5% 0 3.5%">
                    <Div
                        height="24%"
                        width="100%"
                        flexDirection="row"
                        justifyContent="right"
                        alignItems="center">
                        <Button
                            width="11%"
                            height="33%"
                            backgroundColor="#D9D9D9"
                            margin=" 0 3.5% 0 0"
                            color="black"
                            borderRadius="10px"
                            fontSize="28px"
                            onClick={closeModal}>취소</Button>
                        <Button
                            width="11%"
                            height="33%"
                            backgroundColor="#D9D9D9"
                            margin=" 0 3.5% 0 0"
                            color="black"
                            borderRadius="10px"
                            fontSize="28px"
                            onClick={() => {
                                if (!title.trim() && !desc.trim()) {
                                    alert('프로젝트 이름과 설명을 작성하세요');
                                    setTitleEmpty(true);
                                    setDescEmpty(true);
                                } else if (!title.trim()) {
                                    alert('프로젝트 이름을 작성하세요');
                                    setTitleEmpty(true);
                                } else if (!desc.trim()) {
                                    alert('프로젝트 설명을 작성하세요');
                                    setDescEmpty(true);
                                } else {
                                    onButtonClick();
                                }
                            }}>완료</Button>
                    </Div>

                    <Div
                        alignItems="left"
                        flexDirection=" column-reverse"
                        justifyContent="space-between"
                        width="100%"
                        height="68%">
                        <Div flexDirection="column">
                            <Div fontSize="32px" margin=".5% 0 0 0">프로젝트 배너 이미지</Div>
                            <Input
                                type="file"
                                style={{
                                    display: "none"
                                }}
                                ref={fileInputRef}
                                onChange={handleFileSelect}/>
                            <Div alignItems="center">
                                <FileInputButton onClick={handleButtonClick}>+파일 업로드</FileInputButton>
                                {selectedFile && (<SelectedFileName>{selectedFile.name}</SelectedFileName>)}
                            </Div>
                        </Div>
                        <Div flexDirection="column">
                            <Label fontSize="32px">프로젝트 설명</Label>
                            <CustomInput
                                type="text"
                                height="10vh"
                                value={desc}
                                onChange={onChangeIntroduce}
                                style={descEmpty
                                    ? {
                                        border: '1px solid red'
                                    }
                                    : {}}/>
                        </Div>
                        <Div flexDirection="column">
                            <Label fontSize="32px">프로젝트 이름</Label>
                            <CustomInput
                                type="text"
                                height="5vh"
                                value={title}
                                onChange={onChangeTitle}
                                style={titleEmpty
                                    ? {
                                        border: '1px solid red'
                                    }
                                    : {}}/>
                        </Div>
                    </Div>
                </Div>
            </Modal>
        </Div>

    )
}

export default WorkspaceList;

const BannerImg = styled.img `
    height : 38vh;
    width : auto;
`

const FileInputButton = styled.button `
    height: 3vh;
    width: auto;
    font-size: 24px;
    background-color: #D9D9D9;
    align-items: center;
    border-radius: 24px;
    margin-top: .5%;
    border: none;
`

const SelectedFileName = styled.span `
    font-size: 24px;
    margin-left: 10px;
`;

const CustomInput = styled(Input)`
    width: 100%;
    background-color: #D9D9D9; 
    margin: .5% 0 0 0;
    font-size: 32px;
`;
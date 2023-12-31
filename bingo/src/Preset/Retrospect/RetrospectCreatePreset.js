import { Button, Input } from "../../Components/NormalComponents/Form";
import { CenterDiv, Div } from "../../Components/NormalComponents/Section";
import { Label, P } from "../../Components/NormalComponents/Text";
import { useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import {
    UrlInfo,
    WorkspaceData,
    WorkspaceInfo,
    workspaceInfo,
} from "../../Contexts/Atom";
import { useRecoilState } from "recoil";
import * as RCP from "./RetrospectCreatePresetStyle";
import { postRetrospectCreated } from "../../Api/Retrospace";
import styled from "styled-components";

// Section1 영역
export const Section1 = (e) => {
    // 페이지 이동 관련
    const navigate = useNavigate();

    const handleNextButtonClick = () => {
        // navigate(`/RetrospectCreate#section2?userId=${userId}&workspaceId=${workspaceId}`, {
        navigate("/RetrospectCreate#section2", {
            state: {
                retrospectTitle: e.retrospectTitle,
                SelectedWays: e.SelectedWays || "",
            },
        });
    };

    const handleMyConfirm = () => {
        if (window.confirm("생성하시겠습니까?")) {
            alert("생성되었습니다.");
            navigate(`/WorkspaceView?workspaceId=${urlInfo.workspaceId}`);
        } else {
            alert("취소되었습니다.");
        }
    };

    // handleMyConfirm : 회고 생성 취소 버튼 클릭 시 실행되는 핸들러
    const handleMyCancleConfirm = () => {
        if (window.confirm("회고 생성을 취소하시겠습니까?")) {
            alert("취소되었습니다.");
            navigate(`/WorkspaceView?workspaceId=${urlInfo.workspaceId}`);
        }
    };

    //
    //
    //

    // 회고 별 높이 지정
    const [heightKPT, setHeightKPT] = useState("29vh");
    const [height4LS, setHeight4LS] = useState("29vh");
    const [height5F, setHeight5F] = useState("29vh");

    const propsKPT = useSpring({ height: heightKPT });
    const props4LS = useSpring({ height: height4LS });
    const props5F = useSpring({ height: height5F });

    const stylesKPT = useSpring({
        height: heightKPT,
        config: {
            tension: 210,
            friction: 20,
        },
    });
    const styles4LS = useSpring({
        height: height4LS,
        config: {
            tension: 210,
            friction: 20,
        },
    });
    const styles5F = useSpring({
        height: height5F,
        config: {
            tension: 210,
            friction: 20,
        },
    });

    //
    //
    //

    // Modal 관련
    const [modalCancleIsOpen, setModalCancleIsOpen] = useState(false); // Modal 창의 open 여부를 저장하는 변수
    const openModalCancle = () => {
        setModalCancleIsOpen(true);
    };
    const closeModalCancle = () => {
        setModalCancleIsOpen(false);
    };

    const [modalInvalidIsOpen, setModalInvalidIsOpen] = useState(false); // Modal 창의 open 여부를 저장하는 변수
    const openModalInvalid = () => {
        setModalInvalidIsOpen(true);
    };
    const closeModalInvalid = () => {
        setModalInvalidIsOpen(false);
    };

    //
    //
    //

    const [workspaceInfo, setWorkspaceInfo] = useRecoilState(WorkspaceInfo);
    const [urlInfo, setUrlInfo] = useRecoilState(UrlInfo);

    return (
        <Div id="section1" style={RCP.Section_Style}>
            <RCP.Header>
                <RCP.LeftHead>
                    <RCP.SpanCreate>회고 생성</RCP.SpanCreate>
                    <RCP.SpanTitle>
                        {workspaceInfo
                            ? workspaceInfo.name
                            : "프로젝트 이름이 없습니다."}
                    </RCP.SpanTitle>
                    <RCP.SpanDesc>
                        {workspaceInfo
                            ? workspaceInfo.description
                            : "프로젝트 설명이 없습니다."}
                    </RCP.SpanDesc>
                </RCP.LeftHead>
                <RCP.RightHead>
                    <RCP.EclipseDiv
                        style={{
                            marginRight: "0.8vw",
                            backgroundColor: "#ea4336",
                        }}
                    />
                    <RCP.EclipseDiv
                        style={{
                            marginRight: "1.8vw",
                            backgroundColor: "#e1e1e1",
                        }}
                    />
                    <StepButton
                        onClick={openModalCancle}
                        targetLabel="취소"
                        backgroundColor="#F9F9F9"
                        color="#EA4336"
                    />
                    <StepButton
                        targetPage={e.retrospectData.name ? "#section2" : null}
                        targetLabel="다음"
                        onClick={handleNextButtonClick}
                        backgroundColor={
                            e.retrospectData.name
                                ? "#EA4336"
                                : "rgba(234, 67, 54, 0.4)"
                        }
                        color="#F9F9F9"
                    />
                </RCP.RightHead>
            </RCP.Header>

            {/* Content Section */}
            <Div
                flexDirection="column"
                margin="0 auto"
                width="66vw"
                height="65%"
            >
                {/* 회고 타이틀 Section */}
                <Div flexDirection="column" width="100%" height="20%">
                    {/* Title */}
                    <RetroTitleDiv style={{ marginBottom: "1vh" }}>
                        회고 타이틀
                    </RetroTitleDiv>

                    {/* Input */}
                    <TitleInput
                        placeholder="1차 회고"
                        type="text"
                        value={e.retrospectData.name}
                        onChange={(k) => {
                            // 깊은 복사를 통해 새로운 객체 생성
                            const retrospectDataTemp = { ...e.retrospectData };
                            // console.log(retrospectDataTemp);
                            // 새로운 객체에 변경된 값을 할당
                            retrospectDataTemp.name = k.target.value;
                            // 상태 업데이트 시 새로운 객체를 사용
                            e.setRetrospectData(retrospectDataTemp);
                        }}
                    />
                </Div>

                {/* 템플릿 선택 Section */}
                <Div
                    flexDirection="column"
                    width="100%"
                    height="80%"
                    backgroundColor=""
                >
                    {/* Title */}
                    <Div height="6.5%" margin="1vh 0 0 0">
                        <RetroTitleDiv>템플릿 선택</RetroTitleDiv>
                    </Div>

                    {/* 템플릿 선택 */}
                    <Div
                        width="100%"
                        height="27.4vh"
                        display="flex"
                        justifyContent="space-between"
                    >
                        <animated.div
                            style={{
                                ...propsKPT,
                                ...RCP.menuStyle,
                                ...stylesKPT,
                                backgroundColor:
                                    e.retrospectData.templateType === "KPT" ||
                                    heightKPT === "43vh"
                                        ? "#222"
                                        : "#EFEFEF",
                            }}
                            onMouseEnter={() => setHeightKPT("43vh")}
                            onMouseLeave={() => setHeightKPT("29vh")}
                        >
                            <RadioCard
                                value="KPT"
                                label="KPT"
                                description={
                                    <>
                                        팀의 상황을 빠르게 돌아보고 <br />{" "}
                                        명확한 개선 방법을 찾길 원한다면 ?{" "}
                                    </>
                                }
                                selectedValue={e.retrospectData.templateType}
                                // onChange={e.handleRadioChange}
                                onChange={(k) => {
                                    // 깊은 복사를 통해 새로운 객체 생성
                                    const retrospectDataTemp = {
                                        ...e.retrospectData,
                                    };
                                    // 새로운 객체에 변경된 값을 할당
                                    retrospectDataTemp.templateType = "KPT";
                                    retrospectDataTemp.questionRequestList = [
                                        {
                                            templateId: null,
                                            mainQuestion: "Keep",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Problem",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Try",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                    ];

                                    // 상태 업데이트 시 새로운 객체를 사용
                                    e.setRetrospectData(retrospectDataTemp);
                                }}
                            />{" "}
                            {heightKPT === "43vh" && (
                                <RCP.DivKPTText>
                                    Keep(유지할 점) / Problem(개선할 점) /
                                    Try(시도할 점)
                                    <br />
                                    <br />
                                    단기 프로젝트의 회고를 진행하는 사람들에게
                                    추천해요!
                                </RCP.DivKPTText>
                            )}
                        </animated.div>
                        <animated.div
                            style={{
                                ...props4LS,
                                ...RCP.menuStyle,
                                ...styles4LS,
                                backgroundColor:
                                    e.retrospectData.templateType === "Ls4" ||
                                    height4LS === "45vh"
                                        ? "#222"
                                        : "#EFEFEF",
                            }}
                            onMouseEnter={() => setHeight4LS("45vh")}
                            onMouseLeave={() => setHeight4LS("29vh")}
                        >
                            <RadioCard
                                value="Ls4"
                                label="4L"
                                description={
                                    <>
                                        팀의 과정을 돌아보고 <br /> 목표를
                                        세우길 원한다면 ?{" "}
                                    </>
                                }
                                selectedValue={e.retrospectData.templateType}
                                // onChange={e.handleRadioChange}
                                onChange={(k) => {
                                    // 깊은 복사를 통해 새로운 객체 생성
                                    const retrospectDataTemp = {
                                        ...e.retrospectData,
                                    };
                                    // 새로운 객체에 변경된 값을 할당
                                    retrospectDataTemp.templateType = "Ls4";
                                    retrospectDataTemp.questionRequestList = [
                                        {
                                            templateId: null,
                                            mainQuestion: "Liked",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Learned",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Lacked",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Longed for",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                    ];

                                    // 상태 업데이트 시 새로운 객체를 사용
                                    e.setRetrospectData(retrospectDataTemp);
                                }}
                            />{" "}
                            {height4LS === "45vh" && (
                                <RCP.Div4LSText>
                                    Liked(좋았던 점) / Lacked(아쉬운 점) /
                                    Learned(배운 점) / Longed for (바라는 점)
                                    <br />
                                    <br />
                                    프로젝트의 중간 회고를 진행하는 사람들에게
                                    추천해요!
                                </RCP.Div4LSText>
                            )}
                        </animated.div>
                        <animated.div
                            style={{
                                ...props5F,
                                ...RCP.menuStyle,
                                ...styles5F,
                                backgroundColor:
                                    e.retrospectData.templateType === "F5" ||
                                    height5F === "45vh"
                                        ? "#222"
                                        : "#EFEFEF",
                            }}
                            onMouseEnter={() => setHeight5F("45vh")}
                            onMouseLeave={() => setHeight5F("29vh")}
                        >
                            <RadioCard
                                value="F5"
                                label="5F"
                                description={
                                    <>
                                        팀의 중요한 사건들을 <br /> 꼼꼼히
                                        돌아보길 원한다면 ?{" "}
                                    </>
                                }
                                selectedValue={e.retrospectData.templateType}
                                // onChange={e.handleRadioChange}
                                onChange={(k) => {
                                    // 깊은 복사를 통해 새로운 객체 생성
                                    const retrospectDataTemp = {
                                        ...e.retrospectData,
                                    };
                                    // 새로운 객체에 변경된 값을 할당
                                    retrospectDataTemp.templateType = "F5";
                                    retrospectDataTemp.questionRequestList = [
                                        {
                                            templateId: null,
                                            mainQuestion: "Feel",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Find",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Finish",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Future",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                        {
                                            templateId: null,
                                            mainQuestion: "Feedback",
                                            subQuestionRequest: {
                                                questionId: null,
                                                question: ["", null, null],
                                            },
                                        },
                                    ];

                                    // 상태 업데이트 시 새로운 객체를 사용
                                    e.setRetrospectData(retrospectDataTemp);
                                }}
                            />{" "}
                            {height5F === "45vh" && (
                                <RCP.Div5FText>
                                    Fact(사실) / Feeling(느낌) / Finding(교훈) /
                                    Future action(향후 행동) / Feedback(피드백)
                                    <br />
                                    <br />
                                    장기 프로젝트의 회고를 진행하는 사람들에게
                                    추천해요!
                                </RCP.Div5FText>
                            )}
                        </animated.div>
                    </Div>
                </Div>
            </Div>
            <CancleModal
                workspaceId={urlInfo.workspaceId}
                modalCancleIsOpen={modalCancleIsOpen}
                closeModalCancle={closeModalCancle}
            />
        </Div>
    );
};

const RetroTitleDiv = styled.div`
    color: rgba(34, 34, 34, 0.6);
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;
const TitleInput = styled(Input)`
    padding: 1.7vh 1.4vw 1.7vh 1.4vw;
    width: 100%;
    height: 6.5vh;
    border-radius: 24px;
    background-color: #ebebeb;
    color: #222;
    font-family: "140";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.2px;
    margin-bottom: 1.5vh;
`;
// Section2 영역
export const Section2 = (e) => {
    const [workspaceInfo, setWorkspaceInfo] = useRecoilState(WorkspaceInfo);
    const [urlInfo, setUrlInfo] = useRecoilState(UrlInfo);

    var InputCounts = 0;
    const navigate = useNavigate();
    const handleMakeThreeSection = (way, labels) => {
        InputCounts = 0;

        return (
            <Div flexDirection="column">
                {labels.map((label, index) => (
                    <Div
                        key={index}
                        flexDirection="column"
                        border="none"
                        backgroundColor="#F3F3F3"
                        width="100%"
                        height="47vh"
                        margin={index === 0 ? "0% 0px" : "2% 0px 0 0"}
                        boxSizing="border-box"
                        borderRadius="40px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        padding="1.2vw"
                    >
                        <WayDiv>{way}</WayDiv>
                        {/* Title */}
                        <Div width="66.3vw" height="8.3vh" alignItems="end">
                            <RetroCreaateInitialLabel
                                fontSize="60px"
                                color="rgb(234, 67, 52)"
                            >
                                {label[0]}
                            </RetroCreaateInitialLabel>
                            <RetroCreaateLabel
                                fontSize="20px"
                                color="rgba(234, 67, 52, 0.4)"
                                width="20%"
                                margin="0 0 0.4vh 0.2vw"
                            >
                                {label}
                            </RetroCreaateLabel>
                        </Div>
                        {/* 질문 모음 */}

                        <Div
                            flexDirection="column"
                            width="66.3vw"
                            height="22.4vh"
                            justifyContent="end"
                        >
                            {Array.from({ length: 3 }).map(
                                (_, contentIndex) => (
                                    InputCounts++,
                                    (
                                        <TitleInput
                                            type="text"
                                            placeholder={`세부 질문을 입력하세요.`}
                                            value={
                                                e.retrospectData
                                                    .questionRequestList[index]
                                                    .subQuestionRequest[
                                                    contentIndex
                                                ]
                                            }
                                            onChange={(f) => {
                                                const InputTempValue = {
                                                    ...e.retrospectData,
                                                };
                                                InputTempValue.questionRequestList[
                                                    index
                                                ].subQuestionRequest.question[
                                                    contentIndex
                                                ] = f.target.value;
                                                if (f.target.value != null) {
                                                    e.setRetrospectData(
                                                        InputTempValue
                                                    );
                                                }
                                            }}
                                        />
                                    )
                                )
                            )}
                        </Div>
                    </Div>
                ))}
            </Div>
        );
    };

    return (
        <Div id="section2" style={RCP.Section_Style}>
            {/* Content Section */}
            {/* {console.log(e.retrospectData)} */}

            <RCP.Header>
                <RCP.LeftHead>
                    <RCP.SpanCreate>회고 생성</RCP.SpanCreate>
                    <RCP.SpanTitle>
                        {workspaceInfo
                            ? workspaceInfo.name
                            : "프로젝트 이름이 없습니다."}
                    </RCP.SpanTitle>
                    <RCP.SpanDesc>
                        {workspaceInfo
                            ? workspaceInfo.description
                            : "프로젝트 설명이 없습니다."}
                    </RCP.SpanDesc>
                </RCP.LeftHead>
                <RCP.RightHead>
                    <RCP.EclipseDiv
                        style={{
                            marginRight: "0.8vw",
                            backgroundColor: "#e1e1e1",
                        }}
                    />
                    <RCP.EclipseDiv
                        style={{
                            marginRight: "1.8vw",
                            backgroundColor: "#ea4336",
                        }}
                    />
                    <StepButton
                        targetPage="#section1"
                        targetLabel="이전"
                        backgroundColor="#F9F9F9"
                        color="#EA4336"
                    />
                    <StepButton
                        onClick={(f) =>
                            postRetrospectCreated(e.retrospectData, navigate)
                        }
                        targetLabel="생성"
                        backgroundColor="#EA4336"
                        color="#F9F9F9"
                    />
                </RCP.RightHead>
            </RCP.Header>
            <Div width="100%" height="71.3vh" overflow="auto">
                <Div
                    flexDirection="column"
                    height="100%"
                    width="70.5%"
                    margin="0 auto"
                >
                    {e.retrospectData.templateType === "KPT" &&
                        handleMakeThreeSection(
                            "KPT",
                            ["Keep", "Problem", "Try"],
                            e.retrospectData,
                            e.setRetrospectData
                        )}
                    {e.retrospectData.templateType === "Ls4" &&
                        handleMakeThreeSection(
                            "Ls4",
                            ["Liked", "Learned", "Lacked", "Longed for"],
                            e.retrospectData,
                            e.setRetrospectData
                        )}
                    {e.retrospectData.templateType === "F5" &&
                        handleMakeThreeSection(
                            "F5",
                            ["Feel", "Find", "Finish", "Future", "Feedback"],
                            e.retrospectData,
                            e.setRetrospectData
                        )}
                </Div>
            </Div>
            {/* {console.log(InputCounts)}
            {emptyTagList = Array.from({ length: InputCounts }, () => "")}
            {console.log(emptyTagList)} */}
        </Div>
    );
};

// RadioCard : 라디오 버튼 Custom
const RadioCard = (e) => {
    return (
        <Div width="100%" height="27.5vh" borderRadius="16px">
            {/* hidden 처리 되는 Input::Radio 버튼 */}
            <input
                type="radio"
                name="fruits"
                value={e.value}
                checked={e.value === e.selectedValue}
                onChange={e.onChange}
                style={{
                    display: "none",
                }}
            />{" "}
            {/* show 처리 되는 부분 */}
            <Div
                width="100%"
                height="100%"
                cursor="pointer"
                borderRadius="16px"
                alignItems="center"
                flexDirection="column"
                backgroundColor="#FFFFFF"
                onClick={() => e.onChange(e.value)}
                padding="3.7vh 2.6vw"
                boxSizing="border-box"
                style={{
                    border:
                        e.selectedValue === e.value ? "2px solid #222" : "none",
                }}
            >
                {/* 템플릿 Title */}
                <CenterDiv>{e.label}</CenterDiv>
                <RCP.DotDiv>
                    <RCP.EclipseDiv
                        style={{
                            width: ".45vw",
                            height: ".45vw",
                        }}
                    />
                    <RCP.EclipseDiv
                        style={{
                            width: ".45vw",
                            height: ".45vw",
                        }}
                    />
                    <RCP.EclipseDiv
                        style={{
                            width: ".45vw",
                            height: ".45vw",
                        }}
                    />
                </RCP.DotDiv>
                {/* 템플릿 설명 */}
                <RadioDesc>{e.description}</RadioDesc>
            </Div>
        </Div>
    );
};
const WayDiv = styled(Div)`
    width: 66.3vw;
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    color: rgba(22, 22, 22, 0.3);
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
`;
const RetroCreaateInitialLabel = styled(Div)`
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 90px */
    letter-spacing: -0.6px;
`;
const RetroCreaateLabel = styled(Div)`
    color: rgba(234, 67, 52, 0.4);
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
    width: 20%;
    margin: 0 0 1.3vh 0.6vw;
`;
const RadioDesc = styled(Div)`
    width: 100%;
    height: 5vh;
    color: var(--sec_grey, #222);
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
`;

// handleMakeThreeSection : lable에 맞춰서 질문을 생성해주는 핸들러 handleMakeThreeSection 함수
// 수정

// StepButton: Next / Last 버튼 분리화
const StepButton = (e) => {
    return (
        <a href={e.targetPage}>
            <StepBtn
                onClick={e.onClick}
                backgroundColor={e.backgroundColor}
                color={e.color}
            >
                {e.targetLabel}
            </StepBtn>
        </a>
    );
};
const StepBtn = styled(Button)`
    width: 5.5vw;
    height: 5vh;
    border-radius: 40px;
    font-size: 18px;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0.8vw;
    border: 2px solid var(--main_red, #ea4336);
    font-family: "160";
`;
const StepButtonSkip = (e) => {
    return (
        <a href={e.targetPage}>
            <Button
                width="150px"
                height="50px"
                color="#BDBDBD"
                borderRadius="15px"
                fontSize="35px"
                fontWeight="bold"
                onClick={e.onClick}
                backgroundColor="rgba(255,255,255,0.3)"
            >
                {e.targetLabel}
            </Button>
        </a>
    );
};

const CancleModal = (e) => {
    return (
        <Modal
            isOpen={e.modalCancleIsOpen}
            onRequestClose={e.closeModalCancle}
            style={RCP.StyleModal}
        >
            <RCP.ModalLargest>
                <RCP.ModalTextDiv>정말 나가시겠어요?</RCP.ModalTextDiv>
                <RCP.ModalButtonDiv>
                    <RCP.ModalCloseButton onClick={e.closeModalCancle}>
                        취소
                    </RCP.ModalCloseButton>
                    <RCP.ModalExitButton
                        to={`/WorkspaceView?workspaceId=${e.workspaceId}`}
                    >
                        나가기
                    </RCP.ModalExitButton>
                </RCP.ModalButtonDiv>
            </RCP.ModalLargest>
        </Modal>
    );
};
// const NoQuestionSubmit = (q) => {
//     let NoQuestions;

//     if (e.SelectedWays === "KPT") {
//         const kptTitles = ["Keep", "Problem", "Try"];
//         NoQuestions = kptTitles.map((title) => ({
//             title,
//             content: [
//                 {
//                     dataQ: "자유롭게 남겨주세요.",
//                     dataA: ""
//                 }
//             ]
//         }));
//     } else if (e.SelectedWays === "4LS") {
//         const lsTitles = ["Liked", "Learned", "Lacked", "Longed for"];
//         NoQuestions = lsTitles.map((title) => ({
//             title,
//             content: [
//                 {
//                     dataQ: "자유롭게 남겨주세요.",
//                     dataA: ""
//                 }
//             ]
//         }));
//     } else if (e.SelectedWays === "5F") {
//         const fTitles = ["Feel", "Find", "Finish", "Future", "Feedback"];
//         NoQuestions = fTitles.map((title) => ({
//             title,
//             content: [
//                 {
//                     dataQ: "자유롭게 남겨주세요.",
//                     dataA: ""
//                 }
//             ]
//         }));
//     } else {
//         console.log("no selected");
//     }

//     e.setQuestions(NoQuestions);
//     console.log(e.questions);
//     e.onSubmitClick();
// };

import {useEffect, useState} from "react";
import {Div} from "../../Components/NormalComponents/Section";
import {useNavigate} from "react-router-dom";
import {Section1, Section2, Section3} from "../../Preset/Retrospect/RetrospectCreatePreset";
import {retrospectiveState} from "../../Contexts/Atom";
import {useRecoilState} from "recoil";

export default function RetrospectCreate() {

    // Recoil 상태 사용
    const [retrospective, setRetrospective] = useRecoilState(retrospectiveState);

    // retrospectTitle 업데이트
    const setRetrospectTitle = (newTitle) => {
        setRetrospective((prevRetrospective) => ({
            ...prevRetrospective,
            retrospectTitle: newTitle
        }));
    };

    // selectedWays 업데이트
    const setSelectedWays = (newWays) => {
        setRetrospective((prevRetrospective) => ({
            ...prevRetrospective,
            selectedWays: newWays
        }));
    };

    // questions 업데이트
    const setQuestions = (newQuestions) => {
        setRetrospective((prevRetrospective) => ({
            ...prevRetrospective,
            questions: newQuestions.map((question, index) => ({
                ...question,
                content: {
                    ...question.content,
                    dataQ: newQuestions[index]
                        ?.content
                            ?.dataQ || ''
                }
            }))
        }));
    };

    // 이동을 위한 navigate
    const navigate = useNavigate();

    // 핸들러 선언 handleMyConfirm : 라디오 버튼 변경 시 실행되는 핸들러
    const handleRadioChange = (value) => {
        setSelectedWays(value); // 선택된 value값으로 SelectedWays 변수값 지정
    };

    // 전체 정보 보여주는 핸들러
    const handleShowData = (e) => {
        alert(
            retrospective.questions[0].title + ", " + retrospective.questions[0].content.length
        );
    };

    // handleMyConfirm : 회고 생성 버튼 클릭 시 실행되는 핸들러
    const handleMyConfirm = () => {
        if (window.confirm("생성하시겠습니까?")) {
            alert("생성되었습니다.");
            navigate("/WorkspaceView");
        } else {
            alert("취소되었습니다.")
        }
    }

    // handleMyConfirm : 회고 생성 취소 버튼 클릭 시 실행되는 핸들러
    const handleMyCancleConfirm = () => {
        if (window.confirm("회고 생성을 취소하시겠습니까?")) {
            alert("취소되었습니다.");
            navigate("/WorkspaceView");
        }
    }

    return (
        <Div
            display="block"
            flexDirection="column"
            width="100%"
            height="100%"
            style={{
                overflow: "hidden"
            }}>

            {/* 타이틀 작성 및 템플릿 선택 */}
            <Section1
                // 선택한 템플릿 종류
                SelectedWays={retrospective.selectedWays}
                // 입력한 타이틀 이름
                retrospectTitle={retrospective.retrospectTitle}
                // 타이틀 이름 변경 핸들러
                setRetrospectiTitle={setRetrospectTitle}
                // 템플릿 변경 이벤트
                handleRadioChange={handleRadioChange}
                // 취소 이벤트
                onClick={handleMyCancleConfirm}/> {/*  */}

            {/* 질문 작성 */}
            <Section2
                // 선택한 템플릿 종류
                SelectedWays={retrospective.selectedWays}
                // 입력한 타이틀 이름
                retrospectTitle={retrospective.retrospectTitle}
                // 타이틀 이름 변경 핸들러
                setRetrospectTitle={setRetrospectTitle}
                // 입력한 질문 목록
                questions={retrospective.questions}
                // 질문 목록 변경 핸들러
                setQuestions={setQuestions}
                // 제출 이벤트
                onClick={handleMyConfirm}/>
        </Div>
    );
}

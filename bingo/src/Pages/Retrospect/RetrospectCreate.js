import {useState} from "react";
import {Div} from "../../Components/NormalComponents/Section";
import {useNavigate} from "react-router-dom";
import {Section1, Section2, Section3} from "../../Preset/Retrospect/RetrospectCreatePreset";

export default function RetrospectCreate() {
    // 변수 선언
    const [retrospectTitle, setRetrospectiTitle] = useState(''); // 회고 타이틀 저장 변수
    const [questions, setQuestions] = useState([]); // 질문 내용 저장 변수
    const [SelectedWays, setSelectedWays] = useState('KPT'); // 회고 방법 선택 변수 (radio)
    const navigate = useNavigate(); // 이동을 위한 navigate

    // 핸들러 선언 handleMyConfirm : 라디오 버튼 변경 시 실행되는 핸들러
    const handleRadioChange = (value) => {
        setSelectedWays(value); // 선택된 value값으로 SelectedWays 변수값 지정
        if (value === 'Custom') { // Custom이 아닌 경우 질문의 개수를 3개로 지정
            setQuestions(Array(3).fill('').map((_, index) => ({
                id: index + 1, // 질문 개수 증가
                question: '' // 질문 내용 초기화
            })));
        } else {
            setQuestions([]); // Custom인 경우 질문, 개수를 초기화
        }

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

    // handleAddQuestion : 질문 추가 버튼 클릭 시 실행되는 핸들러
    const handleAddQuestion = () => {
        const newQuestionId = questions.length + 1; // 새로 생성되는 값의 id 지정 (1 증가)
        setQuestions([
            ...questions, {
                id: newQuestionId,
                question: ''
            }
        ]);
    };

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
                SelectedWays={SelectedWays}
                handleRadioChange={handleRadioChange}
                retrospectTitle={retrospectTitle}
                setRetrospectiTitle={setRetrospectiTitle}
                onClick={handleMyCancleConfirm}/>

            {/* 질문 작성 */}
            <Section2
                SelectedWays={SelectedWays}
                handleAddQuestion={handleAddQuestion}
                questions={questions}
                setQuestions={setQuestions}
                onClick={handleMyConfirm}/>
        </Div>
    );
}

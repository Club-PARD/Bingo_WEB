import styled from "styled-components";
import {Button, Input} from "../../Components/NormalComponents/Form";
import {CenterDiv, Div} from "../../Components/NormalComponents/Section";
import {Label, P} from "../../Components/NormalComponents/Text";
import {useNavigate} from "react-router-dom";

// Section1 영역
export const Section1 = (e) => {
    return (
        <Div id="section1" style={Section_Style} backgroundColor="">
            {/* Content Section */}
            <Div flexDirection="column" height="90%" backgroundColor="">

                {/* 회고 타이틀 Section */}
                <Div
                    flexDirection="column"
                    margin="0px 0px 0px 0px"
                    height="20%"
                    backgroundColor="">
                    {/* Title */}
                    <P fontSize="30px">회고 타이틀</P>

                    {/* Input */}
                    <Input
                        style={InputStyle}
                        value={e.retrospectTitle}
                        onChange={(k) => e.setRetrospectiTitle(k.target.value)}></Input>
                </Div>

                {/* 템플릿 선택 Section */}
                <Div flexDirection="column" width="100%" backgroundColor="" height="80%">
                    {/* Title */}
                    <Div height="10%">
                        <P fontSize="30px">템플릿 선택</P>
                    </Div>

                    {/* 템플릿 선택 */}
                    <Div width="100%" height="90%">
                        <RadioCard
                            value='KPT'
                            label='KPT'
                            description={RetrospectDescription.W_KPT}
                            selectedValue={e.SelectedWays}
                            onChange={e.handleRadioChange}/>
                        <RadioCard
                            value='4LS'
                            label='4LS'
                            selectedValue={e.SelectedWays}
                            description={RetrospectDescription.W_4LS}
                            onChange={e.handleRadioChange}
                            margin="0px 20px"/>
                        <RadioCard
                            value='5F'
                            label='5F'
                            selectedValue={e.SelectedWays}
                            description={RetrospectDescription.W_5F}
                            onChange={e.handleRadioChange}/>
                    </Div>
                </Div>
            </Div>

            {/* 버튼 Section */}
            <Div flexDirection="column" height="10%" justifyContent="center">
                <Div justifyContent="end">
                    <Div width="320px" backgroundColor="" justifyContent="space-between">
                        <StepButton onClick={e.onClick} targetLabel="취소"/>

                        <StepButton targetPage="#section2" targetLabel="다음"/>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}

// Section2 영역
export const Section2 = (e) => {
    const handleInfoClick = () => {
        // 전체 내용을 콘솔에 출력 (JSON 형식)
        console.log(JSON.stringify(e, null, 2));
    };
    return (
        <Div id="section2" style={Section_Style}>
            {/* Content Section */}
            <Div width="100%" height="90%" backgroundColor = "">
                <Div
                    flexDirection="column"
                    height="100%"
                    width="100%"
                    style={{
                        overflow: "scroll",
                    }}>
                    {
                        e.SelectedWays === 'KPT' && handleMakeThreeSection('KPT', [
                            'Keep', 'Problem', 'Try'
                        ], e.questions, e.setQuestions)
                    }
                    {
                        e.SelectedWays === '4LS' && handleMakeThreeSection('4LS', [
                            'Liked', 'Learned', 'Lacked', 'Longed for'
                        ], e.questions, e.setQuestions)
                    }
                    {
                        e.SelectedWays === '5F' && handleMakeThreeSection('5F', [
                            'Feel', 'Find', 'Finish', 'Future', 'Feedback'
                        ], e.questions, e.setQuestions)
                    }

                </Div>
            </Div>

            {/* 버튼 Section */}
            <Div flexDirection="column" height="10%" justifyContent="center">
                <Div justifyContent="end">
                    <Button onClick={handleInfoClick}>정보 보기</Button>
                    <Div width="320px" backgroundColor="" justifyContent="space-between">
                        <StepButton targetPage="#section1" targetLabel="이전"/>

                        <StepButton onClick={e.onClick} targetLabel="생성"/>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}

// StepButton : Next / Last 버튼 분리화
const StepButton = (e) => {
    return (
        <a href={e.targetPage}>
            <Button
                width="150px"
                height="50px"
                borderRadius="15px"
                fontSize="35px"
                fontWeight="bold"
                onClick={e.onClick}
                backgroundColor="#BDBDBD">{e.targetLabel}</Button>
        </a>
    );
}

// Input 스타일 지정
const InputStyle = {
    type: "text",
    width: "100%",
    height: "70px",
    margin: "10px 0px",
    borderRadius: "20px",
    fontSize: "30px",
    backgroundColor: "gainsboro"
}

// 템플릿 설명 변수
const RetrospectDescription = ({
    W_KPT: 'KPT는 "Keep, Problem, Try"의 약자로, 팀이 프로젝트나 업무를 평가하고 개선하기 위해 유용한 간단한 피드백 프로세스를 제공' +
            '합니다. "Keep"은 유지할 가치 있는 것, "Problem"은 발생한 문제, "Try"는 개선을 시도할 방안을 나타냅니다.',
    W_4LS: '4LS는 "Liked, Learned, Lacked, Longed for"의 약자로, 경험 또는 이벤트에 대한 리뷰에 활용됩니다. "Like' +
            'd"는 긍정적인 경험, "Learned"는 얻은 교훈, "Lacked"는 부족한 부분, "Longed for"는 더 원하는 부분을 나타냅니다' +
            '.',
    W_5F: '5F 방법론: 5F는 "Feel, Find, Finish, Future, Feedback"의 약자로, 회고를 위한 다양한 측면을 제공합니다.' +
            ' "Feel"은 느낀 감정, "Find"는 발견한 사실, "Finish"는 완료된 작업, "Future"는 향후 계획, "Feedback"는' +
            ' 피드백을 나타냅니다.'
});

// RadioCard : 라디오 버튼 Custom
function RadioCard({
    value,
    label,
    selectedValue,
    onChange,
    margin,
    description
}) {
    return (
        <Div width="100%" margin={margin} height="100%">

            {/* hidden 처리 되는 Input::Radio 버튼 */}
            <input
                type='radio'
                name='fruits'
                value={value}
                checked={value === selectedValue}
                onChange={onChange}
                style={{
                    display: 'none'
                }}/> {/* show 처리 되는 부분 */}
            <Div width="100%" height="100%" cursor="pointer" borderRadius="15px" alignItems="center" flexDirection="column"
                // padding="20px"
                backgroundColor={value === selectedValue
                    ? 'black'
                    : 'gainsboro'} onClick={() => onChange(value)}>

                {/* 템플릿 Title */}
                <CenterDiv width="100%" height="40%" backgroundColor="">
                    <P
                        fontSize="70px"
                        fontWeight="bold"
                        color =
                        {value === selectedValue ? 'white' : 'black'}
                        style={{
                            transition: value === selectedValue ? "background-color 2s, color 2s" : ""
                        }}>{label}</P>
                </CenterDiv>

                {/* 템플릿 설명 */}
                <Div
                    width="100%"
                    height="60%"
                    color={value === selectedValue
                        ? 'white'
                        : 'black'}
                    backgroundColor=""
                    fontSize="25px"
                    style={{
                        textAlign: "center",
                        transition: value === selectedValue ? "background-color 2s, color 2s" : ""
                    }}>
                    <Div
                        width="100%"
                        height="auto"
                        margin="20px"
                        borderRadius="15px"
                        padding="20px"
                        backgroundColor="">{description}</Div>
                </Div>
            </Div>
        </Div>
    );
}

// handleMakeThreeSection : lable에 맞춰서 질문을 생성해주는 핸들러
// handleMakeThreeSection 함수 수정
const handleMakeThreeSection = (way, labels, questions, setQuestions) => (
    <Div flexDirection="column">
        {labels.map((label, index) => (
            <Div
                key={index}
                flexDirection="column"
                border="3px dashed gainsboro"
                width="100%"
                height="auto"
                margin={index === 0 ? "0% 0px" : "2% 0px"}
                padding="30px 30px"
                boxSizing="border-box"
                borderRadius="10px"
            >
                {/* Title */}
                <Div alignItems="flex-end">
                    <Label margin="0px 5px 0px 0px" fontSize="100px">{label[0]}</Label>
                    <Label margin="0px 0px 5px 0px" fontSize="40px" width="20%">{label}</Label>
                </Div>

                {/* 질문 모음 */}
                <Div flexDirection="column" height="auto" justifyContent="space-around">
                    {Array.from({ length: 3 }).map((_, contentIndex) => (
                        <Input
                            type="text"
                            placeholder={`질문 ${contentIndex + 1}을 입력해주세요.`}
                            style={InputStyle}
                            width="100%"
                            value={questions[index]?.content[contentIndex] || ''}
                            onChange={(e) => {
                                const updatedQuestions = [...questions];
                                updatedQuestions[index] = {
                                    id: index + 1,
                                    content: [...(updatedQuestions[index]?.content || [])],
                                };
                                updatedQuestions[index].content[contentIndex] = e.target.value;
                                setQuestions(updatedQuestions);
                            }}
                        />
                    ))}
                </Div>
            </Div>
        ))}
    </Div>
);


// Section 스타일
const Section_Style = {
    width: "90%",
    height: "100%",
    flexDirection: "column",
    margin: "0 auto",
}
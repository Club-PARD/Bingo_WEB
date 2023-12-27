import {Button, Input} from "../../Components/NormalComponents/Form";
import {CenterDiv, Div} from "../../Components/NormalComponents/Section";
import {Label, P} from "../../Components/NormalComponents/Text";
import {useNavigate} from "react-router-dom";

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
        <Div width="100%" margin={margin}>
            <input
                type='radio'
                name='fruits'
                value={value}
                checked={value === selectedValue}
                onChange={onChange}
                style={{
                    display: 'none'
                }}/>
            <Div
                width="100%"
                height="300px"
                cursor="pointer"
                borderRadius="15px"
                flexDirection="column"
                padding="20px"
                backgroundColor={value === selectedValue
                    ? 'yellow'
                    : 'white'}
                onClick={() => onChange(value)}>
                <CenterDiv width="100%" height="40%">
                    <P fontSize="40px" fontWeight="bold">{label}</P>
                </CenterDiv>
                <Div
                    justifyContent="center"
                    width="100%"
                    height="60%"
                    padding="5px"
                    borderRadius="15px"
                    color="white"
                    backgroundColor="gray"
                    style={{
                        textAlign: "center"
                    }}>
                    {description}
                </Div>
            </Div>
        </Div>
    );
}

// handleMakeThreeSection : lable에 맞춰서 질문을 생성해주는 핸들러
const handleMakeThreeSection = (way, labels, questions, setQuestions) => (
    <Div flexDirection="column">

        {
            labels.map((label, index) => (
                <Div
                    key={index}
                    flexDirection="column"
                    border="3px dashed gray"
                    width="100%"
                    margin="10px 0px"
                    padding="10px"
                    borderRadius="10px">
                    <Div alignItems="flex-end">
                        <Label margin="0px 5px 0px 0px" fontSize="40px">{label[0]}</Label>
                        <Label margin="0px 0px 3px 0px" width="20%">{label}</Label>
                    </Div>
                    <Div flexDirection="column" height="150px" justifyContent="space-around">
                        <Input
                            type="text"
                            placeholder="질문을 입력해주세요."
                            width="100%"
                            value={questions[index]
                                ?.question || ''}
                            onChange={(e) => {
                                const updatedQuestions = [...questions];
                                updatedQuestions[index] = {
                                    id: index + 1,
                                    question: e.target.value
                                };
                                setQuestions(updatedQuestions);
                            }}/>
                        <Input
                            type="text"
                            placeholder="질문을 입력해주세요."
                            width="100%"
                            value={questions[index]
                                ?.question || ''}
                            onChange={(e) => {
                                const updatedQuestions = [...questions];
                                updatedQuestions[index] = {
                                    id: index + 1,
                                    question: e.target.value
                                };
                                setQuestions(updatedQuestions);
                            }}/>
                        <Input
                            type="text"
                            placeholder="질문을 입력해주세요."
                            width="100%"
                            value={questions[index]
                                ?.question || ''}
                            onChange={(e) => {
                                const updatedQuestions = [...questions];
                                updatedQuestions[index] = {
                                    id: index + 1,
                                    question: e.target.value
                                };
                                setQuestions(updatedQuestions);
                            }}/>
                    </Div>

                </Div>
            ))
        }
    </Div>
);

// Section1 영역
const Section1 = (e) => {
    return (
        <Div
            id="section1"
            width="90%"
            height="100%"
            flexDirection="column"
            margin="0 auto">
            <Div flexDirection="column" height="90%">
                <Div flexDirection="column" margin="0px 0px 20px 0px">
                    <P>회고 타이틀</P>
                    <Input
                        type="text"
                        width="100%"
                        margin="10px 0px"
                        value={e.retrospectTitle}
                        onChange={(k) => e.setRetrospectiTitle(k.target.value)}></Input>
                </Div>

                <Div flexDirection="column" margin="0px 0px 20px 0px" width="100%">
                    <P>템플릿 선택</P>
                    <Div width="100%" margin="20px 0px">
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
            <Div flexDirection="column" height="10%" justifyContent = "center">
                <Div justifyContent="end">
                    <StepButton onClick={e.onClick} targetLabel="취소"/>

                    <StepButton targetPage="#section2" targetLabel="다음"/>
                </Div>
            </Div>
        </Div>
    );
}

// Section2 영역
const Section2 = (e) => {
    return (
        <Div
            id="section2"
            width="90%"
            height="100%"
            flexDirection="column"
            margin="0 auto">
            <Div width="100%" height="90%">
                <Div flexDirection="column" height="100%" width = "100%" style={{overflow : "scroll"}}>
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
            <Div flexDirection="column" height="10%" justifyContent = "center">
                <Div justifyContent="end">
                    <StepButton targetPage="#section1" targetLabel="이전"/>

                    <StepButton onClick= {e.onClick} targetLabel="생성"/>
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
                width="100px"
                height="40px"
                borderRadius="15px"
                fontSize="20px"
                fontWeight="bold"
                onClick={e.onClick}
                backgroundColor="#BDBDBD">{e.targetLabel}</Button>
        </a>
    );
}

export {
    RadioCard,
    Section1,
    Section2,
    StepButton
};
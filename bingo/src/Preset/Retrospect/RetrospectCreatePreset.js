import {Button, Input} from "../../Components/NormalComponents/Form";
import {Div} from "../../Components/NormalComponents/Section";
import {Label, P} from "../../Components/NormalComponents/Text";
import {useNavigate} from "react-router-dom";

// RadioCard : 라디오 버튼 Custom
function RadioCard({value, label, selectedValue, onChange}) {
    return (
        <Div>
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
                width="150px"
                height="100px"
                border="1px solid black"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                borderRadius="15px"
                margin="5px"
                backgroundColor={value === selectedValue
                    ? '#e0e0e0'
                    : 'white'}
                onClick={() => onChange(value)}>
                {label}
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
                    justifyContent="space-between"
                    alignItems="center"
                    border="1px solid black"
                    width="500px"
                    margin="10px 0px"
                    padding="10px"
                    borderRadius="10px">
                    <Label margin="0px 10px 0px 0px" width="20%">{label}</Label>
                    <Input
                        type="text"
                        placeholder="질문을 입력해주세요."
                        border="2px solid blue"
                        width="70%"
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
            ))
        }
    </Div>
);

// Section1 영역
const Section1 = (e) => {
    return (
        <Div
            id="section1"
            width="100vw"
            height="100vh"
            backgroundColor="#F7BE81"
            flexDirection="column">
            <h2>회고 생성 페이지입니다</h2>
            <Div flexDirection="column" margin="0px 0px 20px 0px">
                <P>[1] 회고 타이틀을 입력해주세요.</P>
                <Input
                    type="text"
                    margin="10px 0px"
                    value={e.retrospectTitle}
                    onChange={(k) => e.setRetrospectiTitle(k.target.value)}></Input>
            </Div>

            <Div flexDirection="column" margin="0px 0px 20px 0px">
                <P>[2] 사용하고 싶은 방법을 선택해주세요.</P>
                <Div>
                    <RadioCard
                        value='KPT'
                        label='KPT'
                        selectedValue={e.SelectedWays}
                        onChange={e.handleRadioChange}/>
                    <RadioCard
                        value='FFF'
                        label='FFF'
                        selectedValue={e.SelectedWays}
                        onChange={e.handleRadioChange}/>
                    <RadioCard
                        value='Custom'
                        label='Custom'
                        selectedValue={e.SelectedWays}
                        onChange={e.handleRadioChange}/>
                </Div>
            </Div>

            <Div margin="0px 0px 20px 0px">
                <P>선택된 방법:&nbsp;
                    <strong>{e.SelectedWays}</strong>
                </P>
            </Div>

            <Div>
                <StepButton targetPage="#section2" targetLabel="Next Step"/>
            </Div>
        </Div>
    );
}

// Section2 영역
const Section2 = (e) => {
    return (
        <Div
            id="section2"
            width="100vw"
            height="100vh"
            backgroundColor="#BCF5A9"
            flexDirection="column">
            <h2>회고 생성 페이지입니다</h2>
            <P>질문을 작성해주세요</P>
            <br/> {
                e.SelectedWays === 'KPT' && handleMakeThreeSection(
                    'KPT',
                    ['Keep', 'Problem', 'Try'], e.questions, e.setQuestions
                )
            }
            {
                e.SelectedWays === 'FFF' && handleMakeThreeSection(
                    'FFF',
                    ['Fact', 'Feeling', 'Feature Action']
                )
            }
            {
                e.SelectedWays === 'Custom' && (
                    <Div flexDirection="column">
                        <Div>
                            <a href="#section2">
                                <Button
                                    width="100px"
                                    height="40px"
                                    borderRadius="15px"
                                    fontSize="15px"
                                    backgroundColor="brown"
                                    onClick={e.handleAddQuestion}>질문 추가하기</Button>
                            </a>
                        </Div>
                        {
                            e
                                .questions
                                .map((q, index) => (
                                    <div key={q.id}>
                                        <Div
                                            justifyContent="space-between"
                                            alignItems="center"
                                            border="1px solid black"
                                            width="500px"
                                            margin="10px 0px"
                                            padding="10px"
                                            borderRadius="10px">
                                            <Label margin="0px 10px 0px 0px" width="20%">질문{index + 1}</Label>
                                            <Input
                                                type="text"
                                                placeholder="질문을 입력해주세요."
                                                border="2px solid blue"
                                                width="70%"
                                                value={q.question}
                                                onChange={(k) => {
                                                    e.setQuestions((prevQuestions) => {
                                                        const updatedQuestions = [...prevQuestions];
                                                        updatedQuestions[index].question = k.target.value;
                                                        return updatedQuestions;
                                                    });
                                                }}/>
                                        </Div>
                                    </div>
                                ))
                        }
                    </Div>
                )
            }
            <Div>
                <StepButton targetPage="#section1" targetLabel="Last Step"/>
                <StepButton targetPage="#section3" targetLabel="Next Step"/>

            </Div>
        </Div>
    );
}

// Section3 영역
const Section3 = (e) => {
    return (
        <Div
            id="section3"
            width="100vw"
            height="100vh"
            backgroundColor="#A9D0F5"
            flexDirection="column">
            <h2>회고 생성 페이지입니다</h2>
            <hr
                style={{
                    width: "100%",
                    border: "2px solid gray"
                }}/>
            <Div flexDirection="column">
                {/* 선택한 방법 보여주기 */}
                <P margin="5px 0px">선택한 방법: {e.SelectedWays}</P>
                <P margin="5px 0px">입력된 타이틀 : {e.retrospectTitle}</P>
                <hr
                    style={{
                        width: "100%",
                        border: "2px solid gray"
                    }}/> {/* 작성한 질문 보여주기 */}
                {
                    e
                        .questions
                        .map((q) => (
                            <div key={q.id}>
                                <P margin="5px 0px">질문 {q.id}: {q.question}</P>
                            </div>
                        ))
                }
            </Div>
            <Div>
                <StepButton targetPage="#section2" targetLabel="Last Step"/>
                <StepButton onClick={e.onClick} targetLabel="회고 생성하기"/>
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
                fontSize="15px"
                onClick={e.onClick}
                backgroundColor="#BDBDBD">{e.targetLabel}</Button>
        </a>
    );
}

export {
    RadioCard,
    Section1,
    Section2,
    Section3,
    StepButton
};
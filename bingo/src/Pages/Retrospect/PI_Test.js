import {useState} from "react";
import {Button, Fieldset, Input, Legend} from "../../Components/NormalComponents/Form";
import {Div} from "../../Components/NormalComponents/Section";
import {Label} from "../../Components/NormalComponents/Text";
import {KPT, FFF} from '../../Preset/RetrospectWaysPreset';

function RadioCard({value, label, selectedValue, onChange}) {
    return (
        <label>
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
        </label>
    );
}

function KPTQuestion() {
    return (
        <Div flexDirection="column">
            <Fieldset height="auto">
                <Legend>Keep</Legend>
                <Button width="100px" height="40px" borderRadius="15px" fontSize="15px">질문 추가하기</Button>
            </Fieldset>
            <Fieldset height="auto">
                <Legend>Problem</Legend>
                <Button width="100px" height="40px" borderRadius="15px" fontSize="15px">질문 추가하기</Button>
            </Fieldset>
            <Fieldset height="auto">
                <Legend>Try</Legend>
                <Button width="100px" height="40px" borderRadius="15px" fontSize="15px">질문 추가하기</Button>
            </Fieldset>
        </Div>
    );
}

function FFFQuestion() {
    return (
        <Div flexDirection="column">
            <Fieldset height="auto">
                <Legend>Fact</Legend>
                <Button width="100px" height="40px" borderRadius="15px" fontSize="15px">질문 추가하기</Button>
            </Fieldset>
            <Fieldset height="auto">
                <Legend>Feeling</Legend>
                <Button width="100px" height="40px" borderRadius="15px" fontSize="15px">질문 추가하기</Button>
            </Fieldset>
            <Fieldset height="auto">
                <Legend>Future Action</Legend>
                <Button width="100px" height="40px" borderRadius="15px" fontSize="15px">질문 추가하기</Button>
            </Fieldset>
        </Div>
    );
}
function RetrospectCreate() {

    // 질문을 모아놓는 변수
    const [questions1, setQuestions1] = useState([]);
    const [questions2, setQuestions2] = useState([]);
    const [questions3, setQuestions3] = useState([]);

    // 질문을 추가하는 변수
    const addQuestion1 = (type) => {
        // Adding a new question to the state with a specified type
        setQuestions1([
            ...questions1, {
                id: questions1.length + 1,
                type
            }
        ]);
    };
    const addQuestion2 = (type) => {
        // Adding a new question to the state with a specified type
        setQuestions2([
            ...questions2, {
                id: questions2.length + 1,
                type
            }
        ]);
    };
    const addQuestion3 = (type) => {
        // Adding a new question to the state with a specified type
        setQuestions1([
            ...questions3, {
                id: questions3.length + 1,
                type
            }
        ]);
    };

    const [selectedFruit, setSelectedFruit] = useState('Custom');
    const handleRadioChange = (value) => {
        // Handle the radio change logic here
        setSelectedFruit(value);
    };

    return (
        <Div flexDirection="column" padding="10px">
            <h2>회고 생성 페이지입니다</h2>
            <Div>
                <RadioCard
                    value='KPT'
                    label='KPT'
                    selectedValue={selectedFruit}
                    onChange={handleRadioChange}/>
                <RadioCard
                    value='FFF'
                    label='FFF'
                    selectedValue={selectedFruit}
                    onChange={handleRadioChange}/>
                <RadioCard
                    value='Custom'
                    label='Custom'
                    selectedValue={selectedFruit}
                    onChange={handleRadioChange}/>
            </Div>

            {/* 선택된 과일 출력 */}
            <Div marginTop="10px">
                선택된 과일: {selectedFruit}
            </Div>
            <KPTQuestion/> {/* <Div margin="0px 0px 10px 0px">
                <Button
                    width="100px"
                    height="40px"
                    borderRadius="15px"
                    fontSize="15px"
                    onClick={() => addQuestion('default')}>질문 추가하기</Button>
                <Button
                    width="100px"
                    height="40px"
                    borderRadius="15px"
                    fontSize="15px"
                    backgroundColor="pink"
                    onClick={() => addQuestion('KPT')}>KPT</Button>
                <Button
                    width="100px"
                    height="40px"
                    borderRadius="15px"
                    fontSize="15px"
                    backgroundColor="skyblue"
                    onClick={() => addQuestion('FFF')}>FFF</Button>
            </Div>
            {
                questions.map((question, index) => (
                    <div key={question.id}>
                        {
                            question.type === 'KPT'
                                ? (<KPT/>)
                                : question.type === "FFF"
                                    ? <FFF/>
                                    : (
                                        <Div
                                            // flexDirection="column"
                                            justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                                            <Label margin="0px 10px 0px 0px" width="20%">질문</Label>
                                            <Input
                                                type="text"
                                                placeholder="회고 제목을 입력해주세요."
                                                border="2px solid blue"
                                                width="70%"/>
                                        </Div>
                                    )
                        }
                    </div>
                ))
            } */
            }
            < Div >
                <Button width="100px" height="40px" borderRadius="15px" fontSize="15px">회고 생성하기</Button>
            </Div>

        </Div>

    );
}

export default RetrospectCreate;
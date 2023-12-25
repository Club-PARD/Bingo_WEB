import {useState} from "react";
import {Button, Fieldset, Input, Legend} from "../../Components/NormalComponents/Form";
import {Div} from "../../Components/NormalComponents/Section";
import {Label, P} from "../../Components/NormalComponents/Text";
import {KPT, FFF} from '../../Preset/RetrospectWaysPreset';
import {Link, useNavigate} from "react-router-dom";

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

function RetrospectCreate() {

    const [retrospectTitle, setRetrospectiTitle] = useState('');
    const [questions, setQuestions] = useState([]); // 질문 내용 저장 변수
    const [SelectedWays, setSelectedWays] = useState('Custom'); // 회고 방법 선택 변수 (radio)
    const navigate = useNavigate(); // 이동을 위한 navigate

    const handleRadioChange = (value) => {
        setSelectedWays(value);
        if (value === 'KPT' || value === 'FFF') {
            setQuestions(Array(3).fill('').map((_, index) => ({
                id: index + 1,
                question: ''
            })));
        } else {
            // Clear the questions array for other ways
            setQuestions([]);
        }

    };

    const MyConfirm = () => {

        if (window.confirm("생성하시겠습니까?")) {
            alert("생성되었습니다.");
            navigate("/RetrospectList");
        } else {
            alert("취소되었습니다.")
        }
    }
    const AddQuestion = () => {
        const newQuestionId = questions.length + 1;
        setQuestions([
            ...questions, {
                id: newQuestionId,
                question: ''
            }
        ]);
    };

    const renderQuestionSection = (way, labels) => (
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
    return (
        <Div flexDirection="column" height="auto">
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
                        value={retrospectTitle}
                        onChange={(e) => setRetrospectiTitle(e.target.value)}></Input>
                </Div>

                <Div flexDirection="column" margin="0px 0px 20px 0px">
                    <P>[2] 사용하고 싶은 방법을 선택해주세요.</P>
                    <Div>
                        <RadioCard
                            value='KPT'
                            label='KPT'
                            selectedValue={SelectedWays}
                            onChange={handleRadioChange}/>
                        <RadioCard
                            value='FFF'
                            label='FFF'
                            selectedValue={SelectedWays}
                            onChange={handleRadioChange}/>
                        <RadioCard
                            value='Custom'
                            label='Custom'
                            selectedValue={SelectedWays}
                            onChange={handleRadioChange}/>
                    </Div>
                </Div>

                <Div margin="0px 0px 20px 0px">
                    <P>선택된 방법:&nbsp;
                        <strong>{SelectedWays}</strong>
                    </P>
                </Div>

                <Div>
                    <a href="#section2">
                        <Button
                            width="100px"
                            height="40px"
                            borderRadius="15px"
                            fontSize="15px"
                            backgroundColor="#BDBDBD">Next Step</Button>
                    </a>
                </Div>
            </Div>

            {/*  */}
            {/*  */}
            {/*  */}

            <Div
                id="section2"
                width="100vw"
                height="100vh"
                backgroundColor="#BCF5A9"
                flexDirection="column">
                <h2>회고 생성 페이지입니다</h2>
                <P>질문을 작성해주세요</P>
                <br/> {
                    SelectedWays === 'KPT' && renderQuestionSection(
                        'KPT',
                        ['Keep', 'Problem', 'Try']
                    )
                }
                {
                    SelectedWays === 'FFF' && renderQuestionSection(
                        'FFF',
                        ['Fact', 'Feeling', 'Feature Action']
                    )
                }
                {
                    SelectedWays === 'Custom' && (
                        <Div flexDirection="column">
                            <Div>
                                <a href="#section2">
                                    <Button
                                        width="100px"
                                        height="40px"
                                        borderRadius="15px"
                                        fontSize="15px"
                                        backgroundColor="brown"
                                        onClick={AddQuestion}>질문 추가하기</Button>
                                </a>
                            </Div>
                            {
                                questions.map((q, index) => (
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
                                                onChange={(e) => {
                                                    setQuestions((prevQuestions) => {
                                                        const updatedQuestions = [...prevQuestions];
                                                        updatedQuestions[index].question = e.target.value;
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
                    <a href="#section1">
                        <Button
                            width="100px"
                            height="40px"
                            borderRadius="15px"
                            fontSize="15px"
                            backgroundColor="#BDBDBD">Last Step</Button>
                    </a>
                    <a href="#section3">
                        <Button
                            width="100px"
                            height="40px"
                            borderRadius="15px"
                            fontSize="15px"
                            backgroundColor="#BDBDBD">Next Step</Button>
                    </a>
                </Div>
            </Div>

            {/*  */}
            {/*  */}
            {/*  */}

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
                    <P margin="5px 0px">선택한 방법: {SelectedWays}</P>
                    <P margin="5px 0px">입력된 타이틀 : {retrospectTitle}</P>
                    <hr
                        style={{
                            width: "100%",
                            border: "2px solid gray"
                        }}/> {/* 작성한 질문 보여주기 */}
                    {
                        questions.map((q) => (
                            <div key={q.id}>
                                <P margin="5px 0px">질문 {q.id}: {q.question}</P>
                            </div>
                        ))
                    }
                </Div>
                <Div>
                    <a href="#section2">
                        <Button
                            width="100px"
                            height="40px"
                            borderRadius="15px"
                            fontSize="15px"
                            backgroundColor="#BDBDBD">Last Step</Button>
                    </a>
                    <Button
                        width="100px"
                        height="40px"
                        borderRadius="15px"
                        fontSize="15px"
                        backgroundColor="#BDBDBD"
                        onClick={MyConfirm}>회고 생성하기</Button>
                </Div>
            </Div>
        </Div>
    );
}

export default RetrospectCreate;
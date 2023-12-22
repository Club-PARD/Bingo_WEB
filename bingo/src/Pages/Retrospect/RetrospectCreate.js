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

    const [questions, setQuestions] = useState([]);
    const [SelectedWays, setSelectedWays] = useState('Custom');
    const navigate = useNavigate();

    const handleRadioChange = (value) => {
        setSelectedWays(value);
        // "Custom"이 아닌 경우에 questions를 빈 배열로 초기화
        if (value !== 'Custom') {
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
        setQuestions([
            ...questions, {
                id: questions.length + 1
            }
        ]);
    }

    return (
        <Div flexDirection="column" height="auto">
            <Div
                id="section1"
                width="100vw"
                height="100vh"
                backgroundColor="#F7BE81"
                flexDirection="column">
                <h2>회고 생성 페이지입니다</h2>
                <P>사용하고 싶은 방법을 선택해주세요.</P>
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

                <Div marginTop="10px">
                    선택된 방법: {SelectedWays}
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
                    SelectedWays === 'KPT' && <Div flexDirection="column">
                            <Div
                                // flexDirection="column"
                                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                                <Label margin="0px 10px 0px 0px" width="20%">Keep</Label>
                                <Input
                                    type="text"
                                    placeholder="회고 제목을 입력해주세요."
                                    border="2px solid blue"
                                    width="70%"/>
                            </Div>
                            <Div
                                // flexDirection="column"
                                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                                <Label margin="0px 10px 0px 0px" width="20%">Problem</Label>
                                <Input
                                    type="text"
                                    placeholder="회고 제목을 입력해주세요."
                                    border="2px solid blue"
                                    width="70%"/>
                            </Div>
                            <Div
                                // flexDirection="column"
                                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                                <Label margin="0px 10px 0px 0px" width="20%">Try</Label>
                                <Input
                                    type="text"
                                    placeholder="회고 제목을 입력해주세요."
                                    border="2px solid blue"
                                    width="70%"/>
                            </Div>
                        </Div>
                }
                {
                    SelectedWays === 'FFF' && <Div flexDirection="column">
                            <Div
                                // flexDirection="column"
                                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                                <Label margin="0px 10px 0px 0px" width="20%">Fact</Label>
                                <Input
                                    type="text"
                                    placeholder="회고 제목을 입력해주세요."
                                    border="2px solid blue"
                                    width="70%"/>
                            </Div>
                            <Div
                                // flexDirection="column"
                                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                                <Label margin="0px 10px 0px 0px" width="20%">Feeling</Label>
                                <Input
                                    type="text"
                                    placeholder="회고 제목을 입력해주세요."
                                    border="2px solid blue"
                                    width="70%"/>
                            </Div>
                            <Div
                                // flexDirection="column"
                                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                                <Label margin="0px 10px 0px 0px" width="20%">Feature Action</Label>
                                <Input
                                    type="text"
                                    placeholder="회고 제목을 입력해주세요."
                                    border="2px solid blue"
                                    width="70%"/>
                            </Div>
                        </Div>
                }
                {
                    SelectedWays === 'Custom' && <Div flexDirection="column">
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
                                questions.map((question, index) => (
                                    <div key={question.id}>
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

                                    </div>
                                ))
                            }
                        </Div>
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
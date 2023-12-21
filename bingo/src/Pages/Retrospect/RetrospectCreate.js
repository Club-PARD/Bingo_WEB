import {useState} from "react";
import {Button, Input} from "../../Components/NormalComponents/Form";
import {Div} from "../../Components/NormalComponents/Section";
import {Label} from "../../Components/NormalComponents/Text";
import {KPT, FFF} from '../../Preset/RetrospectWaysPreset';
function RetrospectCreate() {

    // 질문을 모아놓는 변수
    const [questions, setQuestions] = useState([]);

    // 질문을 추가하는 변수
    const addQuestion = (type) => {
        // Adding a new question to the state with a specified type
        setQuestions([
            ...questions, {
                id: questions.length + 1,
                type
            }
        ]);
    };

    return (
        <Div flexDirection="column" padding="10px">
            <h2>회고 생성 페이지입니다</h2>
            <Div margin="0px 0px 10px 0px">
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
            }

            <Div>
                <Button width="100px" height="40px" borderRadius="15px" fontSize="15px">회고 생성하기</Button>
            </Div>

        </Div>

    );
}

export default RetrospectCreate;

// <Div>                                     <Label margin="0px 10px 0px 0px"
// width="20%">질문 제목</Label>                                     <Input
// type="text"                                         placeholder="회고 제목을
// 입력해주세요."                                         border="2px solid blue"
// width="80%">                                     </Input> <Div />
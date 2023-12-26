import {useRecoilState} from "recoil";
import {contentState, countState, titleState} from "../../Contexts/Atom";
import {Div} from "../../Components/NormalComponents/Section";
import {Textarea} from "../../Components/NormalComponents/Form";
import axios from "axios";
import {useEffect, useState} from "react";

function PI_Test2() {

    const [title, setTitle] = useRecoilState(titleState);
    const [count, setCount] = useRecoilState(countState);

    const [content, setContent] = useRecoilState(contentState);

    const [postData, setPostData] = useState({title: '', content: '', test: 0});

    // 입력 필드의 변경에 따라 상태 업데이트
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setPostData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const postDataToServer = async () => {
        try {
            // 서버의 엔드포인트와 POST 메서드 사용
            const response = await axios.post(
                'http://172.17.188.80:8080/api/v1/test',
                postData
            );

            // 성공적으로 응답을 받았을 때 수행할 작업
            console.log('POST 요청 성공:', response.data);
        } catch (error) {
            // 요청이 실패했을 때 수행할 작업
            console.error('POST 요청 실패:', error);
        }
    }
    return (

        <Div flexDirection="column">
            <h1>입력된 타이틀 : {title}</h1>

            <h1>저장된 숫자 : {count}</h1>
            <h1>컨텐츠 : {content}</h1>
            {/* <Textarea boredr = "2px solid black" color = "black">{content}</Textarea> */}

            <Div
                flexDirection="column"
                width="500px"
                height="500px"
                backgroundColor="skyblue">
                <div>
                    {/* 입력 폼 */}
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={postData.title}
                        onChange={handleInputChange}/>
                    <br/>
                    <label>Content:</label>
                    <input
                        type="text"
                        name="content"
                        value={postData.content}
                        onChange={handleInputChange}/>
                    <br/> {/* 버튼을 클릭하면 POST 요청 보내기 */}
                    <label>Number</label>
                    <input
                        type="number"
                        name="test"
                        value={postData.test}
                        onChange={handleInputChange}/>
                    <br/>
                    <button onClick={postDataToServer}>데이터 전송</button>
                </div>

            </Div>
        </Div>
    );
}

export default PI_Test2;
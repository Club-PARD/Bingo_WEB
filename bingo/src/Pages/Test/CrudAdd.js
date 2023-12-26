import {useState} from "react";
import {Div} from "../../Components/NormalComponents/Section";
import axios from "axios";
import { useNavigate } from "react-router";

function CrudAdd() {
    const [postData, setPostData] = useState({title: '', content: '', test: 0});
    const navigate = useNavigate();

    // 입력 필드의 변경에 따라 상태 업데이트
    const handleInputChange = (event) => {
        const {name, value} = event.target;

        // 현재 상태를 복사한 후 변경된 필드만 업데이트
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
            alert("데이터가 추가되었습니다.");
            navigate("/CrudList");
            // 성공적으로 응답을 받았을 때 수행할 작업
            console.log('POST 요청 성공:', response.data);
        } catch (error) {
            // 요청이 실패했을 때 수행할 작업
            console.error('POST 요청 실패:', error);
        }
    }
    return (
        <Div flexDirection="column">
            <h1>CrudAdd 페이지</h1>

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

export default CrudAdd;
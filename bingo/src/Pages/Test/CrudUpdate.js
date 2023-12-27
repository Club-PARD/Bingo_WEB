import {Div} from "../../Components/NormalComponents/Section";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Input} from "../../Components/NormalComponents/Form";
import {useLocation, useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import {P} from "../../Components/NormalComponents/Text";

function CrudUpdate() {
    const [dataList, setDataList] = useState({title: '', content: '', test: ''});
    // useParams 훅을 사용하여 URL 파라미터(id) 값을 가져옴

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");

    const getData = async () => {
        try {
            const data = await axios.get(`http://172.18.157.205:8080/api/v1/test/${id}`);

            const {title, content, test} = data.data;
            setDataList({title, content, test});
            console.log("Get 성공입니다.");
        } catch (error) {
            console.error(error);
        }
    }

    // 입력 필드의 변경에 따라 상태 업데이트
    const handleInputChange = (event) => {
        const {name, value} = event.target;

        // 현재 상태를 복사한 후 변경된 필드만 업데이트
        setDataList((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    // 서버로 PATCH 요청을 보내어 데이터를 업데이트하는 함수
    const updateData = async (e) => {
        if (window.confirm("수정하시겠습니까?")) {
            e.preventDefault();
            try {
                const dataSet = {
                    title: dataList.title,
                    content: dataList.content,
                    test: dataList.test
                }
                // 서버의 엔드포인트와 PATCH 메서드 사용
                await axios
                    .patch(`http://172.18.157.205:8080/api/v1/test/${id}`, dataSet)
                    .then(Response => {
                        console.log("patch 성공", Response.data);
                    })
                    .catch(error => {
                        console.log("Patch 실패", error);
                    });
                navigate("/CrudList");
            } catch (error) {
                console.error(error);
            }
        } else {
            return false;
        }
    }

    // 컴포넌트가 처음 마운트될 때 한 번만 실행
    useEffect(() => {
        getData();
    }, [id]);
    return (
        <Div flexDirection="column">
            <h1>CrudUpdate 페이지</h1>
            <Div alignItems="center">
                타이틀 :
                <Input
                    type="text"
                    name="title"
                    value={dataList.title}
                    onChange={handleInputChange}
                    margin="5px"/>
            </Div>
            <Div alignItems="center">
                콘텐츠 :
                <Input
                    type="text"
                    name="content"
                    value={dataList.content}
                    onChange={handleInputChange}
                    margin="5px"/>
            </Div>
            <Div alignItems="center">
                숫자 :
                <Input
                    type="number"
                    name="test"
                    value={dataList.test}
                    onChange={handleInputChange}
                    margin="5px"/>
            </Div>
            <Button width="100px" height="50px" backgroundColor="gray" onClick={updateData}>수정하기</Button>
        </Div>
    );
}

export default CrudUpdate;
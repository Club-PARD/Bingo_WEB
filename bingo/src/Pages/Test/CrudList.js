import {useEffect, useState} from "react";
import {Div} from "../../Components/NormalComponents/Section";
import axios from "axios";
import {P} from "../../Components/NormalComponents/Text";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function CrudList() {
    // 서버에서 가져온 데이터를 저장할 상태
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 서버에서 데이터를 가져오는 요청
                const response = await axios.get("http://172.18.157.205:8080/api/v1/test");

                // 응답에서 데이터 추출
                const fetchedData = response.data;

                // 상태 업데이트
                setDataList(fetchedData);
            } catch (error) {
                console.error('데이터 가져오기 실패:', error);
            }
        };

        // 데이터 가져오기 함수 호출
        fetchData();
    }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

    return (
        <Div flexDirection="column">
            <h1>CrudList 페이지</h1>
            <Div style={{
                    flexWrap: "wrap"
                }}>
                {/* dataList.map을 사용하여 리스트 아이템 렌더링 */}
                {
                    dataList.map(data => (
                        <Link key={data.id} to={`/CrudView?id=${data.id}`}>
                            <Div
                                flexDirection="column"
                                width="250px"
                                height="100px"
                                backgroundColor="skyblue"
                                margin="10px"
                                justifyContent="center"
                                padding="5px">
                                <P>타이틀 :
                                    <span>{data.title}</span>
                                </P>
                                <P>컨텐츠 :
                                    <span>{data.content}</span>
                                </P>
                                <P>숫자 :
                                    <span>{data.test}</span>
                                </P>
                            </Div>
                        </Link>
                    ))
                }
            </Div>
            <Link to = "/CrudAdd"><Button>유저 등록하기</Button></Link>
        </Div>
    );
}

export default CrudList;
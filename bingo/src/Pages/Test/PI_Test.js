import {Div} from "../../Components/NormalComponents/Section";
import React, {useEffect} from 'react';
import {countState, titleState, contentState} from '../../Contexts/Atom';
import {useRecoilState, useSetRecoilState, useResetRecoilState} from 'recoil';
import {Link, useNavigate} from "react-router-dom";
import {Button} from '../../Components/NormalComponents/Form';
import axios from "axios";

function PI_Test() {
    // Recoil state를 통해 상태를 관리
    const [count, setCount] = useRecoilState(countState);
    const [title, setTitle] = useRecoilState(titleState);
    const [content, setContent] = useRecoilState(contentState);
    const counterHandler = useSetRecoilState(countState);
    const resetCounter = useResetRecoilState(countState);

    // 숫자를 증가시키는 함수
    const plusCount = (e) => {
        e.preventDefault();
        counterHandler((pre) => pre + 1);
    };

    // 숫자를 감소시키는 함수
    const minusCount = (e) => {
        e.preventDefault();
        counterHandler((pre) => pre - 1);
    };

    // 리셋 버튼을 눌렀을 때
    const handleReset = (e) => {
        e.preventDefault();
        resetCounter();
    };

    // 입력 필드의 변경에 따라 타이틀을 업데이트하는 함수
    const handleInputChange = (event) => {
        setTitle(event.target.value);
    };

    // 내용 입력 필드의 변경에 따라 컨텐츠를 업데이트하는 함수
    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const getData = async () => {
        try {
            const data = await axios.get("http://172.17.188.80:8080/api/v1/test/2");
            setContent(data.data.content);
            setTitle(data.data.title);
            setCount(data.data.test);
            console.log("Get 성공입니다.");
        } catch (error) {
            console.error(error);
        }
    }

    const navigate = useNavigate();

    // 서버로 PATCH 요청을 보내어 데이터를 업데이트하는 함수
    const updateData = async (e) => {
        e.preventDefault();
        try {
            const dataSet = {
                title: title,
                content: content,
                test: count
            }
            // 서버의 엔드포인트와 PATCH 메서드 사용
            await axios
                .patch("http://172.17.188.80:8080/api/v1/test/2", dataSet)
                .then(Response => {
                    console.log("patch 성공", Response.data);
                })
                .catch(error => {
                    console.log("Patch 실패", error);
                });
            navigate("/PI2");
        } catch (error) {
            console.error(error);
        }
    }

    // 컴포넌트가 처음 마운트될 때 한 번만 실행
    useEffect(() => {
        getData();
    }, []);

    return (
        <Div flexDirection="column">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    updateData(e);
                }}>
                <div>
                    {/* 현재 숫자 표시 */}
                    <div>{count}</div>
                    {/* 숫자 증가, 감소, 리셋 버튼 */}
                    <button onClick={plusCount}>+</button>
                    <button onClick={minusCount}>-</button>
                    <button onClick={handleReset}>reset</button>
                    <br/>
                    <br/> {/* 타이틀 입력 필드 */}
                    <label>타이틀 :</label>
                    <input type="text" value={title} onChange={handleInputChange}></input>
                    <br/>
                    <label>컨텐츠 :</label>
                    <input type="text" value={content} onChange={handleContentChange}></input>
                </div>
                <br/> {/* 다른 페이지로 이동하는 링크 */}
                <Link to="/PI2">변경되었는지 보러 가기</Link>
                <br/>
                <Button
                    width="300px"
                    height="200px"
                    color="red"
                    backgroundColor="gray"
                    type="submit">수정하기</Button>
            </form>
        </Div>
    );
}

export default PI_Test;

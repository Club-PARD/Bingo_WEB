import { useRecoilState } from "recoil";
import { contentState, countState, titleState } from "../../Contexts/Atom";
import { Div } from "../../Components/NormalComponents/Section";
import { Textarea } from "../../Components/NormalComponents/Form";
import axios from "axios";
import { useEffect } from "react";

function PI_Test2() {

    const [title, setTitle] = useRecoilState(titleState);
    const [count, setCount] = useRecoilState(countState);

    const [content, setContent] = useRecoilState(contentState);

    const getData = async () => {
        try {
            const data = await axios.get("http://172.18.157.205:8080/api/v1/auth/test");
            setContent(data.data.content);
            setTitle(data.data.title);
            setCount(data.data.test);
            console.log("성공입니다.");
        } catch (error) {
            console.log.apply(error);
        }
    }

    useEffect(() => {
        getData();
    }, [title, count, content]);
    return (
        <Div flexDirection = "column">
            <h1>입력된 타이틀 : {title}</h1>
            
            <h1>저장된 숫자 : {count}</h1>
            <h1>컨텐츠 : {content}</h1>
            {/* <Textarea boredr = "2px solid black" color = "black">{content}</Textarea> */}
        </Div>
    );
}

export default PI_Test2;
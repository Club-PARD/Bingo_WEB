import { useRecoilState } from "recoil";
import { countState, titleState } from "../../Contexts/Atom";
import { Div } from "../../Components/NormalComponents/Section";

function PI_Test2() {

    const [title, setTitle] = useRecoilState(titleState);
    const [count, setCount] = useRecoilState(countState);
    return (
        <Div flexDirection = "column">
            <h1>입력된 타이틀 : {title}</h1>
            
            <h1>저장된 숫자 : {count}</h1>
        </Div>
    );
}

export default PI_Test2;
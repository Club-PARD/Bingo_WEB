import {Div} from "../../Components/NormalComponents/Section";
import React from 'react';
import {countState, titleState} from '../../Contexts/Atom';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import {Link} from "react-router-dom";

function PI_Test() {
    // useState와 같지만, useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
    const [counter, setCounter] = useRecoilState(countState);
    const [title, setTitle] = useRecoilState(titleState);

    // const currentCount = useRecoilValue(countState);  읽기 전용!

    const counterHandler = useSetRecoilState(countState); // 값만 변경 시키기

    const resetCounter = useResetRecoilState(countState); // 디폴트값으로 값 변경

    const plusCount = () => {
        counterHandler((pre) => pre + 1);
    };
    const minusCount = () => {
        counterHandler((pre) => pre - 1);
    };
    const handleInputChange = (event) => {
        setTitle(event.target.value);
    };
    return (
        <Div flexDirection = "column">
            <div>
                {/* <div>{counter}</div> */}
                {/* counter 또는 currentCount 둘 중 하나를 사용해도 상관없는거 같다. */}
                <div>{counter}</div>
                {/* 그러나 읽기만 하려고 currentCount를 사용했다. */}
                {/* <button onClick={() => setCounter((num) => num + 1)}>+</button>
      <button onClick={() => setCounter((num) => num - 1)}>-</button> */
                }
                {/* 위의 코드도 작동한다. */}

                <button onClick={plusCount}>+</button>
                <button onClick={minusCount}>-</button>
                <button onClick={resetCounter}>reset</button>
                <br/>
                <br/>
                <label>텍스트 :
                </label>
                <input type="text" value={title} onChange={handleInputChange}></input>
            </div>
            <br/>
            <Link to = "/PI2">변경되었는지 보러 가기</Link>
        </Div>
    );
}

export default PI_Test;
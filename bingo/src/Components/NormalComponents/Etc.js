import styled from "styled-components";

export const Img = styled.img`
    width : ${props => props.width || ''};
    height : ${props => props.height || ''};
    border-radius: ${props => props.borderRadius || ''};
`;

// 이미지 사용 시 import 하는 방식이 아닌 아래와 같은 방식으로 require을 사용한다.
// <Img src={require("../assets/image/test.png") }/>
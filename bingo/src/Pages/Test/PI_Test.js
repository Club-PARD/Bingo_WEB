import styled from "styled-components";
import {Div} from "../../Components/NormalComponents/Section";
import React from 'react';

const Div_300_300 = styled(Div)`
    width: 300px;
    height : 300px;
    background-color: ${props => props.backgroundColor || ''};
`;
const PinkDiv = styled(Div_300_300)`
    background-color: pink;
`;


const Div_Center_Center = styled(PinkDiv)`
    justify-content: center;
    align-items: center;
`;
const Div_Center_top = styled(PinkDiv)`
    justify-content: center;
`

const Div_Center_bottom = styled(PinkDiv)`
    justify-content: center;
    align-items: end;
`
const Div_50_50 = styled(Div)`
    width: 50px;
    height: 50px;
`
function PI_Test() {
    return (
        <div>
            < Div >
                <Div width="300px" height="300px" backgroundColor="pink">안녕하세요</Div>
                <Div_50_50/>
                <PinkDiv></PinkDiv>
                <Div_50_50/>
                <Div_300_300 backgroundColor="skyblue"/>
            </Div>
            <br/>
            <Div>
                <Div_Center_Center>
                    <Div width="50px" height="50px" backgroundColor="red"/>
                </Div_Center_Center>
                <Div_50_50/>
                <Div_Center_top>
                    <Div_50_50 backgroundColor="red"/>
                </Div_Center_top>
                <Div_50_50/>
                <Div_Center_bottom backgroundColor = "black">
                    <Div_50_50 backgroundColor="red"/>
                </Div_Center_bottom>
            </Div>
        </div>
    );
}

export default PI_Test;
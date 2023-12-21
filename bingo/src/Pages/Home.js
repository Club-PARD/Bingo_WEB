import React from "react";
import styled from "styled-components";

const Div = styled.div `
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || "center"};
    flex-direction: ${props => props.flexDirection || "row"};
    align-items: ${props => props.alignItems || "center"};
    width : ${props => props.width || "100%"};
    height : ${props => props.height || "200px"};
    border : ${props => props.border || "1px solid black"};
    box-sizing : ${props => props.boxSizing || "border-box"};
    background-color: ${props => props.backgroundColor || " black"};
    color: ${props => props.backgroundColor || " white"};
    padding : ${props => props.padding || "10px"};
    margin : ${props => props.margin || "0px"};
    position: ${props => props.position || ''};
    background-image: ${props => props.backgroundImage || ''};

`

const Home =()=> {
    return(
        <>
            <Div> 속보 : BINGO 롱커톤 1위 수상</Div>
        </>
    )
}

export default Home;
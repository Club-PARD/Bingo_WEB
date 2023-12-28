import React from "react";
import { Div } from "../../../Components/NormalComponents/Section";
import { Img } from "../../../Components/NormalComponents/Etc";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WorkspaceCard = ({ name, desc, picture, period }) => (
    <Div 
        flexDirection= "column"
        margin="1% 1% 1% 0"
        borderRadius= "15px"
        width= "23%"
        height= "37.4%"
        backgroundColor= "#EDEDED"
    >
        {/*project Card에서 이미지를 넣을 공간*/}
        <Link
            style={{textDecoration: 'none', height: '100%'}}
            to="/WorkspaceView"> 
        <Div
            width="100%"
            height="80%"
            flexDirection="column" 
            borderRadius="15px" 
            backgroundColor="#D9D9D9" 
        >
            <Img wisth="100%" height="100%" borderRadius="15px" src={picture}/>
        </Div>
        <Div
            height="20%"
            alignItems="center"
            fontSize="37px"
            textDecoration="none"
            color="black"
        >{name}</Div>
        </Link>
    </Div>
);

export default WorkspaceCard;

const WorkspaceCardWithLink = styled(Link)`
    flex-direction: column;
    margin:1% 1% 1% 0;
    border-radius: 15px;
    width: 23%;
    height: 37.4%;
    background-color: #EDEDED;
    text-decoration: none;
`
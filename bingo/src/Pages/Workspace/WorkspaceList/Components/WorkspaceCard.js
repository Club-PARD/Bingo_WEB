import { Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardLink = styled(Link)`
    height : 100%;
    text-decoration : none;
    display : flex;
    flex-direction : row;
    justify-content : center;
`
const CardBorder = styled.div`
    justify-content : center;
    align-items : center;
    margin : 1% 0 0 1%;
    border-radius : 32px;
    width : 30%;
    height : 50%;
    background-color : #F8F0EF;
    border : 1px solid transparent;
`
const ImgBox = styled.div`
    width : 45%;
    height : 100%;
    border : 1px solid red;
    display : flex;
    justify-content : center;
    align-items : center;
`
const TextBox = styled.div`
    width : 45%;
    height : 100%;
    border : 1px solid blue;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center
`
const TextSet = styled.div`
    width : 90%;
    height : 50%;
    border : 1px solid green;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const CardImg = styled.div`
    height : 50%;
    width : auto;
    margin : 15%;
    flex-direction : column;
    border-radius : 50%;
    background-color : #F8F0EF;
    border : 1px solid black;
`

const WorkspaceCard = ({ workspaceId, name, desc, picture, code, period }) => (
    <CardBorder>
        <CardLink to={`/WorkspaceView?workspaceId=${workspaceId}`}>
                <ImgBox>
                    <CardImg src={picture} alt={code}/>
                </ImgBox>
                <TextBox>
                    <TextSet>
                        <div>프로젝트 타이틀</div>
                        <div>{name}</div>
                    </TextSet>
                    <TextSet>
                        <div>프로젝트 설명</div>
                        <div>{desc}</div>
                    </TextSet>
                    
                </TextBox>
        </CardLink>
    </CardBorder>
        
    
);

export default WorkspaceCard;

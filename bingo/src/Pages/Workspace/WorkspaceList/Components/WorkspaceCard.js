import React from "react";
import { Div } from "../../../../Components/NormalComponents/Section";
import { Img } from "../../../../Components/NormalComponents/Etc";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardBorder = styled.div`
    flex-direction : row;
    margin : 2% 0 0 2%;
    border-radius : 32px;
    width : 22%;
    height : 38%;
    background-color : #F8F0EF;
    border : 1px solid transparent;
`

const Card = styled.div`
    height : 100%;
    width : 100%;
    flex-direction : column;
    border-radius : 32px;
    background-color : #F8F0EF;
    border : 1px solid transparent;
`

const WorkspaceCard = ({ workspaceId, name, desc, picture, code, period }) => (
    // 
    <CardBorder >
        {/* 링크 담당 */}
        <Link style={{ textDecoration: 'none', height: '100%' }} to={`/WorkspaceView?workspaceId=${workspaceId}`}>
            <Img width="100%" height="100%" borderRadius="15px" src={picture} alt={code}/>
            <Div
            height="20%"
            alignItems="center"
            fontSize="37px"
            textDecoration="none"
            color="black"
            >{name}</Div>
        </Link>
    </CardBorder>
);

export default WorkspaceCard;

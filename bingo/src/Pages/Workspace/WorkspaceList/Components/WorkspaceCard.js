import { Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardLink = styled(Link)`
    height: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const CardBorder = styled.div`
    display: flex;
    align-items: center;
    margin: 2% 0 0 1.3vw;
    border-radius: 32px;
    width: 24vw;
    height: 21vh;
    background-color: #f8f0ef;
    border: 1px solid transparent;
`;
const ImgBox = styled.div`
    width: 15.5vh;
    height: 15.5vh;
    margin: 2.7vh 2.4vw 0 1.7vw;
    border-radius: 50%;
    border: 1px solid #ea4336;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    /* border : 1px solid red; */
    /* box-sizing: border-box; */
`;
const TextBox = styled.div`
    width: 45%;
    height: 100%;
    /* border : 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TextSet = styled.div`
    width: 90%;
    height: 40%;
    /* border : 1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;
const Content = styled.div`
    color: #f2aba5;
    font-size: 14px;
    margin-bottom: 0.5vh;
`;
const Title = styled.div`
    color: #222;
    font-size: 24px;
`;
const Desc = styled.div`
    color: #222;
    font-size: 17px;
`;

const CardImg = styled.div`
    height: 14vh;
    width: 14vh;
    flex-direction: column;
    border-radius: 50%;
    background-color: #f8f0ef;
    border: 1px solid black;
`;

const WorkspaceCard = ({ workspaceId, name, desc, picture, code, period }) => (
    <CardBorder>
        <CardLink to={`/WorkspaceView?workspaceId=${workspaceId}`}>
            <ImgBox>
                <CardImg src="\img\WorkspaceList\add.png" alt={code} />
            </ImgBox>
            <TextBox>
                <TextSet>
                    <Content>프로젝트 타이틀</Content>
                    <Title>{name}</Title>
                </TextSet>
                <TextSet>
                    <Content>프로젝트 설명</Content>
                    <div
                        style={{
                            fontSize: "16px",
                            lineHeight: "150%",
                            color: "#787474",
                        }}
                    >
                        {desc}
                    </div>
                </TextSet>
            </TextBox>
        </CardLink>
    </CardBorder>
);

export default WorkspaceCard;

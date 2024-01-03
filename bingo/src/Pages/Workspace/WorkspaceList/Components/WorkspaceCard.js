/* eslint-disable */

import { Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../../font.css";
import Dummy from "../../../../assets/Img/WorkspaceList/post3.jpg";

const CardLink = styled(Link)`
    height: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const CardBorder = styled.div`
    margin: ${(props) =>
        props.index % 3 === 0 ? "2vh 1.3vw 0 1.3vw" : "2vh 0 0 0"};
    display: flex;
    align-items: center;
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
    width: 9vw;
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
    margin-bottom: 0vh;
    font-family: "160";
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.14px;
`;
const Title = styled.div`
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
`;
const Desc = styled.div`
    color: #787474;
    font-family: "160";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
`;

const CardImg = styled.img`
    height: 14vh;
    width: 14vh;
    flex-direction: column;
    border-radius: 50%;
    background-color: #f8f0ef;
    border: 1px solid black;
`;

const WorkspaceCard = ({
    number,
    workspaceId,
    name,
    desc,
    picture,
    code,
    period,
    total,
}) => {
    console.log("number:", number); // key 출력 코드 추가
    return (
        <CardBorder index={number}>
            <CardLink to={`/WorkspaceView?workspaceId=${workspaceId}`}>
                <ImgBox>
                    <CardImg src={Dummy} alt={code} />
                </ImgBox>
                <TextBox>
                    <TextSet>
                        <Content>프로젝트 타이틀</Content>
                        <Title>{name}</Title>
                    </TextSet>
                    <TextSet>
                        <Content>프로젝트 설명</Content>
                        <Desc>{desc}</Desc>
                    </TextSet>
                </TextBox>
            </CardLink>
        </CardBorder>
    );
};

export default WorkspaceCard;

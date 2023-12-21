import React from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";

const DummyWorkspace = [
    {
        name : "Hello",
        desc : "3!4! Bingo!",
    },
    {
        name : "Longcurtion",
        desc : "231218~240106",
    }
];

const WorkspaceBox = ({ name, desc }) => (
    <Div 
        flexDirection="column"
        margin="1%"
    >
        <P>{name}</P>
        <P>{desc}</P>
    </Div>
);

const Home =()=> {
    return(
        <Div
            flexDirection="column"
        >
            {/* 현재는 더미값이지만 장기적으로는 워크스페이스 데이터 기반으로 카드 출력  */}
            {DummyWorkspace.map((workspace, index) => (
                <WorkspaceBox
                    key={index}
                    name={workspace.name}
                    desc={workspace.desc}
                />
            ))}
        </Div>
    )
}

export default Home;
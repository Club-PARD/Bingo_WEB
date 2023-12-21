import React from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";

const WorkspaceCard = ({ name, desc, period }) => (
    <Div 
        flexDirection="column"
        margin="1%"
        border="1px solid red"
        width="15%"
    >
        <h1>{name}</h1>
        <h2>{desc}</h2>
        <P>{period}</P>
    </Div>
);

export default WorkspaceCard;
import React from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";

const WorkspaceCard = ({ name, desc, period }) => (
    <Div 
        flexDirection="column"
        margin="10px"
        padding="0px 0px 10px 10px"
        border="1px solid brown"
        borderRadius="5%"
        width="20%"
    >
        <h1>{name}</h1>
        <h2>{desc}</h2>
        <P>{period}</P>
    </Div>
);

export default WorkspaceCard;
import React from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";

const WorkspaceCard = ({ name, desc, period }) => (
    <Div 
        flexDirection="column"
        margin="1% 1% 1% 1%"
        padding="1%"
        border="1px solid transparent"
        borderRadius="15px"
        width="20%"
        backgroundColor="gainsboro"
    >
        <p>{name}</p>
    </Div>
);

export default WorkspaceCard;
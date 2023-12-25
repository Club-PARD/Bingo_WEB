import styled from 'styled-components';

export const P = styled.p `
    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};
    color : ${props => props.color || ''};
    margin : ${props => props.margin || '0px'};
    margin-right : ${props => props.marginRight || '0px'};
    padding : ${props => props.margin || '0px'};
`;

export const Label = styled.label `
    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};
    color : ${props => props.color || ''};
    margin : ${props => props.margin || '0px'};
    padding : ${props => props.margin || '0px'};
`;
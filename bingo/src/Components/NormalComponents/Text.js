import styled from 'styled-components';

export const P = styled.p `
    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};
    color : ${props => props.color || ''};
    margin : ${props => props.margin || ''};
    padding : ${props => props.margin || ''};
`;

export const Label = styled.label `
    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};
    color : ${props => props.color || ''};
    margin : ${props => props.margin || ''};
    padding : ${props => props.margin || ''};
`;
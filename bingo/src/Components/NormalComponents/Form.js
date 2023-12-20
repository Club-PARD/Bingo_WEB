import styled from "styled-components";

export const Button = styled.button `
    width : ${props => props.width || ''};
    height : ${props => props.height || ''};

    border : ${props => props.border || 'none'};
    border-radius:  ${props => props.borderRadius || ''};

    color : ${props => props.color || 'white'};
    background-color: ${props => props.backgroundColor || 'black'};

    margin : ${props => props.margin || "0px"};
    padding : ${props => props.padding || "0px"};

    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};

    &:hover{
        opacity: 50%;
    }
`;

export const Input = styled.input `
    width : ${props => props.width || '200px'};
    height : ${props => props.height || "40px"};
    
    border : ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || "10px"};

`;

export const Fieldset = styled.fieldset `
    width : ${props => props.width || '500px'};
    height : ${props => props.height || "400px"};
    
    border : ${props => props.border || '1px solid black'};
    border-radius: ${props => props.borderRadius || "10px"};
`;

export const Legend = styled.legend `
    font-size: ${props => props.fontSize || ''};
    font-weight: ${props => props.fontWeight || ''};
    color : ${props => props.color || ''};
    margin : ${props => props.margin || '0px'};
    padding : ${props => props.padding || '0px'};

`;

export const Textarea = styled.textarea `
    width : ${props => props.width || '400px'};
    height : ${props => props.height || "200px"};

    color : ${props => props.color || ''};
    margin : ${props => props.margin || '0px'};
    padding : ${props => props.padding || '5px'};

    font-size: ${props => props.fontSize || '1rem'};
    font-weight: ${props => props.fontWeight || ''};

    border : ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || "10px"};

    font-family: inherit;
    resize : none;
`;
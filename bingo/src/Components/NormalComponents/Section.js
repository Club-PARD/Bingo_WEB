import styled from 'styled-components';

export const Div = styled.div`
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || ''};
    align-items: ${props => props.alignItems || ''};
    flex-direction: ${props => props.flexDirection || ''};
    
    width : ${props => props.width || ''};
    height : ${props => props.height || ''};

    border : ${props => props.border || ''};
    border-radius: ${props => props.borderRadius || ''};
    box-sizing : ${props => props.boxSizing || 'border-box'};

    color: ${props => props.color || ''};
    background-color: ${props => props.backgroundColor || ''};

    
    margin : ${props => props.margin || "0px"};
    padding : ${props => props.padding || "0px"};
    
`;


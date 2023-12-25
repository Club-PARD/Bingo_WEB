import styled from 'styled-components';

export const Div = styled.div`
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || ''};
    align-items: ${props => props.alignItems || ''};
    flex-direction: ${props => props.flexDirection || ''};
    flex-shrink: ${props => props.flexShirnk || ''};
    flex-wrap: ${props => props.flexWrap || ''};
    
    width : ${props => props.width || ''};
    height : ${props => props.height || ''};

    border : ${props => props.border || ''};
    border-radius: ${props => props.borderRadius || ''};
    box-sizing : ${props => props.boxSizing || 'border-box'};

    color: ${props => props.color || ''};
    background-color: ${props => props.backgroundColor || ''};

    
    margin : ${props => props.margin || "0px"};
    padding : ${props => props.padding || "0px"};
    
    font-family: ${props => props.fontFamily || ''};
    font-size: ${props => props.fontSize || ''};
    font-style: ${props => props.fontStyle || ''};
    font-weight: ${props => props.fontWeight || ''};
    line-height: ${props => props.lineHeight || ''};
    color: ${props => props.color || '#000'};
    -webkit-text-stroke: ${props => props.textStroke || '1px #000'};
`;


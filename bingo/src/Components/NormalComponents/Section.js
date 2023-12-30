import styled from 'styled-components';

export const Div = styled.div `
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || ''};
    align-items: ${props => props.alignItems || ''};
    align-content: ${props => props.alignContent || ''};
    flex-direction: ${props => props.flexDirection || ''};
    flex-shrink: ${props => props.flexShirnk || ''};
    flex-wrap: ${props => props.flexWrap || ''};
    position: ${props => props.position || ''};
    z-index: ${props => props.zIndex || ''};

    width : ${props => props.width || ''};
    height : ${props => props.height || ''};

    border : ${props => props.border || ''};
    border-right: ${props => props.borderRight || ''};
    border-radius: ${props => props.borderRadius || ''};
    box-sizing : ${props => props.boxSizing || ''};

    color: ${props => props.color || ''};
    background-color: ${props => props.backgroundColor || ''};
    backdrop-filter: ${props => props.backdropFilter || ''};

    right : ${props => props.right || ''};

    
    margin : ${props => props.margin || "0px 0px 0px 0px"};

    padding : ${props => props.padding || "0px 0px 0px 0px"};
    /* padding-right : ${props => props.paddingRight || "0px"};
    padding-left : ${props => props.paddingLeft || "0px"}; */
    

    font-family: ${props => props.fontFamily || 'Inter'};
    font-size: ${props => props.fontSize || ''};
    font-style: ${props => props.fontStyle || ''};
    font-weight: ${props => props.fontWeight || ''};
    line-height: ${props => props.lineHeight || ''};

    overflow: ${props => props.overflow || ''};

    cursor: ${props => props.cursor || ''};
`;

export const CenterDiv = styled(Div)`
    justify-content: center;
    align-items: center;
`;

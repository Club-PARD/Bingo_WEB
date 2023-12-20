export const Div = styled.div`
    display: ${props => props.display || "flex"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "center"};
    flex-direction: ${props => props.flexDirection || "row"};
    
    width : ${props => props.width || ''};
    height : ${props => props.height || ''};

    border : ${props => props.border || ''};
    box-sizing : ${props => props.boxSizing || "border-box"};
    background-color: ${props => props.backgroundColor || ''};
    color: ${props => props.backgroundColor || " white"};
    padding : ${props => props.padding || "10px"};
    margin : ${props => props.margin || "0px"};
    position: ${props => props.position || ''};
    background-image: ${props => props.backgroundImage || ''};
`;
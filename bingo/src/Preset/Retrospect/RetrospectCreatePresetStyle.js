import { Link } from "react-router-dom";
import styled from "styled-components";

export const ModalLargest = styled.div`
    width: 100%;
    height: 91%;
    margin-top: 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
export const ModalTextDiv = styled.div`
    width: auto;
    height: 30px;
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
`;
//width:213px; height:51px;
export const ModalButtonDiv = styled.div`
    width: 47%;
    height: 18.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const ModalCloseButton = styled.button`
    width: 42%;
    height: 100%;
    background-color: var(--main_white, #f9f9f9);
    align-items: center;
    justify-content: center;
    color: var(--main_red, #ea4336);
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    border-radius: 40px;
    border: 2px solid var(--main_red, #ea4336);
    cursor: pointer;
`;
export const ModalExitButton = styled(Link)`
    width: 50%;
    height: 90%;
    background-color: #ea4336;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    color: var(--main_white, #f9f9f9);
    font-family: "160";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    border-radius: 40px;
    border: 2px solid var(--main_red, #ea4336);
    text-decoration: none;
    cursor: pointer;
`;

// Input 스타일 지정
export const InputStyle = {
    padding: "1.7vh 1.4vw 1.7vh 1.4vw",
    type: "text",
    width: "100%",
    height: "6.5vh",
    borderRadius: "24px",
    backgroundColor: "#EBEBEB",
    color: "#222",
    fontFamily: "WefontGothic(OTF)",
    fontSize: "20px",
    fontStyle: "normal",
    fontSeight: "400",
    lineHeight: "160%",
    /* 32px */
    letterSpacing: "-0.2px",
    marginBottom: "1.5vh",
};

// Section 스타일
export const Section_Style = {
    width: "100%",
    height: "93.9vh",
    flexDirection: "column",
    margin: "0 auto",
    overflow: "hidden",
};

//Modal
export const StyleModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0,0.2)",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "40px",
        padding: 0,
        color: "black",
        background: `#F9F9F9`,
        margin: "0",
        width: "23.6vw",
        height: "25.5vh",
        display: "flex",
        border: "none",
        flexDirection: "column",
        justifyContent: "end",
    },
};

// StepButton : Next / Last 버튼 분리화
export const Header = styled.div`
    width: 66vw;
    height: 24%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;
export const LeftHead = styled.div`
    margin-bottom: 5.4vh;
    width: auto;
    height: 46%; //114px
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const RightHead = styled.div`
    margin-bottom: 5.4vh;
    width: 30%; //330px
    height: 24%; //59px
    display: flex;
    flex-direction: row;
    justify-content: Right;
    align-items: end;
`;
export const SpanCreate = styled.span`
    color: #838383;
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
`;
export const SpanTitle = styled.span`
    color: var(--sec_grey, #222);
    font-family: "160";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
`;
export const SpanDesc = styled.span`
    color: rgba(34, 34, 34, 0.8);
    font-family: "140";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
`;
export const EclipseDiv = styled.div`
    width: 0.6vw;
    height: 0.6vw;
    border: none;
    box-sizing: border-box;
    border-radius: 50%;
`;
export const DotDiv = styled.div`
    height: 4vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 3vh;
`;

//animation card CSS
export const menuStyle = {
    overflow: "visible",
    border: "2px solid #ddd",
    width: "20.8vw",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
    border: "1px solid #EFEFEF",
    color: "var(--main_white, #F9F9F9)",
    fontFamily: "WefontGothic(OTF)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "150%",
    /* 24px */
};
export const DivKPTText = styled.div`
    color: var(--main_white, #f9f9f9);
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    width: 15.4vw;
    margin: 2.6vh auto;
`;
export const Div4LSText = styled.div`
    color: var(--main_white, #f9f9f9);
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    width: 15.4vw;
    margin: 2.6vh auto;
`;
export const Div5FText = styled.div`
    color: var(--main_white, #f9f9f9);
    font-family: "140";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    width: 15.4vw;
    margin: 2.6vh auto;
`;

import styled from "styled-components";
import {Button, Input} from "../../Components/NormalComponents/Form";
import {CenterDiv, Div} from "../../Components/NormalComponents/Section";
import {Label, P} from "../../Components/NormalComponents/Text";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

// Section1 영역
export const Section1 = (e) => {
    const NoQuestionSubmit = (q) => {
        let NoQuestions;

        if (e.SelectedWays === 'KPT') {
            const kptTitles = ['Keep', 'Problem', 'Try'];
            NoQuestions = kptTitles.map((title) => ({ title, content: [{ dataQ: '자유롭게 남겨주세요.', dataA: '' }] }));
        } else if (e.SelectedWays === '4LS') {
            const lsTitles = ['Liked', 'Learned', 'Lacked', 'Longed for'];
            NoQuestions = lsTitles.map((title) => ({ title, content: [{ dataQ: '자유롭게 남겨주세요.', dataA: '' }] }));
        } else if (e.SelectedWays === '5F') {
            const fTitles = ['Feel', 'Find', 'Finish', 'Future', 'Feedback'];
            NoQuestions = fTitles.map((title) => ({ title, content: [{ dataQ: '자유롭게 남겨주세요.', dataA: '' }] }));
        } else {
            console.log("no selected");
        }

        e.setQuestions(NoQuestions);
        console.log(e.questions);
        e.onSubmitClick();
    }
    
    const navigate = useNavigate();


    const handleNextButtonClick = () => {
        if (e.retrospectTitle === '') {
            alert("회고 타이틀을 입력하시오");
        } else {
            // 필요한 데이터와 함께 Section2로 이동
            navigate("/RetrospectCreate#section2", {
                state: {
                    retrospectTitle: e.retrospectTitle,
                    SelectedWays: e.SelectedWays || '',
                },
            });
        }
    };
    return (
        <Div id="section1" style={Section_Style}>
            <Header>
                <LeftHead>
                    <SpanCreate>회고 생성</SpanCreate>
                    <SpanTitle>3!4!(쓰리포)</SpanTitle>
                    <SpanDesc>한동대학교 PARD 롱커톤 3!4! 파이팅!</SpanDesc>
                </LeftHead>
                <RightHead>
                    <EclipseDiv style={{marginRight: '0.8vw'}}/>
                    <EclipseDiv style={{marginRight: '1.8vw'}}/>
                    <StepButton onClick={e.onCancleClick} targetLabel="취소" 
                        backgroundColor="#F9F9F9" color="#EA4336"/>
                    <StepButton targetPage={e.retrospectTitle ? "#section2" : ""}
                        targetLabel="다음"
                        onClick={handleNextButtonClick}
                        backgroundColor="#EA4336" color="#F9F9F9" 
                    />
                </RightHead>
            </Header>

            {/* Content Section */}
            <Div flexDirection="column" margin="0 auto" width="66%" height="65%" backgroundColor="aliceblue">

                {/* 회고 타이틀 Section */}
                <Div
                    flexDirection="column"
                    width = "100%"
                    height="20%"
                    backgroundColor="">
                    {/* Title */}
                    <P styled={{color: 'rgba(34, 34, 34, 0.60)',
                                //fontFamily: 'WefontGothic(OTF)',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '150%' /* 24px */}}
                    >회고 타이틀</P>

                    {/* Input */}
                    <Input
                        placeholder= '1차 회고'
                        style={InputStyle}
                        value={e.retrospectTitle}
                        onChange={(k) => e.setRetrospectiTitle(k.target.value)}></Input>
                </Div>

                {/* 템플릿 선택 Section */}
                <Div flexDirection="column" width="100%" height="80%" backgroundColor="" >
                    {/* Title */}
                    <Div height="10%">
                        <P styled={{color: 'rgba(34, 34, 34, 0.60)',
                                //fontFamily: 'WefontGothic(OTF)',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '150%' /* 24px */}}
                        >템플릿 선택</P>
                    </Div>

                    {/* 템플릿 선택 */}
                    <Div width="100%" height="90%">
                        <RadioCard
                            value='KPT'
                            label='KPT'
                            description={RetrospectDescription.W_KPT}
                            selectedValue={e.SelectedWays}
                            onChange={e.handleRadioChange}/>
                        <RadioCard
                            value='4LS'
                            label='4LS'
                            selectedValue={e.SelectedWays}
                            description={RetrospectDescription.W_4LS}
                            onChange={e.handleRadioChange}
                            margin="0px 20px"/>
                        <RadioCard
                            value='5F'
                            label='5F'
                            selectedValue={e.SelectedWays}
                            description={RetrospectDescription.W_5F}
                            onChange={e.handleRadioChange}/>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}

// Section2 영역
export const Section2 = (e) => {
    return (
        <Div id="section2" style={Section_Style}>
            {/* Content Section */}
            <Header>
                <LeftHead>
                    <SpanCreate>회고 생성</SpanCreate>
                    <SpanTitle>3!4!(쓰리포)</SpanTitle>
                    <SpanDesc>한동대학교 PARD 롱커톤 3!4! 파이팅!</SpanDesc>
                </LeftHead>
                <RightHead>
                    <EclipseDiv style={{marginRight: '0.8vw'}}/>
                    <EclipseDiv style={{marginRight: '1.8vw'}}/>
                    <StepButton targetPage="#section1" targetLabel="이전" 
                        backgroundColor="#F9F9F9" color="#EA4336"/>
                    <StepButton onClick={e.onSubmitClick} targetLabel="생성"
                        backgroundColor="#EA4336" color="#F9F9F9" 
                    />
                </RightHead>
            </Header>
            <Div width="100%" height="50%" margin="0 0 -5% 0" position="relative" backgroundColor = "">
                <Div
                    flexDirection="column"
                    height="100%"
                    width="100%"
                    style={{
                        overflow: "scroll",
                    }}>
                    {
                        e.SelectedWays === 'KPT' && handleMakeThreeSection('KPT', [
                            'Keep', 'Problem', 'Try'
                        ], e.questions, e.setQuestions)
                    }
                    {
                        e.SelectedWays === '4LS' && handleMakeThreeSection('4LS', [
                            'Liked', 'Learned', 'Lacked', 'Longed for'
                        ], e.questions, e.setQuestions)
                    }
                    {
                        e.SelectedWays === '5F' && handleMakeThreeSection('5F', [
                            'Feel', 'Find', 'Finish', 'Future', 'Feedback'
                        ], e.questions, e.setQuestions)
                    }

                </Div>
            </Div>
        </Div>
    );
}

// RadioCard : 라디오 버튼 Custom
const RadioCard = (e) => {
    return (
        <Div width="100%" margin={e.margin} height="100%">

            {/* hidden 처리 되는 Input::Radio 버튼 */}
            <input
                type='radio'
                name='fruits'
                value={e.value}
                checked={e.value === e.selectedValue}
                onChange={e.onChange}
                style={{
                    display: 'none'
                }}/> {/* show 처리 되는 부분 */}
            <Div width="100%" height="100%" cursor="pointer" borderRadius="15px" alignItems="center" flexDirection="column"
                // padding="20px"
                backgroundColor={e.value === e.selectedValue
                    ? 'black'
                    : 'gainsboro'} onClick={() => e.onChange(e.value)}>

                {/* 템플릿 Title */}
                <CenterDiv width="100%" height="40%" backgroundColor="">
                    <P
                        fontSize="70px"
                        fontWeight="bold"
                        color =
                        {e.value === e.selectedValue ? 'white' : 'black'}
                        style={{
                            transition: e.value === e.selectedValue ? "background-color 2s, color 2s" : ""
                        }}>{e.label}</P>
                </CenterDiv>

                {/* 템플릿 설명 */}
                <Div
                    width="100%"
                    height="60%"
                    color={e.value === e.selectedValue
                        ? 'white'
                        : 'black'}
                    backgroundColor=""
                    fontSize="25px"
                    style={{
                        textAlign: "center",
                        transition: e.value === e.selectedValue ? "background-color 2s, color 2s" : ""
                    }}>
                    <Div
                        width="100%"
                        height="auto"
                        margin="20px"
                        borderRadius="15px"
                        padding="20px"
                        backgroundColor="">{e.description}</Div>
                </Div>
            </Div>
        </Div>
    );
}

// handleMakeThreeSection : lable에 맞춰서 질문을 생성해주는 핸들러
// handleMakeThreeSection 함수 수정
const handleMakeThreeSection = (way, labels, questions, setQuestions) => (
    <Div flexDirection="column">
        {labels.map((label, index) => (
            <Div
                key={index}
                flexDirection="column"
                border="3px dashed gainsboro"
                width="100%"
                height="auto"
                margin={index === 0 ? "0% 0px" : "2% 0px"}
                padding="30px 30px"
                boxSizing="border-box"
                borderRadius="10px"
            >
                {/* Title */}
                <Div alignItems="flex-end">
                    <Label margin="0px 5px 0px 0px" fontSize="100px">{label[0]}</Label>
                    <Label margin="0px 0px 5px 0px" fontSize="40px" width="20%">{label}</Label>
                </Div>
                {
                    // console.log(questions[index].content)
                }
                {/* 질문 모음 */}
                <Div flexDirection="column" height="auto" justifyContent="space-around">
                    {Array.from({ length: 3 }).map((_, contentIndex) => (
                        <Input
                            type="text"
                            placeholder={`질문 ${contentIndex + 1}을 입력해주세요.`}
                            style={InputStyle}
                            width="100%"
                            value={questions[index]?.content[contentIndex]?.dataQ || ''}
                            onChange={(e) => {
                                const updatedQuestions = [...questions];
                                updatedQuestions[index] = {
                                    id: index + 1,
                                    content: [...(updatedQuestions[index]?.content || [])],
                                };
                                updatedQuestions[index].title = label;
                                updatedQuestions[index].content[contentIndex] = {
                                    ...(updatedQuestions[index]?.content[contentIndex] || {}),
                                    dataQ: e.target.value,
                                    dataA: '',
                                };
                                setQuestions(updatedQuestions);
                            }}
                        />
                    ))}
                </Div>
            </Div>
        ))}
    </Div>
);




// StepButton : Next / Last 버튼 분리화
const Header = styled.div`
    width: 66%;
    height: 24%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: end;
`
const LeftHead=styled.div`
    margin-bottom: 5.4vh;
    width: auto;
    height: 46%;//114px
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
const RightHead=styled.div`
    margin-bottom: 5.4vh;
    width: 30%;//330px
    height: 24%;//59px
    display: flex;
    flex-direction: row;
    justify-content: Right;
    align-items: end;
`
const SpanCreate=styled.span`
    color: #838383;
    //font-family: WefontGothic(OTF);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
`
const SpanTitle=styled.span`
    color: var(--sec_grey, #222);
    //font-family: WefontGothic(OTF);
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
`
const SpanDesc=styled.span`
    color: rgba(34, 34, 34, 0.80);
    //font-family: WefontGothic(OTF);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
`
const EclipseDiv =styled.div`
    width: 0.6vw;
    height: 12px;
    border: none;
    box-sizing: border-box;
    background-color: #E1E1E1;
    border-radius: 50%;
`
// StepButton : Next / Last 버튼 분리화
const StepButton = (e) => {
    return (
        <a href={e.targetPage}>
            <Button
                width="5.5vw"
                height="5vh"
                borderRadius="40px"
                fontSize="18px"
                fontWeight="400"
                onClick={e.onClick}
                justifyContent= "center"
                alignItems= "center"
                margin=" 0 0 0 .8vw"
                border="2px solid var(--main_red, #EA4336)"
                backgroundColor={e.backgroundColor}
                color={e.color}
                style={{opacity : e.opcaity,}}
            >{e.targetLabel}</Button>
        </a>
    );
}
const StepButtonSkip = (e) => {
    return (
        <a href={e.targetPage}>
            <Button
                width="150px"
                height="50px"
                color="#BDBDBD"
                borderRadius="15px"
                fontSize="35px"
                fontWeight="bold"
                onClick={e.onClick}
                backgroundColor="rgba(255,255,255,0.3)"
                >{e.targetLabel}</Button>
        </a>
    );
}

// Input 스타일 지정
const InputStyle = {
    type: "text",
    width: "100%",
    height: "6.5vh",
    padding: "1.4vw",
    borderRadius: "24px",
    backgroundColor: "#F0F0F0",
    color: "#222",
    fontFamily: "WefontGothic(OTF)",
    fontSize: "20px",
    fontStyle: "normal",
    fontSeight: "400",
    lineHeight: "160%", /* 32px */
    letterSpacing: "-0.2px",
}

// Section 스타일
const Section_Style = {
    width: "90%",
    height: "100%",
    flexDirection: "column",
    margin: "0 auto",
}
// 템플릿 설명 변수
const RetrospectDescription = ({
    W_KPT: '팀의 상황을 빠르게 돌아보고 명확한 개선 방법을 찾길 원한다면?',
    W_4LS: '팀의 과정을 돌아보고 목표를 세우길 원한다면?',
    W_5F: '팀의 중요한 사건들을 꼼꼼히 돌아보길 원한다면?'
});
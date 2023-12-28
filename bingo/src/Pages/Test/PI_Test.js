import styled from "styled-components";
import {Div} from "../../Components/NormalComponents/Section";
import React, {useState} from 'react';

function PI_Test() {
    const [questions, setQuestions] = useState([
        {
            title: 'Keep',
            content: []
        }, {
            title: 'Problem',
            content: []
        }, {
            title: 'Try',
            content: []
        }
    ]);

    const handleInputChange = (e, sectionIndex, contentIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[sectionIndex].content[contentIndex] = e.target.value;
        setQuestions(updatedQuestions);
    }

    const handleAddContent = (index) => {
        const currentContent = questions[index]
            .content
            .slice();

        if (currentContent.length < 3) {
            currentContent.push(`질문${currentContent.length + 1}`);
            updateQuestions(index, currentContent);
        }
    }

    const handleRemoveContent = (sectionIndex, contentIndex) => {
        const currentContent = questions[sectionIndex]
            .content
            .slice();

        if (currentContent.length > 0) {
            currentContent.splice(contentIndex, 1);
            updateQuestions(sectionIndex, currentContent);
        }
    }

    const updateQuestions = (sectionIndex, updatedContent) => {
        const updatedQuestions = [...questions];
        updatedQuestions[sectionIndex] = {
            ...updatedQuestions[sectionIndex],
            content: updatedContent
        };
        setQuestions(updatedQuestions);
    }

    return (
        <Div flexDirection="column">
            <h1>화이팅해보자.</h1>

            <Div width="100%" height="auto">
                {
                    questions.map((label, sectionIndex) => (
                        <Div
                            key={sectionIndex}
                            width="300px"
                            height="auto"
                            backgroundColor="red"
                            margin="5px"
                            flexDirection="column"
                            boxSizing="border-box">
                            <Div>
                                <h1>{questions[sectionIndex].title}</h1>
                            </Div>
                            {
                                questions[sectionIndex]
                                    .content
                                    .map((content, contentIndex) => (content !== null && (
                                        <Div
                                            key={contentIndex}
                                            flexDirection = "column"
                                            backgroundColor="yellow"
                                            width="250px"
                                            height="auto"
                                            margin="3px"
                                            boxSizing="border-box">
                                            <input
                                                type="text"
                                                value={content}
                                                style={{fontSize : "30px"}}
                                                onChange={(e) => handleInputChange(e, sectionIndex, contentIndex)}/> {/* 삭제 버튼 */}
                                            <button onClick={() => handleRemoveContent(sectionIndex, contentIndex)} style={{fontSize : "30px"}}>
                                                삭제
                                            </button>
                                        </Div>
                                    )))
                            }
                            {/* 추가 버튼 */}
                            {
                                questions[sectionIndex].content.length < 3 && (
                                    <button onClick={() => handleAddContent(sectionIndex)}>
                                        추가
                                    </button>
                                )
                            }
                        </Div>
                    ))
                }

                {/* 결과 보기 영역 */}
                <fieldset style={{width : "40%", fontSize : "20px"}}>
                    <legend>결과</legend>
                    {
                        questions.map((section, sectionIndex) => (
                            <Div key={sectionIndex} flexDirection="column" margin="10px">
                                <h2>{section.title}</h2>
                                <ul>
                                    {
                                        section
                                            .content
                                            .map((content, contentIndex) => (<li key={contentIndex}>{content}</li>))
                                    }
                                </ul>
                            </Div>
                        ))
                    }
                </fieldset>
            </Div>
        </Div>

    );
}

export default PI_Test;

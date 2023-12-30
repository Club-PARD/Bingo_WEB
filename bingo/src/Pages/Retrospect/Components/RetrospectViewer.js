// RetrospectViewer.js

import React from 'react';
import {useRecoilValue} from 'recoil';
import {retrospectiveState} from '../../../Contexts/Atom';
import {P} from '../../../Components/NormalComponents/Text';
import {Div} from '../../../Components/NormalComponents/Section';

const RetrospectViewer = () => {
    const retrospective = useRecoilValue(retrospectiveState);

    return (
        <div style={{
                backgroundColor: "white"
            }}>
            <h3>회고 제목 : {retrospective.retrospectTitle}</h3>
            <h3>회고 방법 : {retrospective.selectedWays}</h3>
            <h3>질문 목록</h3>

            {
                retrospective
                    .questions
                    .map((question, index) => (
                        <Div flexDirection="column" margin="0px 0px 10px 0px">
                            <strong key={index}>{question.title}</strong>
                            {
                                question
                                    .content
                                    .map((content, contentIndex) => (
                                        <P key={contentIndex}>
                                            {contentIndex + 1}번째 질문 : {content.dataQ}
                                        </P>
                                    ))
                            }

                        </Div>
                    ))
            }

        </div>
    );
};

export default RetrospectViewer;

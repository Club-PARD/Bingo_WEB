// RetrospectViewer.js

import React from 'react';
import {useRecoilValue} from 'recoil';
import {retrospectiveState} from '../../../Contexts/Atom';

const RetrospectViewer = () => {
    const retrospective = useRecoilValue(retrospectiveState);

    return (
        <div style={{ backgroundColor : "white" }}>
            <h1>Retrospect Viewer</h1>
            <p>Retrospect Title: {retrospective.retrospectTitle}</p>
            <p>Selected Ways: {retrospective.selectedWays}</p>
            <p>Questions:</p>
            <ul>
                {
                    retrospective
                        .questions
                        .map((question, index) => (
                            <li key={index}>{question.title}: {
                                    question
                                        .content
                                        .join(', ')
                                }</li>
                        ))
                }
            </ul>
        </div>
    );
};

export default RetrospectViewer;

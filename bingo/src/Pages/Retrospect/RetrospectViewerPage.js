// RetrospectViewerPage.js

import React from 'react';
import RetrospectViewer from './Components/RetrospectViewer';
import {Div} from '../../Components/NormalComponents/Section';

const RetrospectViewerPage = () => {
    return (
        <Div width = "100%" height = "100%" backgroundColor = "gray" flexDirection = "column">
            <h1>Retrospect Viewer Page</h1>
            <RetrospectViewer/>
        </Div>
    );
};

export default RetrospectViewerPage;

/* eslint-disable */

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './Sidebar';
import Intro from './Pages/Login/Intro';
import {RecoilRoot} from 'recoil';
import PI_Test from './Pages/Test/PI_Test';
import PI_Test2 from './Pages/Test/PI_Test2';
import CrudList from './Pages/Test/CrudList';
import CrudAdd from './Pages/Test/CrudAdd';
import CrudUpdate from './Pages/Test/CrudUpdate';
import CrudView from './Pages/Test/CrudView';
import LoginPage from './Pages/Login/LoginPage';
import WorkspaceView from './Pages/Workspace/WorkspaceView';
import RetrospectCreate from './Pages/Retrospect/RetrospectCreate';
import WorkspaceList from './Pages/Workspace/WorkspaceList';
import RetrospectList from './Pages/Retrospect/RetrospectList';
import RetrospectView from './Pages/Retrospect/RetrospectView';
import RetrospectWrite from './Pages/Retrospect/RetrospectWrite';
import RetrospectWriteText from './Pages/Retrospect/Components/RetrospectWriteText';
import TeamEvaluation from './Pages/Retrospect/Components/TeamEvaluation';
import Header from './Layout/Header';
import RetrospectViewerPage from './Pages/Retrospect/RetrospectViewerPage';
import TopMenuBar from './Layout/TopMenueBar';
import { RiceBowl } from '@mui/icons-material';
import UserApprove from './Pages/Login/UserApprove';

const Routers = () => {
    return (
        <RecoilRoot>
            <Router>
                {/* <div style={{ display: 'flex' }}> */}
                {/* <Sidebar /> */}
                {/* <div style={{flex : 1}}> */}
                <Routes>
                    <Route path='/PI' element={<PI_Test />}/>
                    {/*<Route path="" element={<Sidebar/>}>*/}
                    <Route path="" element={<TopMenuBar/>}>
                        <Route path='/' element={<Intro />}/>
                        <Route path='/Login' element={<LoginPage />}/>
                        <Route path='/PI2' element={<PI_Test2 />}/>
                        <Route path='/UserApprove' element={<UserApprove />}/>
                        <Route path='/WorkspaceList' element={<WorkspaceList />}/>
                        {/*<Route path="" element={<Header/>}>*/}
                            <Route path='/WorkspaceView' element={<WorkspaceView />}/>
                            <Route path='/RetrospectCreate' element={<RetrospectCreate />}/>
                            <Route path='/RetrospectList' element={<RetrospectList />}/>
                            <Route path='/RetrospectView' element={<RetrospectView />}/>
                            <Route path='/RetrospectWrite' element={<RetrospectWrite />}/>
                            <Route path='/RetrospectWriteText' element={<RetrospectWriteText />}/>
                            <Route path='/TeamEvaluation' element={<TeamEvaluation />}/>
                            <Route path='/RetrospectViewerPage' element={<RetrospectViewerPage/>}/>
                        {/*</Route>*/}

                        <Route path='/CrudList' element={<CrudList />}/>
                        <Route path='/CrudAdd' element={<CrudAdd />}/>
                        <Route path='/CrudUpdate' element={<CrudUpdate />}/>
                        <Route path='/CrudView' element={<CrudView />}/>
                    </Route>
                </Routes>
                {/* </div> */}
                {/* </div> */}
            </Router>
        </RecoilRoot>
    );
};

export default Routers;

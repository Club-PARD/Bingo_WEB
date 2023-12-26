import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import LoginPage from "./Pages/Login/LoginPage";
import WorkspaceView from "./Pages/Workspace/WorkspaceView";
import RetrospectCreate from "./Pages/Retrospect/RetrospectCreate";
import WorkspaceList from "./Pages/Workspace/WorkspaceList";
import RetrospectList from "./Pages/Retrospect/RetrospectList";
import RetrospectView from "./Pages/Retrospect/RetrospectView";
import RetrospectWrite from "./Pages/Retrospect/RetrospectWrite";
import BingoPage from "./Pages/Workspace/BingoPage";
import Sidebar from "./Components/PageMovements/Sidebar";
import Drawer from "./Components/PageMovements/Drawer";
import DrawerBtn from "./DrawerBtn";
import {RecoilRoot} from 'recoil';
import PI_Test from "./Pages/Test/PI_Test";
import PI_Test2 from "./Pages/Test/PI_Test2";
import CrudList from "./Pages/Test/CrudList";
import CrudAdd from "./Pages/Test/CrudAdd";
import CrudUpdate from "./Pages/Test/CrudUpdate";

const Routers = () => {

    return (
        <RecoilRoot>
            <Router>
                {/*
            <Sidebar />
            <Drawer />
            <DrawerBtn />
            */
                }
                <Routes>
                    <Route path='/' element={<LoginPage />}/>
                    <Route path='/PI' element={<PI_Test/>}/>
                    <Route path='/PI2' element={<PI_Test2/>}/>
                    <Route path='/CrudList' element={<CrudList/>}/>
                    <Route path='/CrudAdd' element={<CrudAdd/>}/>
                    <Route path='/CrudUpdate' element={<CrudUpdate />} />
                    

                    <Route path='/WorkspaceList' element={<WorkspaceList />}/>
                    <Route path='/WorkspaceList' element={<WorkspaceList />}/>
                    <Route path='/WorkspaceView' element={<WorkspaceView />}/>
                    <Route path='/RetrospectCreate' element={<RetrospectCreate />}/>
                    <Route path='/RetrospectList' element={<RetrospectList />}/>
                    <Route path='/RetrospectView' element={<RetrospectView/>}/>
                    <Route path='/RetrospectWrite' element={<RetrospectWrite/>}/>
                    <Route path='/bingo' element={<BingoPage/>}/>
                </Routes>
            </Router>
        </RecoilRoot>
    )
};

export default Routers;
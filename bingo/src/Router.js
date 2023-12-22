import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import PI_Test from "./Pages/Retrospect/PI_Test";
import Home from "./Pages/Home/Home";
import PI_Test from "./Pages/Retrospect/PI_Test";
import LoginPage from "./Pages/Login/LoginPage";
import WorkspaceView from "./Pages/Workspace/WorkspaceView";
import WorkspaceCreate from "./Pages/Workspace/WorkspaceCreate";
import RetrospectCreate from "./Pages/Retrospect/RetrospectCreate";
import WorkspaceList from "./Pages/Workspace/WorkspaceList";
import RetrospectList from "./Pages/Retrospect/RetrospectList";
import RetrospectView from "./Pages/Retrospect/RetrospectView";

const Routers = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/PI' element={<PI_Test />}/>
                <Route path='/Home' element={<Home />}/>
                <Route path='/WorkspaceList' element={<WorkspaceList />}/>
                <Route path='/WorkspaceCreate' element={<WorkspaceCreate />}/>
                <Route path='/WorkspaceView' element={<WorkspaceView />}/>
                <Route path='/RetrospectCreate' element={<RetrospectCreate />} />
                <Route path='/RetrospectList' element={<RetrospectList />} />
                <Route path='/RetrospectView' element={<RetrospectView/>}/>
            </Routes>
        </Router>
    )
};

export default Routers;
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import PI_Test from "./Pages/PI_Test";
import Login from "./Pages/Login";
import Workspace from "./Pages/Workspace/WorkspaceView";
import WorkspaceCreate from "./Pages/Workspace/WorkspaceCreate";
import RetrospectCreate from "./Pages/Retrospect/RetrospectCreate";
import WorkspaceList from "./Pages/Workspace/WorkspaceList";
import RetrospectList from "./Pages/Retrospect/RetrospectList";
import RetrospectView from "./Pages/Retrospect/RetrospectView";

const Routers = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/PI' element={<PI_Test />}/>
                <Route path='/Home' element={<Home />}/>
                <Route path='/WorkspaceList' element={<WorkspaceList />}/>
                <Route path='/WorkspaceCreate' element={<WorkspaceCreate />}/>
                <Route path='/Workspace' element={<Workspace />}/>
                <Route path='/RetrospectCreate' element={<RetrospectCreate />} />
                <Route path='/RetrospectList' element={<RetrospectList />} />
                <Route path='/RetrospectView' element={<RetrospectView/>}/>
            </Routes>
        </Router>
    )
};

export default Routers;
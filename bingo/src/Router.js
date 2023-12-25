import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import PI_Test from "./Pages/Retrospect/PI_Test";
import Home from "./Pages/Home/Home";
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

const Routers = () => {

    return (
        <Router>
            {/* 
            <Sidebar />
            <Drawer /> 
            <DrawerBtn />
            */}
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/PI' element={<PI_Test />}/>
                <Route path='/Home' element={<Home />}/>
                <Route path='/WorkspaceList' element={<WorkspaceList />}/>
                <Route path='/WorkspaceView' element={<WorkspaceView />}/>
                <Route path='/RetrospectCreate' element={<RetrospectCreate />} />
                <Route path='/RetrospectList' element={<RetrospectList />} />
                <Route path='/RetrospectView' element={<RetrospectView/>}/>
                <Route path='/RetrospectWrite' element={<RetrospectWrite/>}/>
                <Route path='/bingo' element={<BingoPage/>}/>
            </Routes>
        </Router>
    )
};

export default Routers;
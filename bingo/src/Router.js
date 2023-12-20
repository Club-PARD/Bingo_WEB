import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PI_Test from "./Pages/PI_Test";
import Login from "./Pages/LoginPage";

const Routers = () => {

    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/PI' element={<PI_Test />} />
                <Route path='/Home' element={<Home />} />
            </Routes>
        </Router>
    )
  
};

export default Routers;
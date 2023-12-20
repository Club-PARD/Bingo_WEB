import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import PI_Test from "./Pages/PI_Test";

const Routers = () => {

    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/PI' element={<PI_Test />} />
            </Routes>
        </Router>
    )
  
};

export default Routers;
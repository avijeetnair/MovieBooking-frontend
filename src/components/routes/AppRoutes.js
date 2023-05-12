import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "../LandindPage/LandingPage";
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route
                exact path = "/"
                element = {<LandingPage/>}/>
            </Routes>
        </Router>
    )
};

export default AppRoutes;
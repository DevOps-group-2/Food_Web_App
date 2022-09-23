import './App.css';
import LoginPage from "./client/pages/loginPage/LoginPage.js";
import Pay from "./client/pages/payment/Pay.js";

import NavigationBar from "./client/components/navigationBar/NavigationBar";
import {Route, Switch, Routes, Link, useParams, useNavigate} from "react-router-dom";

function App() {
    return(
        <>

            <NavigationBar></NavigationBar>
            <div>
            <Routes>
                <Route path={"/about"} element={<LoginPage/>}/>
                <Route path={"/"} element={<h1>home</h1>}/>
                <Route path={"/pay"} element={<Pay/>}/>
            </Routes>
            </div>

        </>
    );
}

function About() {
    return <h1>About</h1>
}
function Home() {
    return
}

export default App;





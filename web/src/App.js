import './App.css';
import LoginPage from "./client/pages/loginPage/LoginPage.js";
import Pay from "./client/pages/payment/Pay.js";

import NavigationBar from "./client/components/navigationBar/NavigationBar";
//import {Route, Switch, Routes, Link, useParams, useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import PlaceOrder from "./client/pages/placeOrder/PlaceOrder";

function App() {
    return(
        <>

            <NavigationBar></NavigationBar>
            <div>
            <Routes>
                <Route path={"/about"} element={<h1>About us</h1>}/>
                <Route path={"/"} element={<h1>Home</h1>}/>
                <Route path={"/payment"} element={<Pay/>}/>
                <Route path={"/placeorder"} element={<PlaceOrder/>}/>
                <Route path={"/admin"} element={<LoginPage/>}/>
            </Routes>
            </div>

        </>
    );
}

/*function About() {
    return <h1>About</h1>
}
function Home() {
    return
}*/

export default App;





import './App.css';
import LoginPage from "./client/pages/loginPage/LoginPage.js";
import Pay from "./client/pages/payment/Pay.js";

import NavigationBar from "./client/components/navigationBar/NavigationBar";
//import {Route, Switch, Routes, Link, useParams, useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";

function App() {
    return(
        <>

            <NavigationBar></NavigationBar>
            <div>
            <Routes>

                <Route path={"/"} element={<h1>home</h1>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/menu"} element={<Menu/>}/>
                <Route path={"/order"} element={<Order/>}/>
                <Route path={"/contact"} element={<Contact/>}/>

                <Route path={"/about"} element={<h1>About us</h1>}/>
                <Route path={"/"} element={<h1>Home</h1>}/>
                <Route path={"/payment"} element={<Pay/>}/>
                <Route path={"/admin"} element={<LoginPage/>}/>


            </Routes>
            </div>

        </>
    );





function Menu() {
    return <h1>Menu</h1>
}
function Order() {
    return <h1>Order</h1>
}
function Contact() {
    return <h1>Contact Us</h1>
}

/*function About() {
    return <h1>About</h1>
}
function Home() {
    return
}*/


export default App;





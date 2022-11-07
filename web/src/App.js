import './App.css';
//import LoginPage from "./client/pages/loginPage/LoginPage.js";
//import Pay from "./client/pages/payment/Pay.js";

import NavigationBar from "./client/components/navigationBar/NavigationBar";
//import {Route, Switch, Routes, Link, useParams, useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import PlaceOrder from "./client/pages/placeOrder/PlaceOrder";
import Menu from "./client/pages/menu/Menu";

function App() {
    return (
        <>

            <NavigationBar></NavigationBar>
            <div>
                <Routes>

                    <Route path={"/"} element={<h1>home</h1>}/>
                    <Route path={"/menu"} element={<Menu/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"/login"} element={ {/*<LoginPage/>*/}}/>
                    <Route path={"/about"} element={<h1>About us</h1>}/>
                    <Route path={"/payment"} element={{/*<Pay/>*/}}/>
                    <Route path={"/placeorder"} element={<PlaceOrder/>}/>
                    <Route path={"/admin"} element={{/*<AppendingOrders/>*/}}/>
            </Routes>
            </div>

        </>
    );

    function Contact() {
        return <h1>Contact Us</h1>
    }
}

export default App;





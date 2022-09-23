import logo from './logo.svg';
import './App.css';
import LoginPage from "./client/pages/loginPage/LoginPage.js";
import NavigationBar from "./client/components/navigationBar/NavigationBar";
import {Route, Switch, Routes, Link, useParams, useNavigate} from "react-router-dom";

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
            </Routes>
            </div>

        </>

    );
}
/*
function App() {
  return (
    <div className="App">
      <Greeting userName={"Christian"}></Greeting>
      <Greeting userName={"Christian2"}></Greeting>
    </div>
  );
}
const Greeting = ({userName}) => {
  return (<h1>Hello, {userName}</h1>)
}

*/

function Menu() {
    return <h1>Menu</h1>
}
function Order() {
    return <h1>Order</h1>
}
function Contact() {
    return <h1>Contact Us</h1>
}

export default App;





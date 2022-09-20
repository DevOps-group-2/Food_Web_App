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
                <Route path={"/about"} element={<LoginPage/>}/>
                <Route path={"/"} element={<h1>home</h1>}/>
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

function About() {
    return <h1>About</h1>
}
function Home() {
    return
}

export default App;





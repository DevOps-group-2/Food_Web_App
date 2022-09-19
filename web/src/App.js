import logo from './logo.svg';
import './App.css';
import LoginPage from "./client/pages/loginPage/LoginPage.js";


function App() {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <header>Hello World2</header>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <LoginPage></LoginPage>
        </header>


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



export default App;





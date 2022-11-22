import React from "react";
import {Navigate} from "react-router-dom";
import Pay from "./Pay";


function PayWrapper(){
    const [buttonClicked, setButtonClicked] = React.useState(false);

    if (buttonClicked) {
        /*return <Navigate to={"/pay"}/>*/

        const data = {
            email: "unknownemail@gmail.com",
            address: "København",
            name: "My Name",
            productPrice: 20 * 100
        }
        return (
            <div>
                <Pay>{data}</Pay>
            </div>
        );
    }

    return(
        <div>
            <h2>This is a temporary payment button</h2>
            <h2>Click the button to go to payment page</h2>

            <form onSubmit={handleSubmit}>
                <button type="">Click here</button>
            </form>
        </div>
    );

    function handleSubmit(e) {
        console.log('You clicked submit.');
        setButtonClicked(true);
    }

}







export default PayWrapper;
import React from "react";
import {Navigate} from "react-router-dom";




function PayWrapper(){
    const [buttonClicked, setButtonClicked] = React.useState(false);

    if (buttonClicked) {
        return <Navigate to={"/pay"}/>
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

    function handleSubmit() {
        console.log('You clicked submit.');
        setButtonClicked(true);
    }

}







export default PayWrapper;
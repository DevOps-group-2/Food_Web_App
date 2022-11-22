import React, from "react";
import {Navigate} from "react-router-dom";


function PayWrapper(){
    const [buttonClicked, setButtonClicked] = React.useState(false);

    if (buttonClicked) {
        return <Navigate to={"/pay"}/>
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

    function handleSubmit() {
        console.log('You clicked submit.');
        setButtonClicked(true);
    }

}







export default PayWrapper;
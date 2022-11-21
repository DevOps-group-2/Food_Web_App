import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'
import {giraffeStore} from "./GiraffeStore";
import {observer} from "mobx-react-lite";


class Pay extends Component{
    render() {
        let para = (giraffeName,key) => <li key={key}>{giraffeName}</li>

        return (
            <div>

                <ul>
                    {giraffeStore.giraffes.map(para)}
                </ul>


                <StripeCheckout
                    token={handleToken}
                    stripeKey={"pk_test_51Ll7jrJEhBAUpm4shjFR2nezg1jK24pK7XdcovEOeogK4m2HZDdsQITlPVeXromKZoZjHrJO8iWlKhkrDyuOXy8Q00Fv9OdcdE"}
                    billingAddress
                    shippingAddress
                    amount={10 * 100}
                    currency={"dkk"}
                    name={"Information"}
                />

                <h1>Hello there</h1>



            </div>

        );
    }
}

const stripePrice = 10 * 100;
const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment


const handleToken = (token) => {
    // TODO

        console.log("hello there...")
/*        axios.post('http://localhost:8080/api/stripe/webhook', {
            amount: 10 * 100,
            token

        }).then((response) => {
            alert('payment success')

        }).catch((error) => {
                alert('Payment failed' + {error})
            })*/




    fetch(baseUrl + "api/stripe/webhook", {
/*        method: "POST",
        body: token.id,
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"*/
    }).then(function(response) {
        console.log(response);
        return response.text()
    }, function(error) {
        console.log(error.message) ;
    })

}



/*
return(
    <StripeCheckout
        amount={stripePrice}
        label="Pay Now"
        name="Wolf Elite"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description="Your total is" ${price}
        panelLabel="Pay Now"
        token={handleToken}
        stripeKey={publishableKey}
        currency="USD"
    />
)
*/


export default Pay;
//export default observer(Pay)

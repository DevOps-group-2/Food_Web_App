import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";


class Pay extends Component{
    render() {
        return (
            <div>
                <h1>This is a temporary payment button</h1>

                <StripeCheckout
                    token={handleToken}
                    stripeKey={"pk_test_51Ll7jrJEhBAUpm4shjFR2nezg1jK24pK7XdcovEOeogK4m2HZDdsQITlPVeXromKZoZjHrJO8iWlKhkrDyuOXy8Q00Fv9OdcdE"}
                    billingAddress
                    shippingAddress
                    amount={stripePrice}
                    currency={"dkk"}
                    name={"Information"}
                />
            </div>

        );
    }
}

const stripePrice = 15 * 100;
const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":""; //Check if dev environment

const handleToken = (token) => {
    // TODO


    fetch(baseUrl + "api/stripe/webhook", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({amount:5000,tokenId: token.id}),
        credentials: "same-origin"
    }).then(function(response) {

        response.json().then(r => console.log(r))
        console.log(response)
        alert('payment success' + {response})
        return response.text()
    }, function(error) {
        alert('Payment failed' + {error})
        console.log(error.message) ;
    })

}


export default Pay;
//export default observer(Pay)

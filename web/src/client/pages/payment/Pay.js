import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

class Pay extends Component{
    render() {
        return (
            <div>
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


const handleToken = (token) => {
    // TODO

        console.log("hello there...")
        axios.post('http: //localhost:8083/payment', {
            amount: 10 * 100,
            token

        }).then((response) => {
            alert('payment success')

        }).catch((error) => {
                alert('Payment failed' + {error})
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
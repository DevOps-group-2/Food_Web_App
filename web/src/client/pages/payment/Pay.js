import React, {Component, useState} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

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

/*const [product, setProduct] = useState({
    name: 'A product',
    price: 100
})*/


async function handleToken(token, addresses) {

    try {
        const response = await axios({
            url:'https://localhost:5000/payment',
            method:'post',
            data: {
                amount: product.price * 100,
                token
            }
        })

        if (response.status === 200) {
            console.log("Payment is successful!")
        }

    } catch {
        console.log("Payment error!")
    }




    // TODO
}


export default Pay;
import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";

class Pay extends Component{
    render() {
        return (
            <StripeCheckout
                token={handleToken}
                stripeKey={"pk_test_51Ll7jrJEhBAUpm4shjFR2nezg1jK24pK7XdcovEOeogK4m2HZDdsQITlPVeXromKZoZjHrJO8iWlKhkrDyuOXy8Q00Fv9OdcdE"}
                billingAddress
                shippingAddress
                amount={10 * 100}
                currency={"dkk"}
                name={"Information"}
            />
        );
    }
}


function handleToken(token, addresses) {
    // TODO
}


export default Pay;
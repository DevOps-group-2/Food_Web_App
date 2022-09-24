import React from "react";
import './PlaceOrder.module.css';
import BuyableFoodProducts from '../../components/placeOrder/menu/BuyableFoodProducts';

/*The place order page.*/
const PlaceOrder = () => {
    return (
        <>
            <main>
                <BuyableFoodProducts />
            </main>
        </>
    )
};

export default PlaceOrder;

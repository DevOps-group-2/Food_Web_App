import React, { useState } from "react";
import './PlaceOrder.module.css';
import BuyableFoodProducts from '../../components/placeOrder/menu/BuyableFoodProducts';

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

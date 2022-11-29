import React, { useState } from "react";
import './Style.module.css';
import Header from '../../components/placeOrder/basket/header/Header';
import BuyableFoodProducts from '../../components/placeOrder/menu/BuyableFoodProducts';
import Basket from '../../components/placeOrder/basket/Basket';
import BasketProvider from '../../components/placeOrder/basket/BasketProvider';

const PlaceOrder = () => {

    const [basketController, setBasketController] = useState(false);

    const openBasketController = () => {
        setBasketController(true);
    }
    const closeBasketController = () => {
        setBasketController(false);
    }

    return (
        <BasketProvider>
            {basketController && <Basket onClose={closeBasketController} />}
            <Header onOpen={openBasketController} />
            <main>
                <BuyableFoodProducts />
            </main>
        </BasketProvider>
    )
};

export default PlaceOrder;

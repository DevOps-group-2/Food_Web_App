import React, {useContext, useState} from 'react';
import css from './Style.module.css';

import BasketBox from '../layout/BasketBox';
import ContextOfBasket from './Context';
import BasketProduct from './BasketProduct';
import NotUsedForm from "../../../pages/customerForm/notUsed/NotUsedForm";
import ConfirmSendOrder from "./ConfirmSendOrder";
import axios from "axios";
import {tokenStore} from "../../../stores/TokenStore";
import foodProduct from "../menu/FoodProduct";
import CustomerForm from "../../../pages/customerForm/CustomerForm";

const myComponent = {
    width: '800px',
    height: '320px',
    overflow: 'scroll'
};

function CompletedPage() {
    setTimeout(function() {
        window.location.replace('form');
    }, 3000);
    console.log("Selecting Food completed..");
    return <h2>You'll now be redirected to fill out contact informations.</h2>;
}


const Basket = (props) => {
    const [isSending, setIsSending] = useState(false);
    const [didSend, setDidSend] = useState(false);

    const [displayBasket, setDisplayBasket] = useState(false), contextOfBasket = useContext(ContextOfBasket),
        totalPrice = `${contextOfBasket.totalAmount.toFixed(2)}`, basketHandler = () => {
            setDisplayBasket(true);
        }, basketRemove = (id) => {
            contextOfBasket.removeProduct(id);
        }, basketAdd = (item) => {
            contextOfBasket.addProduct({...item, amount: 1});
        }, hasProducts = contextOfBasket.foodProducts.length > 0,
        basketProducts = (
            <ul className={css['basket-products']}> {contextOfBasket.foodProducts.map((item) => (
                <BasketProduct key={item.id}
                               menu={item.menu}
                               amount={item.amount}
                               price={item.price}
                               onRemove={basketRemove.bind(null, item.id)}
                               onAdd={basketAdd.bind(null, item)}
                />
            ))}
            </ul>
        ), basketButton = (
            <div className={css.do}>
                <button onClick={props.onClose}> Close</button>
                {hasProducts && <button className={css.button} onClick={basketHandler}> Order </button>}
            </div>);

    const orderHandler = () => {
        setDisplayBasket(true);
    }

    const [errorMessage, setErrorMessage] = useState({});

    const submitOrderHandler = async () => {
        console.log(contextOfBasket.foodProducts);
        let fetching = await fetch("http://localhost:8080/api/orders", {
        //let fetching = await fetch("https://food-webapp.grp2.diplomportal.dk/api/orders", {
                headers : {
                    'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({
                    orderedFoodProducts: contextOfBasket.foodProducts,
                    orderedTotalPrice: contextOfBasket.totalAmount
            })
        })
        if (fetching != null) {
            setIsSending(false);
            setDidSend(true);
            contextOfBasket.clearBasket();
        } else {
            setErrorMessage("Invalid");
            renderErrorMessage()
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

    const basketBoxHandler = (
        <div className={css.styles}>
            <button className={css["button--alt"]} onClick={props.onClose}>
                Close
            </button>

            {hasProducts && (
                <button className={css.button} onClick={orderHandler}>
                    That's It
                </button>
            )}
        </div>
    );

    const sendOrderHandler = <BasketBox>
        <p>Being working on the order.</p>
    </BasketBox>

    const didSendOrderHandler = (
        <BasketBox>
            <div className={css.styles}>
                <button className={css.button} onClick={props.onClose}>
                    Cancel
                </button>
            </div>
            <p>Please fill the information so your order will be placed!</p>
            <div style={myComponent}>
                <CustomerForm/>
            </div>
        </BasketBox>);

    const basketBoxContent = (
        <BasketBox>
            {basketProducts}
            <div className= {css.baskettotal}>
                <span>Total Price</span>
                <span>{totalPrice}</span>
            </div>
            {displayBasket && <ConfirmSendOrder
                onConfirm={submitOrderHandler} onClose= {props.onClose}/> }
            {!displayBasket && basketBoxHandler}
        </BasketBox>);

    return (
        <BasketBox onClose= {props.onClose}>
            {isSending && !didSend && sendOrderHandler}
            {!isSending && !didSend && basketBoxContent}
            {didSend && didSendOrderHandler}
        </BasketBox>
  )
};

export default Basket;
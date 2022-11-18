import React, {useContext, useState} from 'react';
import css from './Style.module.css';

import BasketBox from '../layout/BasketBox';
import ContextOfBasket from './Context';
import BasketProduct from './BasketProduct';
import CustomerForm from "../../../pages/customerForm/CustomerForm";
import Context from "./Context";
import ConfirmSendOrder from "./ConfirmSendOrder";
import TestForm from "../../../pages/customerForm/final/TestForm";

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

    const basketContext = useContext(Context);
    const [isSending, setIsSending] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const [displayBasket, setDisplayBasket] = useState(false), contextOfBasket = useContext(ContextOfBasket),
        totalPrice = `${contextOfBasket.totalAmount.toFixed(2)}`, basketHandler = () => {
            setDisplayBasket(true);
        }, basketRemove = (id) => {
            contextOfBasket.removeProduct(id);
        }, basketAdd = (item) => {
            contextOfBasket.addProduct({...item, amount: 1});
        }, hasProducts = contextOfBasket.foodProducts.length > 0, basketProducts = (
            <ul className={css['basket-products']}> {contextOfBasket.foodProducts.map((data) => (
                <BasketProduct key={data.id}
                               menu={data.menu}
                               amount={data.amount}
                               price={data.price}
                               onRemove={basketRemove.bind(null, data.id)}
                               onAdd={basketAdd.bind(null, data)}
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

    const submitOrderHandler = () => {
        setIsSending(true);
        //fetch('http://localhost:8080/api/orders', {
        fetch('https://food-webapp.grp2.diplomportal.dk/api/orders', {
            method: 'POST',
            body: JSON.stringify({
                orderedFoodProducts: basketContext.foodProducts
            })
        });
        setIsSending(false);
        setDidSubmit(true);
    };

    const basketBoxHandler = (
        <div className={css.styles}>
            <button className={css["button--alt"]} onClick={props.onClose}>
                Close
            </button>

            {hasProducts && (
                <button className={css.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const sendOrderHandler = <BasketBox>
        <p>Being working on the order.</p>
    </BasketBox>

    /*
    * const didSendOrderHandler = (
        <BasketBox>
            <p>Your order has been placed!</p>
            <div className={css.styles}>
                <button className={css.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
            <CustomerForm />
        </BasketBox>);*/

    const didSendOrderHandler = (
        <BasketBox>
            <div className={css.styles}>
                <button className={css.button} onClick={props.onClose}>
                    Cancel
                </button>
            </div>
            <p>Please fill the information so your order will be placed:</p>
            <div style={myComponent}>
                <TestForm/>
            </div>
        </BasketBox>);

    /*const basketBoxContent = (
        <BasketBox onClose={props.onClose}>
            {basketProducts}
            <div className={css.baskettotal}>

                <span>Total Price:</span>
                <span>{totalPrice} DKK</span>
            </div>
            <div style={{ height: '320px' }}>
                <div style={myComponent}>
                    {displayBasket && <ConfirmSendOrder onConfirm={submitOrderHandler} onClose= {props.onClose}/> }

                    {!displayBasket && basketButton && modalActions}
                </div>
            </div>
        </BasketBox>);
*/

    const basketBoxContent = (
        <BasketBox>
            {basketProducts}
            <div className= {css.baskettotal}>
                <span>Total Amount</span>
                <span>{totalPrice}</span>
            </div>
            {displayBasket && <ConfirmSendOrder onConfirm={submitOrderHandler} onClose= {props.onClose}/> }
            {!displayBasket && basketBoxHandler}
        </BasketBox>);

    return (
        <BasketBox onClose= {props.onClose}>
            {isSending && !didSubmit && sendOrderHandler}
            {!isSending && !didSubmit && basketBoxContent}
            {didSubmit && didSendOrderHandler}
        </BasketBox>
  )
};

export default Basket;
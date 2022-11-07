import React, {useContext, useState} from 'react';
import css from './Style.module.css';

import BasketBox from '../layout/BasketBox';
import ContextOfBasket from './Context';
import BasketProduct from './BasketProduct';

function CompletedPage() {
    setTimeout(function() {
        window.location.replace('form');
    }, 3000);
    console.log("Selecting Food completed..");
    return <h2>You'll now be redirected to fill out contact informations.</h2>;
}


const Basket = (props) => {
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


    return (
        <BasketBox onClose={props.onClose}>
            {basketProducts}
            <div className={css.baskettotal}>

                <span>Total Price:</span>
                <span>{totalPrice} DKK</span>
            </div>
            {displayBasket && <CompletedPage onClick={props.onClose}/>}
            {!displayBasket && basketButton}
        </BasketBox>
    )
};

export default Basket;
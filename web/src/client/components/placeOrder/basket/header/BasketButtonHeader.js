import React, { useContext } from 'react';
import css from './Style.module.css';
import ContextOfBasket from '../Context';
 
const BasketButtonHeader = (props) => {
    const contextOfBasket = useContext(ContextOfBasket),
        amountBasketProducts = contextOfBasket.foodProducts.reduce((curNumber, item) => {
            return (curNumber + item.amount);
        }, 0);
    return (
    <button className={css.button} onClick={props.onClick}>
      <span>Basket</span>
      <span className={css.badge}> {amountBasketProducts} </span>
    </button>
  )
};

export default BasketButtonHeader;
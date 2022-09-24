import React from 'react';
import css from './Style.module.css';

/*Basket Button (in-progress), that is goint to show amount of products added.*/
const BasketButtonHeader = () => {
    return (
    <button className={css.button}>
      <span>Basket [amount]</span>
    </button>
  )
};

export default BasketButtonHeader;
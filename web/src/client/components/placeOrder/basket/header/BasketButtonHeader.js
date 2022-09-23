import React from 'react';
import css from './Style.module.css';
 
const BasketButtonHeader = () => {
    return (
    <button className={css.button}>
      <span>Basket [amount]</span>
    </button>
  )
};

export default BasketButtonHeader;
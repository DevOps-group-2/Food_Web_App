import React from 'react';
import FoodProductAmount from './FoodProductAmount';
import css from './Style.module.css';

const FoodProduct = (props) => {
  /*Adding two decimals to the prices.*/
  const price = `${props["price"].toFixed(2)}`;

  /*Showing the food products..*/
  return (
    <><li>
      <div>
       <h2> {props.menu} </h2>
       <div> {props.info} </div>
       <div> {props.time} </div>
       <div className={css.text}> {price} DKK</div>
      </div>
        <div><FoodProductAmount /></div>
    </li></>
  )
}

export default FoodProduct;
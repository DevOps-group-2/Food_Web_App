import React from 'react'
import { useContext } from 'react';
import css from './Style.module.css';
import FoodProductAmount from './FoodProductAmount';
import ContextOfBasket from '../basket/Context';

const FoodProduct = (props) => {

  const contextOfBasket = useContext(ContextOfBasket);
  const price = `${props.price.toFixed(2)}`;

  const addToBasket = (amount) => {
    contextOfBasket.addProduct({
      id: props.id,
      menu: props.menu,
      price: props.price,
      amount: amount
    });
  };
  
  return (
    <>
     <li className={css.foodproduct}>
      <div>
       <h2> {props.menu} </h2>
       <div className={css.info}> {props.info} </div>
       <>{"\u00a0"}
       </>
       <>{"\u00a0"}
       <div className={css.price}> {price} DKK</div>
       </>
      </div>

        <div><FoodProductAmount onAddToCart={addToBasket} /></div>
      
    </li>
    </>
  )
}

export default FoodProduct;
import React from 'react'
import { useContext } from 'react';
import css from './Style.module.css';
import FoodProductAmount from './FoodProductAmount';
import ContextOfBasket from '../basket/Context';
import Basket from "../basket/Basket";

const FoodProduct = (props) => {

  const contextOfBasket = useContext(ContextOfBasket);
  const price = `${props.price.toFixed(2)}`;

  const addToBasket = (amount) => {
      /*Only one foodtype can be added.*/
      if(contextOfBasket.foodProducts <= 0) {
          contextOfBasket.addProduct({
              id: props.id,
              menu: props.menu,
              price: props.price,
              amount: amount,
          });
      }
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
         <div className={contextOfBasket.foodProducts <= 1 ? 'item active' : 'item'}>
             <div><FoodProductAmount onAddToCart={addToBasket} /></div>
         </div>
         {/*{(this.contextOfBasket.foodProducts <= 1 ?
                 ( <div><FoodProductAmount onAddToCart={addToBasket} /></div>)
                 : (<h1>Message..</h1>)
         )}*/}
      
    </li>
    </>
  )
}

export default FoodProduct;
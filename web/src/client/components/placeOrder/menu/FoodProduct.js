import React, {Fragment} from 'react'
import { useContext } from 'react';
import css from './Style.module.css';
import FoodProductAmount from './FoodProductAmount';
import ContextOfBasket from '../basket/Context';
import AppendingOrders from "../../../../adminDashboard/dashboard/components/appendingOrders/AppendingOrders";

const FoodProduct = (props) => {

  const contextOfBasket = useContext(ContextOfBasket);
  const price = `${props.price.toFixed(2)}`;
  const appending = "appending";

  const addToBasket = (amount) => {
      /*Only one foodtype can be added.*/
      if(contextOfBasket.foodProducts <= 0) {
          contextOfBasket.addProduct({
              id: props.id,
              menu: props.menu,
              price: props.price,
              amount: amount,
              status: appending
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
         <div><FoodProductAmount onAddToCart={addToBasket} /></div>
    </li>
    </>
  )
}

export default FoodProduct;
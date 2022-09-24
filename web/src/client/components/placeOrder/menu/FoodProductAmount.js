import React from 'react'
import css from './Style.module.css';

/*Add button (in-progres), which is going to add the selected
* product to the basket.*/
const FoodProductAmount = () => {

  function sendRequest(event) {
      //TODO
  }

  return (
    <>
      <form onSubmit={sendRequest}>
        <button className={css.button}>Add to Basket</button>
      </form>
    </>
  )
}

export default FoodProductAmount;
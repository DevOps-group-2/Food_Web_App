import React from 'react'
import css from './Style.module.css';

const FoodProductAmount = () => {

  function sendRequest(event) {
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
import React, { useRef, useState } from 'react'
import css from './Style.module.css';
import AmountSelection from '../layout/AmountSelection';

const FoodProductAmount = (props) => {

  /*Input to put amount of foodproducts.*/
  const customerInput = useRef();
  /*Only positive from 1-10, and will be deleted when going down to 0.*/
  const [isCorrectAmount, setIsCorrectAmount] = useState(false)

  function sendRequest(event) {
    event.preventDefault();
    const typed = customerInput.current.value, typedAmount = +typed;
    if (typed.trim().length === 0 || typedAmount < 1 || typedAmount > 10) {
      setIsCorrectAmount(false);
      return;
    }
    props.onAddToCart(typedAmount);
  }

  return (
    <>
      <form className={css.form} onSubmit={sendRequest}>
        <AmountSelection
        ref={customerInput}
        label= 'Amount'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1'
        }}
        />
        <button>+</button>
        {isCorrectAmount && <p>Valid numbers are 1-5.</p>}
      </form>
    </>
  )
}

export default FoodProductAmount;
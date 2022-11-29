import css from './Style.module.css';

const FoodProductAmount = (props) => {

  function sendRequest(event) {
    event.preventDefault();
    /*You're only able to add one dish at a time.*/
    props.onAddToCart(1);
  }

  return (
    <>
      <form className={css.form} onSubmit={sendRequest}>
        <button>Add To Basket</button>
      </form>
    </>
  )
}

export default FoodProductAmount;
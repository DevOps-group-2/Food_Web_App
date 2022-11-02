import css from './Style.module.css';

const BasketProduct = (props) => {
  const price =`${props.price.toFixed(2)}`;
  return (
    <li className={css['basket-product']}>
      <div>
        <h2>{props.menu}</h2>
        <div className={css.text}>
          <span className={css.price}>{price} DKK</span>
          <span className={css.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={css.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default BasketProduct;

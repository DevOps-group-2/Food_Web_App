import React, { useReducer } from 'react';
import ContextOfBasket from './Context';

const defaultBasketState = {
  items: [],
  totalAmount: 0
};

/*Add and remove function related to the basket.*/
const basketReducer = (state, action) => {
  if (action.type !== 'add-product') {
    if (action.type === 'remove-product') {
      /*BasketProducts are meant to be inside the basket.*/
      const IndexOfBasketProducts = state.items.findIndex(
          (item) => item.id === action.id
      );
      const BasketProduct = state.items[IndexOfBasketProducts];
      const newTotalPrice = state.totalAmount - BasketProduct.price;
      let newBasketItems;

      if (BasketProduct.amount !== 1) {
        const newProduct = {...BasketProduct, amount: BasketProduct.amount - 1};
        newBasketItems = [...state.items];
        newBasketItems[IndexOfBasketProducts] = newProduct;
      } else {
        newBasketItems = state.items.filter(item => item.id !== action.id);
      }

      return {
        items: newBasketItems,
        totalAmount: newTotalPrice
      };
    }
    return defaultBasketState;
  } else {
    const newTotalPrice = state.totalAmount + action.item.price * action.item.amount,
        BasketProductIndex = state.items.findIndex((item) => item.id === action.item.id),
        BasketProduct = state.items[BasketProductIndex];
    let newBasketItems;

    if (!BasketProduct) {
      newBasketItems = state.items.concat(action.item);
    } else {
      const newProduct = {
        ...BasketProduct,
        amount: BasketProduct.amount + action.item.amount,
      };
      newBasketItems = [...state.items];
      newBasketItems[BasketProductIndex] = newProduct;
    }
    return {
      items: newBasketItems,
      totalAmount: newTotalPrice,
    };
  }
};
const BasketProvider = (props) => {
  const [basketState, sendBasketChanges] = useReducer(basketReducer, defaultBasketState);

  /*Add function*/
  const addProductToBasket = (item) => {
    sendBasketChanges({type: 'add-product', item: item});
  };

  /*remove function*/
  const removeProductFromBasket = (id) => {
    sendBasketChanges({type: 'remove-product', id: id});
  };

  const contextOfBasket = {
    foodProducts: basketState.items,
    totalAmount: basketState.totalAmount,
    addProduct: addProductToBasket,
    removeProduct: removeProductFromBasket,
  };

  return (
    <ContextOfBasket.Provider value={contextOfBasket}>
      {props.children}
    </ContextOfBasket.Provider>
  )
};

export default BasketProvider;

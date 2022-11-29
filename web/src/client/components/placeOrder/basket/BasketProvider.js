import React, { useReducer } from 'react';
import ContextOfBasket from './Context';

const defaultBasketState = {
  foodProducts: [],
  totalAmount: 0
};

/*Add and remove function related to the basket.*/
const basketReducer = (state, action) => {
  if (action.type !== 'add-product') {
    if (action.type === 'remove-product') {
      /*BasketProducts are meant to be inside the basket.*/
      const IndexOfBasketProducts = state.foodProducts.findIndex(
          (item) => item.id === action.id
      );
      const BasketProduct = state.foodProducts[IndexOfBasketProducts];
      const newTotalPrice = state.totalAmount - BasketProduct.price;
      let newBasketItems;

      if (BasketProduct.amount !== 1) {
        const newProduct = {...BasketProduct, amount: BasketProduct.amount - 1};
        newBasketItems = [...state.foodProducts];
        newBasketItems[IndexOfBasketProducts] = newProduct;
      } else {
        newBasketItems = state.foodProducts.filter(item => item.id !== action.id);
      }

      return {
        foodProducts: newBasketItems,
        totalAmount: newTotalPrice
      };
    }
    return defaultBasketState;
  } else {
    const newTotalPrice = state.totalAmount + action.item.price * action.item.amount,
        BasketProductIndex = state.foodProducts.findIndex((item) => item.id === action.item.id),
        BasketProduct = state.foodProducts[BasketProductIndex];
    let newBasketItems;

    if (!BasketProduct) {
      newBasketItems = state.foodProducts.concat(action.item);
    } else {
      const newProduct = {
        ...BasketProduct,
        amount: BasketProduct.amount + action.item.amount,
      };
      newBasketItems = [...state.foodProducts];
      newBasketItems[BasketProductIndex] = newProduct;
    }
    return {
      foodProducts: newBasketItems,
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

  const clearBasket = () => {
    sendBasketChanges({type: 'CLEAR'});
  }

  const contextOfBasket = {
    foodProducts: basketState.foodProducts,
    totalAmount: basketState.totalAmount,
    addProduct: addProductToBasket,
    removeProduct: removeProductFromBasket,
    clearBasket: clearBasket
  };

  return (
    <ContextOfBasket.Provider value={contextOfBasket}>
      {props.children}
    </ContextOfBasket.Provider>
  )
};

export default BasketProvider;

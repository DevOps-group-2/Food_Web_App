import React, { useReducer } from 'react';
import ContextOfBasket from './Context';

const stateOfBasket = {
  foodProducts: [],
  totalAmount: 0
};

/*Add and remove function related to the basket.*/
const basketReducer = (state, activity) => {
  if (activity.type !== 'add-product') {
    if (activity.type === 'remove-product') {
      /*BasketProducts are meant to be inside the basket.*/
      const IndexOfBasketProducts = state.foodProducts.findIndex(
          (item) => item.id === activity.id
      );
      const BasketProduct = state.foodProducts[IndexOfBasketProducts];
      const newTotalPrice = state.totalAmount - BasketProduct.price;
      let newBasketItems;

      if (BasketProduct.amount !== 1) {
        const newProduct = {...BasketProduct, amount: BasketProduct.amount - 1};
        newBasketItems = [...state.foodProducts];
        newBasketItems[IndexOfBasketProducts] = newProduct;
      } else {
        newBasketItems = state.foodProducts.filter(item => item.id !== activity.id);
      }
      return {
        foodProducts: newBasketItems,
        totalAmount: newTotalPrice
      };
    }
    return stateOfBasket;
  } else {
    const newTotalPrice = state.totalAmount + activity.item.price * activity.item.amount,
        BasketProductIndex = state.foodProducts.findIndex((item) => item.id === activity.item.id),
        BasketProduct = state.foodProducts[BasketProductIndex];
    let newBasketItems;

    if (!BasketProduct) {
      newBasketItems = state.foodProducts.concat(activity.item);
    } else {
      const newProduct = {
        ...BasketProduct,
        amount: BasketProduct.amount + activity.item.amount,
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
  const [basketState, sendBasketChanges] = useReducer(basketReducer, stateOfBasket);

  /*Add function*/
  const addProductToBasket = (item) => {
    sendBasketChanges({type: 'add-product', item: item});
  };

  /*remove function*/
  const removeProductFromBasket = (id) => {
    sendBasketChanges({type: 'remove-product', id: id});
  };

  const clearBasket = () => {
    sendBasketChanges({type: 'clear'});
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

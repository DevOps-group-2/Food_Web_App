import React from 'react';

let ContextOfBasket;
ContextOfBasket = React.createContext({
  foodProducts: [], totalAmount: 0,
  addProduct: () => {
  }, removeProduct: () => {
  }
});

export default ContextOfBasket;

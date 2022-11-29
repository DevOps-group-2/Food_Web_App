import React from 'react';

const ContextOfBasket = React.createContext({
    foodProducts: [],
    totalAmount: 0,
    addProduct: (item) => {},
    removeProduct: (id) => {}/*,
    clearCart : () => {}*/
});

export default ContextOfBasket;

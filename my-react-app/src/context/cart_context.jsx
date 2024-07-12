import React, { createContext, useState } from 'react';
import AllProductes from '../components/allproductes';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  AllProductes.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
}

const CartContext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addItems = (itemID) => {
    setCartItems(prev => ({
      ...prev,
      [itemID]: prev[itemID] + 1
    }));
  }

  const removeItems = (itemID) => {
    setCartItems(prev => ({
      ...prev,
      [itemID]: prev[itemID] - 1
    }));
  }

  const contextValue = { cartItems, addItems, removeItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default CartContext;

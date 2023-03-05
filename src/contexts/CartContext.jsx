import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // update items amount
  useEffect(() => {
    const amount = cart.reduce((accumulator, current) => {
      return accumulator + current.amount;
    }, 0);
    setItemAmount(amount);
  });

  // total price
  useEffect(() => {
    const total = cart.reduce((acc, courant) => {
      return acc + courant.price * courant.amount;
    }, 0);

    setTotal(total);
  });
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    console.log(cartItem, " ali");
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id !== id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            amount: cartItem.amount - 1,
          };
        } else {
          return item;
        }
      });
      console.log(newCart);
      setCart(newCart);
    }
    console.log(cartItem.amount);
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseAmount,
        increaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import { useState, createContext } from "react";
import { Link } from "react-router-dom";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart((c) => [...c, product]);
  }

  function clearCart() {
    if (window.confirm("Are you sure you want to remove your cart items?")) {
      setCart([]);
    }
  }

  const cartState = {
    cart,
    addProduct,
    clearCart,
  };
  console.log(cart);

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}

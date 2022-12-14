import { useContext } from "react";

import { CartContext } from "../context/CartProvider";
import CartItems from "../components/CartItems";

import "../styles/cart.scss";

export default function Cart({ children }) {
  const { cart, clearCart } = useContext(CartContext);

  function renderTotal() {
    if (cart.length > 0) {
      return cart.reduce((prev, curr) => prev + curr.price, 0);
    }

    return false;
  }

  function renderCart() {
    return cart.map((product) => {
      return <CartItems key={product.id} product={product} />;
    });
  }

  console.log(cart);
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div>{renderCart()}</div>
      <div className="checkout-content">
        Your Total Comes To- ${renderTotal() || "N/A"}
        <button>Check-Out</button>
      </div>
      <div className="clear-cart-content">
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}

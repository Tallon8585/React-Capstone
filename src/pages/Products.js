import { createContext, useContext, useEffect, useState } from "react";

import "../styles/product.scss";

import MerchItem from "../components/MerchItem";
import { CartContext } from "../context/CartProvider";

export const productContext = createContext();

export default function Products() {
  const [merch, setMerch] = useState({});
  const [category, setCategory] = useState("");
  const { clearCart, addProduct } = useContext(CartContext);

  function renderMerch() {
    return merch.map((product) => {
      return (
        <MerchItem key={product.id} product={product} addProduct={addProduct} />
      );
    });
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products${category}`)
      .then((res) => res.json())

      .then((data) => {
        setMerch(data);
      })
      .catch((err) => {
        console.error("Get Merch Error: ", err);
      });
  }, [category]);

  return (
    <div className="page-wrapper">
      <div className="title">
        <h1>Products</h1>
      </div>
      <div className="category-btns">
        <button onClick={() => setCategory("/category/jewelery")}>
          Jewelery
        </button>
        <button onClick={() => setCategory("/category/electronics")}>
          Electronics
        </button>
        <button onClick={() => setCategory("/category/men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => setCategory("/category/women's clothing")}>
          Women's Clothing
        </button>
        <button onClick={() => setCategory("")}>All Products</button>
      </div>
      <div className="mid-content">
        {merch.length > 0 ? renderMerch() : "...loading"}
      </div>
      <div className="clear-cart">
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import MerchItem from "../components/MerchItem";

import "../styles/home.scss";
import "../styles/merch-item.scss";

export default function Home() {
  const [merch, setMerch] = useState([]);

  function renderMerch() {
    return merch.map((product) => {
      return <MerchItem key={product.id} product={product} />;
    });
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        // [{id:1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]
        const randomData = [];

        setMerch(data);
      })
      .catch((err) => {
        console.error("Get Merch Error: ", err);
      });
  }, []);

  return (
    <div className="page-container">
      <div className="top-content">
        <h1>Welcome to Blobby Lobby</h1>
        <p>
          If you dont't have a gift for you loved ones for the holiday we have
          you covered!
          <br /> Brows out fine assourtment of all the gifts you will need to
          make your loved ones smile.
        </p>
      </div>
      <h1>Featured Products</h1>
      <div className="mid-content">
        {merch.length > 0 ? renderMerch() : "...loading"}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

import "../styles/cart-items.scss";

export default function CartItem(props) {
  const { image, id, description, title, price } = props.product;

  return (
    <div className="cart-items-container">
      <h3>
        <Link to={`/products/${id}`}>{title}</Link>
      </h3>
      <img src={image} />
      {/* <h4>{description}</h4> */}
      <h4>Price- ${price}</h4>
    </div>
  );
}

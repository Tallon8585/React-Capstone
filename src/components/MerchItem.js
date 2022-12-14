import { Link } from "react-router-dom";

import "../styles/merch-item.scss";

export default function MerchItem(props) {
  const { image, id, description, title } = props.product;

  function Truncate() {
    function renderTruncatedChild() {
      if (description.length <= 30) {
        return description;
      }

      return (
        description.slice(0, 30) +
        `${description.ellipses ? description.ellipses.repeat(10) : "..."}`
      );
    }
    return renderTruncatedChild();
  }

  return (
    <div className="merch-container">
      <div className="top-wrapper">
        <h5>
          <Link className="product-link" to={`/products/${id}`}>
            {title}
          </Link>
        </h5>
        <img src={image} />
      </div>
      <div className="bottom-wrapper">
        <h4>{Truncate()}</h4>
        <button onClick={() => props.addProduct(props.product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

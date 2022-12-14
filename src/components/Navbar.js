import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-side">
        <FontAwesomeIcon icon="fa-solid fa-dragon" />
        <Link className="home" to="/home">
          Home
        </Link>
        <Link className="product" exact="true" to="/products">
          Products
        </Link>
      </div>
      <div className="middle">
        <Link className="contact" exact="true" to="/contact">
          Contact
        </Link>
        <Link className="about" exact="true" to="/about">
          About
        </Link>
      </div>
      <div className="right-side">
        <Link className="cart" exact="true" to="/cart">
          <FontAwesomeIcon icon="shopping-cart" />
        </Link>
      </div>
    </div>
  );
}

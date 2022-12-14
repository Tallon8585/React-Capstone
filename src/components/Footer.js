import { Link } from "react-router-dom";

import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer-content">
      <Link to="/home">Home</Link>
      <Link exact="true" to="/contact">
        Contact
      </Link>
      <Link exact="true" to="./about">
        About
      </Link>
    </div>
  );
}

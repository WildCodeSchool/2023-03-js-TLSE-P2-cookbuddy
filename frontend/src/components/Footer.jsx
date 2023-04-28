import { Link } from "react-router-dom";
import "../styles/components/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Link to="/" className="logo" />
        <div className="wild">
          Made with <i className="bi bi-balloon-heart-fill" /> in Toulouse
        </div>
        <div id="edamam-badge" data-color="badge" />
      </div>
    </footer>
  );
}

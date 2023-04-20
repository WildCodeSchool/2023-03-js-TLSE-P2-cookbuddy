import { Link } from "react-router-dom";
import "../styles/components/Footer.scss";
import "../styles/App.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Link to="/" className="logo" />
        <div className="wild">Made with ❤️ in Toulouse</div>
        <div id="edamam-badge" data-color="badge" />
      </div>
    </footer>
  );
}

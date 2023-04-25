import "../styles/App.scss";
import "../styles/components/NavBar.scss";
import logo from "../assets/logo-color-full.svg";

export default function NavBar() {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <img className="logo" src={logo} alt="logo Cook Buddy" />
          <button className="dark-mode" type="button">
            <i className="bi bi-moon-fill" />
          </button>
        </div>
      </div>
      <div className="search-container">
        <input
          className="input--search-bar"
          type="text"
          placeholder="Enter ingredients or recipe"
        />
      </div>
    </>
  );
}

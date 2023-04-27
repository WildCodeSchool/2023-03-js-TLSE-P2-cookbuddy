import "../styles/App.scss";
import "../styles/components/NavBar.scss";
import PropTypes from "prop-types";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar({ darkmode, toggleDarkmode }) {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          {darkmode ? (
            <img
              className="logo"
              src="assets/logo/logo-color-dark-mode.svg"
              alt="logo Cook Buddy"
            />
          ) : (
            <img
              className="logo"
              src="assets/logo/logo-color-full.svg"
              alt="logo Cook Buddy"
            />
          )}

          <DarkModeToggle darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
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

NavBar.propTypes = {
  darkmode: PropTypes.bool.isRequired,
  toggleDarkmode: PropTypes.func.isRequired,
};

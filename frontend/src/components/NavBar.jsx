import "../styles/App.scss";
import "../styles/components/NavBar.scss";
import PropTypes from "prop-types";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar({
  darkmode,
  toggleDarkmode,
  setAreFiltersVisible,
}) {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <img
            className="logo"
            src={`assets/logo/logo-color-${
              darkmode ? "dark-mode" : "full"
            }.svg`}
            alt="logo Cook Buddy"
          />

          <DarkModeToggle darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
        </div>
      </div>
      <div
        className="search-container"
        onClick={() => setAreFiltersVisible(true)}
        aria-hidden
      >
        <input
          className="input--search-bar"
          type="text"
          placeholder="Enter ingredients or recipe"
          disabled
        />
      </div>
    </>
  );
}

NavBar.propTypes = {
  darkmode: PropTypes.bool.isRequired,
  toggleDarkmode: PropTypes.func.isRequired,
  setAreFiltersVisible: PropTypes.func.isRequired,
};

NavBar.propTypes = {
  setAreFiltersVisible: PropTypes.func.isRequired,
};

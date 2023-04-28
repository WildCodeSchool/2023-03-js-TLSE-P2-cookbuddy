import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

import "../styles/components/SearchPageNavBar.scss";

function SearchPageNavBar({ setAreFiltersVisible, darkmode, toggleDarkmode }) {
  return (
    <div className="navbar-container">
      <div className="navbar-search-page">
        <Link to="/" className="logo">
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
        </Link>
        <Link
          to="/"
          className="action-button--md action-button action-button--grey--border arrow"
        >
          <i className="bi bi-arrow-left" />
        </Link>
        <div
          className="search-page-container"
          onClick={() => setAreFiltersVisible(true)}
          aria-hidden
        >
          <input
            className="input--search-bar"
            type="text"
            placeholder="Enter ingredients or recipe"
            disabled
          />
          <button
            className="action-button--md action-button action-button--grey--border filters"
            type="button"
          >
            <i className="bi bi-sliders" />
          </button>
        </div>
        <DarkModeToggle darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
      </div>
    </div>
  );
}

SearchPageNavBar.propTypes = {
  setAreFiltersVisible: PropTypes.func.isRequired,
  darkmode: PropTypes.bool.isRequired,
  toggleDarkmode: PropTypes.func.isRequired,
};

export default SearchPageNavBar;

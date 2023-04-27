import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/App.scss";
import "../styles/components/SearchPageNavBar.scss";

function SearchPageNavBar({ setAreFiltersVisible }) {
  return (
    <div className="navbar-container">
      <div className="navbar-search-page">
        <Link to="/" className="logo">
          <img
            className="logo"
            src="assets/logo/logo-color-full.svg"
            alt="logo CookBuddy"
          />
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
        <DarkModeToggle />
      </div>
    </div>
  );
}

SearchPageNavBar.propTypes = {
  setAreFiltersVisible: PropTypes.func.isRequired,
};

export default SearchPageNavBar;

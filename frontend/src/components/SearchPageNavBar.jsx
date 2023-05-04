import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

import "../styles/components/SearchPageNavBar.scss";

function SearchPageNavBar({
  setAreFiltersVisible,
  darkmode,
  toggleDarkmode,
  totalActiveFilters,
  searchQueryText,
}) {
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
            type="text"
            className="input--search-bar"
            placeholder="Enter ingredients or recipe"
            value={searchQueryText}
            disabled
          />

          <button
            className="action-button--md action-button action-button--grey--border filters"
            type="button"
          >
            <i className="bi bi-sliders" />
            {totalActiveFilters > 0 && <span>{totalActiveFilters}</span>}
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
  searchQueryText: PropTypes.string,
  totalActiveFilters: PropTypes.number,
};

SearchPageNavBar.defaultProps = {
  searchQueryText: "",
  totalActiveFilters: 0,
};

export default SearchPageNavBar;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/App.scss";
import "../styles/components/SearchPageNavBar.scss";

function SearchPageNavBar({
  setAreFiltersVisible,
  totalActiveFilters,
  searchQueryText,
}) {
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
          {searchQueryText !== "" ? (
            <input
              type="text"
              className="input--search-bar"
              placeholder="Enter ingredients or recipe"
              value={searchQueryText}
              disabled
            />
          ) : (
            <input
              className="input--search-bar"
              type="text"
              placeholder="Enter ingredients or recipe"
              disabled
            />
          )}

          <button
            className="action-button--md action-button action-button--grey--border filters"
            type="button"
          >
            <i className="bi bi-sliders" />
            {totalActiveFilters > 0 && <span>{totalActiveFilters}</span>}
          </button>
        </div>
        <button className="dark-mode" type="button">
          <i className="bi bi-moon-fill" />
        </button>
      </div>
    </div>
  );
}

SearchPageNavBar.propTypes = {
  setAreFiltersVisible: PropTypes.func.isRequired,
  searchQueryText: PropTypes.string,
  totalActiveFilters: PropTypes.number,
};

SearchPageNavBar.defaultProps = {
  searchQueryText: "",
  totalActiveFilters: 0,
};

export default SearchPageNavBar;

import "../styles/App.scss";
import "../styles/components/SearchPageNavBar.scss";

function SearchPageNavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img
          className="logo"
          src="assets/logo/logo-color-full.svg"
          alt="logo Cook Buddy"
        />
        <div className="search-page-container">
          <button
            className="action-button--md action-button action-button--grey--border arrow"
            type="button"
          >
            <i className="bi bi-arrow-left" />
          </button>
          <input
            className="input--search-bar"
            type="text"
            placeholder="Enter ingredients or recipe"
          />
          <button className="action-button--md search" type="button">
            Search
            <i className="bi bi-chevron-right" />
          </button>
          <button className="dark-mode" type="button">
            <i className="bi bi-sliders" />
          </button>
        </div>
        <button className="dark-mode" type="button">
          <i className="bi bi-moon-fill" />
        </button>
      </div>
    </div>
  );
}

export default SearchPageNavBar;

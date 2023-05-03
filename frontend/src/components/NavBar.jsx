import "../styles/App.scss";
import "../styles/components/NavBar.scss";
import PropTypes from "prop-types";

export default function NavBar({
  setAreFiltersVisible,
  setIsMetabolismCalculatorVisible,
}) {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <img
            className="logo"
            src="assets/logo/logo-color-full.svg"
            alt="logo Cook Buddy"
          />
          <div className="navbar-buttons">
            <button
              className="metabolism-button"
              type="button"
              onClick={() => setIsMetabolismCalculatorVisible(true)}
            >
              <i className="bi bi-calculator" />
              <span>Metabolism calculator</span>
            </button>
            <button className="dark-mode" type="button">
              <i className="bi bi-moon-fill" />
            </button>
          </div>
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
  setAreFiltersVisible: PropTypes.func.isRequired,
  setIsMetabolismCalculatorVisible: PropTypes.func.isRequired,
};

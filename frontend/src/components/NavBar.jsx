import "../styles/App.scss";
import "../styles/components/NavBar.scss";

export default function NavBar() {
  return (
    <div className="header-container">
      <div className="navbar">
        <img
          className="logo"
          src="./src/assets/logo-color-full.svg"
          alt="logo Cook Buddy"
        />

        <button className="dark-mode" type="button">
          <i className="bi bi-moon-fill" />
        </button>
      </div>
      <div className="search-container">
        <button className="searchbar" type="button">
          <i className="bi bi-search" />
          Enter ingredients or recipe
        </button>
        <button className="search-button" type="button">
          Search
          <i className="bi bi-chevron-right" />
        </button>
        <button className="filter" type="button">
          <i className="bi bi-sliders" />
        </button>
      </div>
    </div>
  );
}

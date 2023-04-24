import "../styles/App.scss";
import "../styles/components/NavBar.scss";

export default function NavBar() {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <img
            className="logo"
            src="assets/logo/logo-color-full.svg"
            alt="logo Cook Buddy"
          />

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
        <button className="filter" type="button">
          <i className="bi bi-sliders" />
        </button>
      </div>
    </>
  );
}

import "../styles/App.scss";
import "../styles/components/NavBar.scss";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar({ theme, setTheme }) {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <img
            className="logo"
            src="assets/logo/logo-color-full.svg"
            alt="logo Cook Buddy"
          />
          <DarkModeToggle theme={theme} setTheme={setTheme} />
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

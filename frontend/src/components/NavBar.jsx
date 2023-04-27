import "../styles/App.scss";
import "../styles/components/NavBar.scss";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar({darkmode, toggleDarkmode}) {
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <img
            className="logo"
            src="assets/logo/logo-color-full.svg"
            alt="logo Cook Buddy"
          />
          <DarkModeToggle darkmode={darkmode} toggleDarkmode={toggleDarkmode}/>
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

import "../styles/App.scss";
import "../styles/components/NavBar.scss";

export default function NavBar() {
  return (
    <div className="header-container">
      <nav>
        <img
          className="logo"
          src="./src/assets/logo-color-full.svg"
          alt="logo Cook Buddy"
        />
        <button className="dark-mode" type="button">
          <i className="bi bi-moon-fill" />
        </button>
      </nav>
    </div>
  );
}

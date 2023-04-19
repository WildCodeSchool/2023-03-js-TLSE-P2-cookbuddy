import "../styles/App.scss";
import "../styles/components/NavBar.scss";

export default function NavBar() {
  return (
    <div className="mobile">
      <img className="logo" src="./src/assets/logo-color-full.svg" alt="logo" />
      <button className="dark-mode" type="button">
        <i className="bi bi-moon-fill" />
      </button>
    </div>
  );
}

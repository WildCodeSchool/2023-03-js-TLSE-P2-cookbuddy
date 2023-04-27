import "../styles/App.scss";
import "../styles/components/DarkModeToggle.scss";

export default function DarkModeToggle({ darkmode, toggleDarkmode }) {
  return (
    <div>
      <button type="button" onClick={toggleDarkmode} className="dark-mode">
        {darkmode ? (
          <i className="bi bi-sun-fill" />
        ) : (
          <i className="bi bi-moon-fill" />
        )}
      </button>
    </div>
  );
}

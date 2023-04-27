import "../styles/App.scss";
import "../styles/components/DarkModeToggle.scss";
import PropTypes from "prop-types";

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

DarkModeToggle.propTypes = {
  darkmode: PropTypes.bool.isRequired,
  toggleDarkmode: PropTypes.func.isRequired,
};

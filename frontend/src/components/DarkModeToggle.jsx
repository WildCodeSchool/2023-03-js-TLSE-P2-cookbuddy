import { useState } from "react";
import "../styles/App.scss";
import "../styles/components/DarkModeToggle.scss";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setDarkMode((prevMode) => !prevMode);
    setIsActive(darkMode && !isActive);
  }
  return (
    <div>
      <button
        className={darkMode ? "dark-mode-off" : "dark-mode-on"}
        type="button"
        onClick={handleClick}
      >
        <i className="bi bi-moon-fill" />
      </button>
    </div>
  );
}

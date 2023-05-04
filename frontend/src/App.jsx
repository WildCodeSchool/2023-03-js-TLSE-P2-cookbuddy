import "./styles/reset.css";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };
  const [isBodyScrollable, setIsBodyScrollable] = useState(true);
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setDarkmode(true);
  //   }
  //   if (!isBodyScrollable) {
  //     document.body.className = darkmode
  //       ? "dark-theme not-scrollable"
  //       : "light-theme not-scrollable";
  //   } else {
  //     document.body.className = darkmode ? "dark-theme" : "light-theme";
  //   }
  // }, [darkmode, isBodyScrollable]);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const listener = (e) => {
      setDarkmode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", listener);
    setDarkmode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", listener);
    };
  }, []);

  useEffect(() => {
    if (!isBodyScrollable) {
      document.body.className = darkmode
        ? "dark-theme not-scrollable"
        : "light-theme not-scrollable";
    } else {
      document.body.className = darkmode ? "dark-theme" : "light-theme";
    }
  }, [darkmode, isBodyScrollable]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkmode={darkmode}
              toggleDarkmode={toggleDarkmode}
              setIsBodyScrollable={setIsBodyScrollable}
            />
          }
        />
        <Route
          path="/search/*"
          element={
            <Search
              darkmode={darkmode}
              toggleDarkmode={toggleDarkmode}
              setIsBodyScrollable={setIsBodyScrollable}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

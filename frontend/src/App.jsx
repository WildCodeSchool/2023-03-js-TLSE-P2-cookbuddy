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
  useEffect(() => {
    document.body.className = darkmode ? "dark-theme" : "light-theme";
  }, [darkmode]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home darkmode={darkmode} toggleDarkmode={toggleDarkmode} />}
        />
        <Route path="/search/*" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;

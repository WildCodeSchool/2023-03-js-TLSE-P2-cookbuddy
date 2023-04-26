import "./styles/reset.css";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;

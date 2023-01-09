import "./App.css";
import Search from "./Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return;
  <Router>
    <Routes>
      <Route path="/" element={<Google />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Router>;
}

export default App;

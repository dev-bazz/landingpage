import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePageA";
import HomePageB from "./pages/HomePageB";

function App() {
  return (
    <Routes>
      {/* landing page */}
      <Route path="/" element={<HomePage />} />
      <Route path="/homeB" element={<HomePageB />} />
    </Routes>
  );
}

export default App;

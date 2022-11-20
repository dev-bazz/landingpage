import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page-a";
import PageB from "./pages/Landing-page-b";

function App() {
  return (
    <Routes>
      {/* landing page */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/homeB" element={<PageB />} />
    </Routes>
  );
}

export default App;

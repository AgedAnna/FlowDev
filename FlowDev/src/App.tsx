import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroPage from "./pages/intro_page/IntroPage";
import LandingPage from "./pages";
import Inicio from "./pages/inicio/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroPage from "./pages/intro_page/IntroPage";
import LandingPage from "./pages";
import ServicesPage from "./pages/servicos/ServicesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/servicos" element={<ServicesPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
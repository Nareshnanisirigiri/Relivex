import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import HowItWorks from "./pages/HowItWorks";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
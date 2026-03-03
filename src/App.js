import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import HowItWorks from "./pages/HowItWorks";
import Reviews from "./pages/Reviews";
import FloatingContact from "./components/FloatingContact/FloatingContact";


import AuthLanding from "./pages/auth/AuthLanding";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/Cart";

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


         <Route path="/auth" element={<AuthLanding />} />
  <Route path="/login/:role" element={<Login />} />
  <Route path="/register/:role" element={<Register />} />
  <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* 🔥 Floating Call + WhatsApp visible on whole site */}
      <FloatingContact />
    </Router>
  );
}

export default App;
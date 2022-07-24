import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import ProductsPage from "./pages/ProductsPage";
import OrderAt from "./pages/OrderAt";
import Team from "./pages/Team";
import TandC from "./pages/TandC";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/ourTeam" element={<Team />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/orderAt" element={<OrderAt />} />
        <Route path="/termsAndconditions" element={<TandC />} />
      </Routes>
    </Router>
  );
};

export default App;

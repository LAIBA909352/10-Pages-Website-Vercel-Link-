import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FaceWash from "./pages/FaceWash";
import Serum from "./pages/Serum";
import Cream from "./pages/Cream";
import Sunscreen from "./pages/Sunscreen";
import Toner from "./pages/Toner";
import Moisturizer from "./pages/Moisturizer";
import Scrub from "./pages/Scrub";
import Mask from "./pages/Mask";
import Oil from "./pages/Oil";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facewash" element={<FaceWash />} />
        <Route path="/serum" element={<Serum />} />
        <Route path="/cream" element={<Cream />} />
        <Route path="/sunscreen" element={<Sunscreen />} />
        <Route path="/toner" element={<Toner />} />
        <Route path="/moisturizer" element={<Moisturizer />} />
        <Route path="/scrub" element={<Scrub />} />
        <Route path="/mask" element={<Mask />} />
        <Route path="/oil" element={<Oil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
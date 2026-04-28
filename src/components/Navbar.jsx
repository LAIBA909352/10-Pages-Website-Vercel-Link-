// FILE: src/components/Navbar.jsx

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-pink-500 p-4 text-white flex gap-4 flex-wrap">
      <Link to="/">Home</Link>
      <Link to="/facewash">FaceWash</Link>
      <Link to="/serum">Serum</Link>
      <Link to="/cream">Cream</Link>
      <Link to="/sunscreen">Sunscreen</Link>
      <Link to="/toner">Toner</Link>
      <Link to="/moisturizer">Moisturizer</Link>
      <Link to="/scrub">Scrub</Link>
      <Link to="/mask">Mask</Link>
      <Link to="/oil">Oil</Link>
    </div>
  );
}
// FILE: src/pages/Serum.jsx

import ProductCard from "../components/ProductCard";
import { scrub } from "../data/products";

function Scrub() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {scrub.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Scrub;
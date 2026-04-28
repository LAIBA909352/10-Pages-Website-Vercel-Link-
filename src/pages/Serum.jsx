// FILE: src/pages/Serum.jsx

import ProductCard from "../components/ProductCard";
import { serum } from "../data/products";

function Serum() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {serum.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Serum;
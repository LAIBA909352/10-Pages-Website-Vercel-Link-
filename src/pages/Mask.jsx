// FILE: src/pages/Serum.jsx

import ProductCard from "../components/ProductCard";
import { mask } from "../data/products";

function Mask() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {mask.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Mask;
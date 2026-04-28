// FILE: src/pages/Serum.jsx

import ProductCard from "../components/ProductCard";
import { moisturizer } from "../data/products";

function Moisturizer() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {moisturizer.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Moisturizer;
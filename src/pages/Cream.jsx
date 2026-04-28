// FILE: src/pages/Serum.jsx

import ProductCard from "../components/ProductCard";
import { cream } from "../data/products";

function Cream() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {cream.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Cream;
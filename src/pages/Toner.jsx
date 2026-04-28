// FILE: src/pages/Serum.jsx

import ProductCard from "../components/ProductCard";
import { toner } from "../data/products";

function Toner() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {toner.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Toner;
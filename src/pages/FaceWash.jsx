// FILE: src/pages/FaceWash.jsx

import ProductCard from "../components/ProductCard";
import { facewash } from "../data/products";

function FaceWash() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {facewash.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default FaceWash;
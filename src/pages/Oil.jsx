import ProductCard from "../components/ProductCard";
import { oil } from "../data/products";

function Oil() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {oil.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default  Oil;
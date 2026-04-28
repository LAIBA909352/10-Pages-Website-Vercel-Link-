function ProductCard({ name, price, image }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={image} className="h-40 w-full object-cover" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-pink-500">${price}</p>
    </div>
  );
}

export default ProductCard;
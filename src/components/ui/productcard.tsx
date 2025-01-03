import React from "react";
import Image from "next/image";  // Import Image from Next.js

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      {/* Replace img with Image component */}
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-t-lg"
        width={500} // Set the width of the image (you can adjust as per your design)
        height={400} // Set the height of the image (you can adjust as per your design)
        priority // Optional: Adds priority loading for images above the fold
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="text-lg font-bold mt-2">Rs {product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

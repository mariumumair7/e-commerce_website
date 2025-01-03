"use client";

import React from "react";
import ProductCard from "@/components/ui/productcard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Stylish Denim Jacket",
    description: "A cool and stylish denim jacket for all seasons.",
    price: 4999,
    image: "/image1.jpeg", 
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    description: "Comfortable and breathable cotton t-shirt in multiple colors.",
    price: 1999,
    image: "/image2.jpeg",
  },
  {
    id: 3,
    name: "Leather Boots",
    description: "Durable and stylish leather boots for every occasion.",
    price: 8999,
    image: "/image3.webp",
  },
  {
    id: 4,
    name: "Chinos Pants",
    description: "Perfectly fitting chinos, ideal for work and play.",
    price: 3999,
    image: "/image4.jpeg",
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    description: "Stylish slim fit jeans with a modern look.",
    price: 3999,
    image: "/image5.jpeg",
  },
  {
    id: 6,
    name: "Graphic Hoodie",
    description: "Comfy hoodie with unique graphic designs.",
    price: 3499,
    image: "/image6.webp",
  },
  {
    id: 7,
    name: "Classic Blazer",
    description: "A sophisticated blazer for any formal occasion.",
    price: 11999,
    image: "/image7.jpeg",
  },
  {
    id: 8,
    name: "Sports Sneakers",
    description: "Comfortable sports sneakers for active wear.",
    price: 2999,
    image: "/image8.jpeg",
  },
];

const Products = () => {
  const cart: Product[] = [];  // Use const instead of let

  const addToCart = (product: Product) => {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    console.log(cart);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Our Latest Collection
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <span>Rs {item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Products;

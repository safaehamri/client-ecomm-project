import React from "react";
import ProductCard from "../Product/ProductCard";
export default function GridView() {
  return (
    <>
      <button>grid</button>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-4">
        {[...Array(12)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </>
  );
}

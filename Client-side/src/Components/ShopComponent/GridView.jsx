import React from "react";

const GridView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-md shadow-sm border"
        >
          <img
            src={product.img}
            alt={product.name}
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-500">
            <span className="line-through">${product.originalPrice}</span>{" "}
            <span className="text-green-600">${product.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridView;

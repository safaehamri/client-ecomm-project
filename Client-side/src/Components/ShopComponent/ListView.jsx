import React from "react";

const ListView = ({ products }) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white flex items-center p-4 rounded-md shadow-sm border"
        >
          <img
            src={product.img}
            alt={product.name}
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-500">
              <span className="line-through">${product.originalPrice}</span>{" "}
              <span className="text-green-600">${product.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;

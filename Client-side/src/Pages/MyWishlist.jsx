import React from "react";

const MyWishlist = () => {
  const wishlist = [
    {
      id: 1,
      productName: "Tray Table",
      color: "Black",
      price: "$19.19",
      image: "/tray-table.jpg",
    },
    {
      id: 2,
      productName: "Sofa",
      color: "Beige",
      price: "$345.00",
      image: "/sofa.jpg",
    },
    {
      id: 3,
      productName: "Bamboo Basket",
      color: "Beige",
      price: "$8.80",
      image: "/basket.jpg",
    },
    {
      id: 4,
      productName: "Pillow",
      color: "Beige",
      price: "$8.80",
      image: "/pillow.jpg",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Your Wishlist</h2>
      <div className="space-y-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.productName}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-bold">{item.productName}</p>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                <p className="font-bold">{item.price}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button className="text-red-500">Remove</button>
              <button className="bg-black text-white py-1 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;

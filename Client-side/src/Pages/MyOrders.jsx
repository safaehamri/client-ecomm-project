import React from "react";

const MyOrders = () => {
  const orders = [
    {
      id: "#3456_768",
      date: "October 17, 2023",
      status: "Delivered",
      price: "$1234.00",
    },
    {
      id: "#3456_980",
      date: "October 11, 2023",
      status: "Delivered",
      price: "$345.00",
    },
    {
      id: "#3456_120",
      date: "August 24, 2023",
      status: "Delivered",
      price: "$2345.00",
    },
    {
      id: "#3456_030",
      date: "August 12, 2023",
      status: "Delivered",
      price: "$845.00",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Orders History</h2>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <p>
              <span className="font-bold">Number ID:</span> {order.id}
            </p>
            <p>
              <span className="font-bold">Date:</span> {order.date}
            </p>
            <p>
              <span className="font-bold">Status:</span> {order.status}
            </p>
            <p>
              <span className="font-bold">Price:</span> {order.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

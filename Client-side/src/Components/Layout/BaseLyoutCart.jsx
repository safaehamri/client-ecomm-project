import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const BaseLayoutCart = () => {
  const location = useLocation();

  // Dynamically update the header based on the current route
  const getHeaderName = () => {
    if (location.pathname === "/cart/checkout") {
      return "Checkout";
    } else if (location.pathname === "/cart/order-complete") {
      return "Complete";
    }
    return "Cart"; // Default to "Cart"
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Back Button - Mobile Only */}
      <div className="text-sm text-gray-500 mb-4 cursor-pointer block md:hidden">
        &lt; back
      </div>

      {/* Dynamic Header */}
      <div className="text-2xl font-bold text-center mb-6">
        {getHeaderName()}
      </div>

      {/* Steps */}
      <div className="flex justify-center items-center mb-6 space-x-4">
        {/* Step 1: Shopping Cart */}
        <Link
          to="/cart/shopping-cart"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div
            className={`h-8 w-8 ${
              location.pathname.includes("shopping-cart")
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500"
            } rounded-full flex items-center justify-center font-bold text-sm`}
          >
            1
          </div>
          <span
            className={`text-sm font-medium ${
              location.pathname.includes("shopping-cart")
                ? "text-black"
                : "text-gray-500"
            }`}
          >
            Shopping cart
          </span>
        </Link>

        {/* Divider */}
        <div className="flex-1 h-px bg-gray-300"></div>

        {/* Step 2: Checkout */}
        <Link
          to="/cart/checkout"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div
            className={`h-8 w-8 ${
              location.pathname.includes("checkout")
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500"
            } rounded-full flex items-center justify-center font-bold text-sm`}
          >
            2
          </div>
          <span
            className={`text-sm font-medium ${
              location.pathname.includes("checkout")
                ? "text-black"
                : "text-gray-500"
            }`}
          >
            Checkout
          </span>
        </Link>

        {/* Divider */}
        <div className="flex-1 h-px bg-gray-300"></div>

        {/* Step 3: Order Complete */}
        <Link
          to="/cart/order-complete"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div
            className={`h-8 w-8 ${
              location.pathname.includes("order-complete")
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500"
            } rounded-full flex items-center justify-center font-bold text-sm`}
          >
            3
          </div>
          <span
            className={`text-sm font-medium ${
              location.pathname.includes("order-complete")
                ? "text-black"
                : "text-gray-500"
            }`}
          >
            Complete
          </span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="bg-white shadow-md rounded-lg p-4">
        {/* Render child routes dynamically */}
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayoutCart;

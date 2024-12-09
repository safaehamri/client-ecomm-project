import React from "react";

const OrderComplete = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col items-center">
      {/* Back Button - Mobile Only */}
      <div className="text-sm text-gray-500 mb-4 cursor-pointer block md:hidden">
        &lt; back to home
      </div>

      {/* Header */}
      <div className="text-2xl font-bold text-center mb-6">Complete!</div>

      {/* Steps */}
      <div className="flex justify-center items-center mb-6 space-x-4">
        {/* Step 3: Order Complete */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
            3
          </div>
          <span className="text-sm font-medium">Order complete</span>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:max-w-2xl text-center">
        <h2 className="text-lg font-bold mb-2">Thank you! 🎉</h2>
        <p className="text-xl font-bold mb-4">Your order has been received</p>

        {/* Ordered Items */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="relative">
            <div className="absolute -top-2 -right-2 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
              2
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded"></div>
          </div>
          <div className="relative">
            <div className="absolute -top-2 -right-2 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
              2
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded"></div>
          </div>
          <div className="relative">
            <div className="absolute -top-2 -right-2 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
              1
            </div>
            <div className="w-16 h-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Order Details */}
        <div className="text-left space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Order code:</span>
            <span>#0123_45678</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>October 19, 2023</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total:</span>
            <span>$1,345.00</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Payment method:</span>
            <span>Credit Card</span>
          </div>
        </div>

        {/* Purchase History Button */}
        <button className="w-full bg-black text-white py-3 rounded-md mt-6">
          Purchase history
        </button>
      </div>
    </div>
  );
};

export default OrderComplete;

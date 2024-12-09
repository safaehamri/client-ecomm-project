import React from "react";

const CheckoutDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column: Contact Information, Shipping Address, Payment Method */}
      <div className="lg:col-span-2 space-y-6">
        {/* Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Phone number"
              className="border rounded-md p-2 w-full mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-md p-2 w-full"
            />
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
          <input
            type="text"
            placeholder="Street Address"
            className="border rounded-md p-2 w-full mb-4"
          />
          <select className="border rounded-md p-2 w-full mb-4">
            <option value="">Country</option>
          </select>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Town / City"
              className="border rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="State"
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Zip Code"
              className="border rounded-md p-2 w-full"
            />
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Use a different billing address</span>
            </label>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Payment method</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" />
              <span>Pay by Card Credit</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" />
              <span>PayPal</span>
            </label>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Card Number"
              className="border rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="MM/YY"
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="CVC code"
              className="border rounded-md p-2 w-full"
            />
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md mt-6">
          Place Order
        </button>
      </div>

      {/* Right Column: Order Summary */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Order summary</h2>
        <div className="space-y-4">
          {/* Order Items */}
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
                <div>
                  <div className="font-bold">Tray Table</div>
                  <div className="text-sm text-gray-500">Color: Black</div>
                </div>
              </div>
              <div>
                <span>$38.00</span>
              </div>
            </div>
          ))}

          {/* Coupon Section */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Input"
              className="border rounded-md p-2 w-full mb-2"
            />
            <button className="w-full bg-black text-white py-2 rounded-md">
              Apply
            </button>
          </div>

          {/* Summary */}
          <div className="mt-4">
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$234.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;

import React from "react";

const ShoppingCartPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Product List Section */}
      <div className="lg:col-span-2">
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2">Product</th>
                <th className="py-2 hidden md:table-cell">Quantity</th>
                <th className="py-2 hidden md:table-cell">Price</th>
                <th className="py-2 hidden md:table-cell">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* Product Row */}
              <tr className="border-b">
                <td className="py-4 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div>
                    <div className="font-bold">Tray Table</div>
                    <div className="text-sm text-gray-500">Color: Black</div>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center border rounded-md px-2">
                    <button className="px-2 text-gray-500">-</button>
                    <input
                      type="text"
                      value="2"
                      readOnly
                      className="w-10 text-center bg-transparent"
                    />
                    <button className="px-2 text-gray-500">+</button>
                  </div>
                </td>
                <td className="hidden md:table-cell">$19.00</td>
                <td className="hidden md:table-cell">$38.00</td>
              </tr>

              {/* Product Row */}
              <tr className="border-b">
                <td className="py-4 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div>
                    <div className="font-bold">Tray Table</div>
                    <div className="text-sm text-gray-500">Color: Red</div>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center border rounded-md px-2">
                    <button className="px-2 text-gray-500">-</button>
                    <input
                      type="text"
                      value="2"
                      readOnly
                      className="w-10 text-center bg-transparent"
                    />
                    <button className="px-2 text-gray-500">+</button>
                  </div>
                </td>
                <td className="hidden md:table-cell">$19.00</td>
                <td className="hidden md:table-cell">$38.00</td>
              </tr>

              {/* Product Row */}
              <tr className="border-b">
                <td className="py-4 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div>
                    <div className="font-bold">Table Lamp</div>
                    <div className="text-sm text-gray-500">Color: Gold</div>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center border rounded-md px-2">
                    <button className="px-2 text-gray-500">-</button>
                    <input
                      type="text"
                      value="1"
                      readOnly
                      className="w-10 text-center bg-transparent"
                    />
                    <button className="px-2 text-gray-500">+</button>
                  </div>
                </td>
                <td className="hidden md:table-cell">$39.00</td>
                <td className="hidden md:table-cell">$39.00</td>
              </tr>
            </tbody>
          </table>

          {/* Mobile View Quantity & Subtotal */}
          <div className="block md:hidden">
            <div className="flex justify-between items-center mt-4">
              <span>Quantity: 2</span>
              <span>Subtotal: $38.00</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Quantity: 2</span>
              <span>Subtotal: $38.00</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Quantity: 1</span>
              <span>Subtotal: $39.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="font-bold text-lg mb-4">Cart summary</div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" name="shipping" id="free" />
              <label htmlFor="free" className="ml-2 flex-1">
                Free shipping
              </label>
              <span>$0.00</span>
            </div>
            <div className="flex items-center">
              <input type="radio" name="shipping" id="express" />
              <label htmlFor="express" className="ml-2 flex-1">
                Express shipping
              </label>
              <span>+$15.00</span>
            </div>
            <div className="flex items-center">
              <input type="radio" name="shipping" id="pickup" />
              <label htmlFor="pickup" className="ml-2 flex-1">
                Pick Up
              </label>
              <span>+21%</span>
            </div>
          </div>
          <div className="border-t my-4"></div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$1234.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$1345.00</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-md mt-4">
            Checkout
          </button>
        </div>

        {/* Coupon Section */}
        <div className="bg-white shadow-md rounded-lg p-4 mt-6">
          <div className="font-bold text-sm mb-2">Have a coupon?</div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border rounded-md flex-1 px-4 py-2 text-sm"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;

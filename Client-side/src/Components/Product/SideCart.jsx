/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementItem,
  decrementItem,
} from "../../Redux/cartSlice";
import { Close } from "../Common/Icons";

const SideCart = ({ isOpen, toggleCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
        onClick={toggleCart}
      >
        <Close className="w-6 h-6" />
      </button>

      {/* Cart Header */}
      <h2 className="text-xl font-bold p-6 border-b border-gray-200">Cart</h2>

      <div className="p-6 flex flex-col space-y-6 h-full">
        {cartItems.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="flex-grow space-y-4 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between space-x-4 border-b pb-4"
                >
                  <div className="flex space-x-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">Color: Default</p>
                      <p className="text-sm font-medium text-gray-800">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <button
                      onClick={() => dispatch(incrementItem({ id: item.id }))} //DISPATCHE AU REDUCER ET ENVOYER LE PARAM ID
                      className="px-2 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
                    >
                      +
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(decrementItem({ id: item.id }))}
                      className="px-2 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeItem({ id: item.id }))}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t pt-4">
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <p>Subtotal</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 mt-2">
                <p>Total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="mt-6 space-y-2">
                <button className="w-full py-2 bg-black text-white font-medium text-sm rounded hover:bg-gray-800 transition">
                  Checkout
                </button>
                <button className="w-full py-2 bg-gray-100 text-gray-800 font-medium text-sm rounded hover:bg-gray-200 transition">
                  View Cart
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-sm">Your cart is empty!</p>
        )}
      </div>
    </div>
  );
};

export default SideCart;

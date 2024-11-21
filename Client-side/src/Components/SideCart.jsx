import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  clearCart,
  incrementItem,
  decrementItem,
} from "../cartSlice";
import { Close } from "./Icons";

const SideCart = ({ isOpen, toggleCart }) => {
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  console.log(cartItems);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      <button
        className="absolute top-4 right-4 text-gray-600"
        onClick={toggleCart}
      >
        <Close />
      </button>
      <h2 className="text-xl font-bold p-4">Your Cart</h2>
      <div className="p-4">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />
                  <p>{item.name}</p>
                </div>
                <p>{item.price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch(decrementItem({ id: item.id }))}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <p className="px-2">{item.quantity}</p>
                  <button
                    onClick={() => dispatch(incrementItem({ id: item.id }))}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeItem({ id: item.id }))}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="text-lg font-bold">
                Total: ${totalPrice.toFixed(2)}
              </h3>
              <button
                onClick={() => dispatch(clearCart())}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Clear Cart
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </div>
  );
};

export default SideCart;

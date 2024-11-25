import PropTypes from "prop-types";
import {
  Close,
  Search,
  Cart,
  Wishlist,
  Dropdown,
  Instagram,
  Facebook,
  YouTube,
} from "../Common/Icons";
import SideCart from "../Product/SideCart";
import { useState } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-3/4 p-4 transition-transform transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div>
          {/* Close Icon */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold">3legant.</div>
            <button onClick={onClose}>
              <Close />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-6 flex items-center border rounded-md p-2">
            <Search />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full outline-none"
            />
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            <a
              href="/"
              className="block text-gray-800 hover:text-black font-medium"
            >
              Home
            </a>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Shop</span>
              <Dropdown />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Product</span>
              <Dropdown />
            </div>
            <a
              href="/contact"
              className="block text-gray-800 hover:text-black font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Cart and Wishlist */}
          <div className="space-y-4 mb-4">
            {/* Cart */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Cart</span>
              <button className="relative" onClick={toggleCart}>
                <Cart />
                {/* Cart Badge */}
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>

            {/* Wishlist */}
            <div className="flex items-center justify-between">
              <span className="text-gray-800 font-medium">Wishlist</span>
              <div className="flex items-center">
                <Wishlist />
                <span className="ml-2 bg-black text-white rounded-full text-xs px-2">
                  2
                </span>
              </div>
            </div>

            {/* Sign In Button */}
            <button className="w-full mt-6 bg-black text-white py-2 rounded-md">
              Sign In
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-around">
            <Instagram />
            <Facebook />
            <YouTube />
          </div>
        </div>
      </div>

      {/* SideCart */}
      <SideCart isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;

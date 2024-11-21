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
} from "./Icons";
import SideCart from "./SideCart";
import { useState } from "react";
useState;

const Sidebar = ({ isOpen, onClose }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white w-3/4 p-4 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } flex flex-col justify-between`}
    >
      {/* Top Section */}
      <div>
        {/* Close Icon */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">3legant.</div>
          <button onClick={onClose}>
            <Close />
          </button>
        </div>

        {/* Search Bar */}
        <div className="my-4 flex items-center border rounded-md p-2">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full outline-none"
          />
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          <div>Home</div>
          <div className="flex items-center justify-between">
            <span>Shop</span>
            <Dropdown />
          </div>
          <div className="flex items-center justify-between">
            <span>Product</span>
            <Dropdown />
          </div>
          <div>Contact Us</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        {/*Cart and Wishlist*/}
        <div className="space-y-4 mb-4">
          <div className="flex items-center justify-between">
            <span>Cart</span>
            {/*   <div className="flex items-center ">
              <Cart />
              <span className="ml-2 bg-black text-white rounded-full text-xs px-2">
                2
              </span>
            </div> */}
            <button className="relative " onClick={toggleCart}>
              <Cart />
              {/* Cart Badge */}
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
            <SideCart isOpen={isCartOpen} toggleCart={toggleCart} />
          </div>
          <div className="flex items-center justify-between">
            <span>Wishlist</span>
            <div className="flex items-center">
              <Wishlist />
              <span className="ml-2 bg-black text-white rounded-full text-xs px-2">
                2
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* Sign In Button */}
            <button className="w-full mt-6 bg-black text-white py-2 rounded-md">
              Sign In
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-around">
          <Instagram />
          <Facebook />
          <YouTube />
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
//this sidebar that shows the navbar but in responsiv view

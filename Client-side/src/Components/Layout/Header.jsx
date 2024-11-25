/* eslint-disable react/prop-types */
import { Cart, Search, Hamburger, Profile, HeartIcon } from "../Common/Icons";

export default function Header({ toggleSidebar, toggleCart, toggleWishlist }) {
  return (
    <div className="flex items-center justify-between w-full p-4">
      {/* Logo with Hamburger Icon on the left */}
      <div className="flex items-center space-x-2">
        {/* Hamburger Icon (visible on mobile) */}
        <button onClick={toggleSidebar} className="md:hidden">
          <Hamburger />
        </button>

        {/* Logo */}
        <div className="text-lg font-bold">3legant.</div>
      </div>

      {/* Navigation Links (hidden on mobile, shown on desktop) */}
      <div className="hidden md:flex space-x-8">
        <a href="/" className="text-gray-800 hover:text-black font-medium">
          Home
        </a>
        <a href="/shop" className="text-gray-500 hover:text-black font-medium">
          Shop
        </a>
        <a
          href="/product"
          className="text-gray-500 hover:text-black font-medium"
        >
          Product
        </a>
        <a
          href="/contact"
          className="text-gray-500 hover:text-black font-medium"
        >
          Contact Us
        </a>
      </div>

      {/* Icons (Search and Cart) */}
      <div className="flex items-center space-x-4">
        <div className="md:flex items-center space-x-4">
          <button>
            <Search />
          </button>
          <button>
            <Profile />
          </button>
          <button onClick={toggleWishlist}>
            <HeartIcon />
          </button>
          <button className="relative" onClick={toggleCart}>
            <Cart />
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

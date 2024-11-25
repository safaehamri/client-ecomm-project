import { Outlet } from "react-router-dom";
import AnnouncementBar from "../Common/AnnouncementBar";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import NewsLetter from "../Sections/NewsLetter";
import Sidebar from "../Sections/Sidebar";
import SideCart from "../Product/SideCart";
import WishlistSidebar from "../Product/WishlistSidebar";
import { useState } from "react";

const BaseLayout = () => {
  const [activePanel, setActivePanel] = useState(null); // Tracks the active panel ('sidebar', 'cart', or 'WishlistSidebar')

  const toggleSidebar = () => {
    setActivePanel((prev) => (prev === "sidebar" ? null : "sidebar"));
  };

  const toggleWishlist = () => {
    console.log("Wishlist toggled"); // Add this for debugging
    setActivePanel((prev) =>
      prev === "WishlistSidebar" ? null : "WishlistSidebar"
    );
  };

  const toggleCart = () => {
    setActivePanel((prev) => (prev === "cart" ? null : "cart"));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Shared Components */}
      <div className="text-center">
        <AnnouncementBar />
      </div>

      <div className="w-11/12 mx-auto flex flex-col">
        <Header
          toggleSidebar={toggleSidebar}
          toggleCart={toggleCart}
          toggleWishlist={toggleWishlist}
        />
        {/* Main Content */}
        <Outlet />
      </div>

      {/* Footer and Newsletter */}
      <div className="w-full my-4">
        <NewsLetter />
        <Footer />
      </div>

      {/* Sidebar, SideCart, and Wishlist */}
      <Sidebar
        isOpen={activePanel === "sidebar"}
        onClose={() => setActivePanel(null)}
      />
      <SideCart
        isOpen={activePanel === "cart"}
        toggleCart={() => setActivePanel(null)}
      />
      <WishlistSidebar
        isOpen={activePanel === "WishlistSidebar"}
        onClose={() => setActivePanel(null)}
      />
    </div>
  );
};

export default BaseLayout;

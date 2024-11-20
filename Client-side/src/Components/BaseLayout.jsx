import { Outlet } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import Sidebar from "./Sidebar";
import { useState } from "react";

const BaseLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Shared Components */}
      <div className="text-center">
        <AnnouncementBar />
      </div>

      <div className="w-11/12 mx-auto flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        {/* Sidebar */}
        <Outlet />
      </div>

      {/* Footer and Newsletter */}
      <div className="w-full my-4">
        <NewsLetter />
        <Footer />
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default BaseLayout;

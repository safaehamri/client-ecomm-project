// src/Components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Newsletter from "../Sections/NewsLetter";
import AnnouncementBar from "../Common/AnnouncementBar";

const MainLayout = () => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <div className="w-full mx-auto flex flex-col">
        {/* Outlet for rendering child routes */}
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default MainLayout;

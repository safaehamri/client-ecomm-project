/* eslint-disable no-unused-vars */
import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import CarouselCustomNavigation from "./CarouselCustomNavigation";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import NewArrival from "./NewArrival";
import FeaturesSection from "./FeaturesSection";
import BannerSection from "./BannerSection";
import Articles from "./Articles";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ----------------------------------------------------------- */}
      {/* Top Banner -  shareable component Full Width */}
      <div className="text-center ">
        <AnnouncementBar />
      </div>
      {/* ----------------------------------------------------------- */}

      {/* Main Container - 90% Width and Centered */}
      <div className="w-11/12 mx-auto flex flex-col">
        {/* Header   shareable component */}
        <Header toggleSidebar={toggleSidebar} />
        <Outlet />
        {/* ----------------------------------------------------------- */}
        {/*Carousel  */}
        <div className="bg-green-600 flex items-center justify-center my-4">
          <CarouselCustomNavigation />
        </div>
        {/* -----------without creating another component we did it here -------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 py-10 md:px-12 lg:px-20 w-full">
          <div className=" ">
            <h2 className=" text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-semibold text-[#121212] leading-tight mb-6">
              Simply Unique
              <span className=" text-[#6C7275] text-[36px] sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[66px]">
                /
              </span>{" "}
              <br />
              Simply Better.
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed md:leading-loose">
              <span className="font-semibold text-[#121212]">3legant</span> is a
              is a gift & decorations store based in HCMC, Vietnam. Est since
              2019.
            </p>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className=" flex   items-center justify-center my-4">
          <Categories />
        </div>
        <div className=" flex   items-center justify-center my-4">
          <NewArrival />
        </div>
        <div className="   my-4">
          <FeaturesSection />
          <BannerSection />
          <Articles />
        </div>
      </div>

      {/* NewLetter  those are sharable component*/}
      <div className="w-full  my-4   ">
        <NewsLetter />
        {/* FOOTER remain consistent  */}
        <Footer />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default MainLayout;

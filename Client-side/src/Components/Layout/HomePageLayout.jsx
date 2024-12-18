import CarouselCustomNavigation from "../Common/CarouselCustomNavigation";
import Categories from "../Sections/Categories";
import FeaturesSection from "../Sections/FeaturesSection";
import BannerSection from "../Sections/BannerSection";
import Articles from "../Sections/Articles";
import NewArrival from "../Sections/NewArrival";

const HomePageLayout = () => {
  return (
    <div>
      {/* Carousel */}
      <div className="bg-green-600 flex items-center justify-center my-4">
        <CarouselCustomNavigation />
      </div>

      {/* Main Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 py-10 md:px-12 lg:px-20 w-full">
        <div>
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[56px] font-semibold text-[#121212] leading-tight mb-6">
            Simply Unique
            <span className="text-[#6C7275] text-[36px] sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[66px]">
              /
            </span>{" "}
            <br />
            Simply Better.
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed md:leading-loose">
            <span className="font-semibold text-[#121212]">3legant</span> is a
            gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
      </div>

      {/* Categories and New Arrivals */}
      <div className="flex items-center justify-center my-4">
        <Categories />
      </div>
      <div className="flex items-center justify-center my-4">
        <NewArrival />
      </div>

      {/* Features Section */}
      <div className="my-4">
        <FeaturesSection />
        <BannerSection />
        <Articles />
      </div>
    </div>
  );
};

export default HomePageLayout;

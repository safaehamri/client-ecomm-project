const BannerSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center    p-6 lg:p-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="banner.png" // Replace with your image URL
          alt="Stylish Living Room"
          className="w-full h-auto object-cover  shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-start  p-6  bg-blue-gray-50  lg:text-left  lg:mt-0 lg:pl-12">
        <p className="text-sm font-semibold text-blue-600 uppercase">
          Sale up to 35% off
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 my-4">
          Hundreds of New Lower Prices!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          It's more affordable than ever to give every room in your home a
          stylish makeover.
        </p>
        <a
          href="#"
          className="text-blue-600 font-semibold hover:underline inline-flex items-center"
        >
          Shop Now <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default BannerSection;

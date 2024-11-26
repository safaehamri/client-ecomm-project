const PlaceholderPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Shop Page Header */}
      <ShopPageHeader />

      {/* Filters Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between mt-4">
        <div className="flex gap-4 flex-col sm:flex-row">
          <CategoryFilter />
          <PriceFilter />
        </div>
        <div className="flex justify-between items-center sm:justify-end">
          <SortOptions />
          <ViewToggle />
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

const ShopPageHeader = () => (
  <div
    className="h-48 w-full rounded-md bg-cover bg-center flex flex-col items-center justify-center text-white"
    style={{ backgroundImage: "url('/image.png')" }}
  >
    {/* Breadcrumb */}
    <p className="text-sm mb-2">Home &gt; Shop</p>

    {/* Heading */}
    <h1 className="text-2xl font-bold">Shop Page</h1>

    {/* Subtext */}
    <p className="text-base">Let's design the place you always imagined.</p>
  </div>
);

const CategoryFilter = () => (
  <div className="bg-green-300 p-4 rounded-md w-full sm:w-48">
    {/* Placeholder */}
    <div>Category Filter</div>
  </div>
);

const PriceFilter = () => (
  <div className="bg-yellow-300 p-4 rounded-md w-full sm:w-48">
    {/* Placeholder */}
    <div>Price Filter</div>
  </div>
);

const SortOptions = () => (
  <div className="bg-purple-300 p-2 rounded-md w-32 text-center">
    {/* Placeholder */}
    <div>Sort</div>
  </div>
);

const ViewToggle = () => (
  <div className="bg-red-300 p-2 rounded-md w-32 text-center ml-4">
    {/* Placeholder */}
    <div>Toggle</div>
  </div>
);

const ProductGrid = () => (
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-4">
    {/* Product cards */}
    {[...Array(12)].map((_, i) => (
      <ProductCard key={i} />
    ))}
  </div>
);

const ProductCard = () => (
  <div className="bg-gray-300 h-40 rounded-md flex items-center justify-center">
    {/* Placeholder */}
    <div className="text-gray-700">Product</div>
  </div>
);

const Pagination = () => (
  <div className="bg-gray-200 text-center p-2 mt-6 rounded-md w-full sm:w-1/2 mx-auto">
    {/* Placeholder */}
    <div>Show More</div>
  </div>
);

export default PlaceholderPage;

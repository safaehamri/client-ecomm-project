import React, { useState } from "react";
import CategoryFilter from "../Components/ShopComponent/CategoryFilter";
import PriceFilter from "../Components/ShopComponent/PriceFilter";
import GridView from "../Components/ShopComponent/GridView";
import ListView from "../Components/ShopComponent/ListView";
import ShopPageHeader from "../Components/ShopComponent/ShopPageHeader";

const productData = [
  {
    id: 1,
    img: "/article1.jpeg",
    name: "Luxury Sofa",
    price: 120,
    originalPrice: 150,
  },
  {
    id: 2,
    img: "/article2.jpeg",
    name: "Modern Wall Clock",
    price: 40,
    originalPrice: 60,
  },
  {
    id: 3,
    img: "/article1.jpeg",
    name: "Outdoor Lighting",
    price: 80,
    originalPrice: 100,
  },
  {
    id: 4,
    img: "/article2.jpeg",
    name: "Decorative Cactus Lamp",
    price: 25,
    originalPrice: 35,
  },
];
export default function Shop() {
  const [gridView, setGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Price: High to Low");

  const filteredAndSortedProducts = productData
    .filter((product) => {
      if (selectedCategory === "All") return true;
      return product.category === selectedCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "Price: Low to High") {
        return a.price - b.price;
      } else if (sortOrder === "Price: High to Low") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <ShopPageHeader />

      {/* Header and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Shop</h1>
        <div className="flex flex-wrap items-center gap-4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={(category) => setSelectedCategory(category)}
          />
          <PriceFilter
            sortOrder={sortOrder}
            onSortChange={(order) => setSortOrder(order)}
          />
          <div className="flex gap-2">
            <button
              onClick={() => setGridView(true)}
              className={`p-2 border rounded-md ${
                gridView ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
              aria-label="Switch to Grid View"
            >
              Grid View
            </button>
            <button
              onClick={() => setGridView(false)}
              className={`p-2 border rounded-md ${
                !gridView ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
              aria-label="Switch to List View"
            >
              List View
            </button>
          </div>
        </div>
      </div>

      {/* Product Display */}
      {gridView ? (
        <GridView products={filteredAndSortedProducts} />
      ) : (
        <ListView products={filteredAndSortedProducts} />
      )}
    </div>
  );
}

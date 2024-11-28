import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setPriceRange, filterProducts } from "../Redux/ShopSlice";
import CategoryFilter from "../Components/ShopComponent/CategoryFilter";
import PriceFilter from "../Components/ShopComponent/PriceFilter";
import GridView from "../Components/ShopComponent/GridView";
import ListView from "../Components/ShopComponent/ListView";
import ShopPageHeader from "../Components/ShopComponent/ShopPageHeader";

export default function Shop() {
  const dispatch = useDispatch();
  const { filteredProducts, products } = useSelector((state) => state.shop);
  const [gridView, setGridView] = useState(true);

  // Initialize filtered products on first render
  React.useEffect(() => {
    dispatch(filterProducts());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <ShopPageHeader />

      {/* Filters and Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center">
          {/* Category Filter */}
          <CategoryFilter
            onChange={(value) => {
              dispatch(setCategory(value));
              dispatch(filterProducts());
            }}
          />

          {/* Price Filter */}
          <PriceFilter
            onChange={(range) => {
              dispatch(setPriceRange(range));
              dispatch(filterProducts());
            }}
          />

          {/* View Toggle Buttons */}
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

      {/* Product Grid or List */}
      {gridView ? (
        <GridView products={filteredProducts} />
      ) : (
        <ListView products={filteredProducts} />
      )}
    </div>
  );
}

import CategoryFilter from "../Components/ShopComponent/CategoryFilter";
import GridView from "../Components/ShopComponent/GridView";
import ListView from "../Components/ShopComponent/ListView";
import PriceFilter from "../Components/ShopComponent/PriceFilter";
import ShopPageHeader from "../Components/ShopComponent/ShopPageHeader";

export default function Shop() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <ShopPageHeader />
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between mt-4">
        <div className="flex  flex-col sm:flex-row">
          <CategoryFilter />
          <PriceFilter />
          <ListView />
        </div>
      </div>
      <GridView />
    </div>
  );
}

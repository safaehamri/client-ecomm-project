import { HeartIcon } from "../Common/Icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../../Redux/cartSlice";
import { addToWishlist } from "../../Redux/wishlistSlice";
import WishlistSidebar from "./WishlistSidebar";

const ProductCard = ({ img, name, price, originalPrice }) => {
  const dispatch = useDispatch();
  const [isWishlistOpen, setWishlistOpen] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addItem({
        // ACTION Wich will be dispatched to the reducer
        id: name,
        img,
        name,
        price: parseFloat(price.replace("$", "")),
      })
    );
  };

  const handleAddToWishlist = () => {
    dispatch(
      //dispatche l action de add to wishlist to reducer wishlistslice
      addToWishlist({
        id: name,
        img,
        name,
        price: parseFloat(price.replace("$", "")),
      })
    );
    setWishlistOpen(true); // Open the wishlist sidebar
  };

  return (
    <>
      <div className="bg-white mb-4 relative w-full max-w-[262px] h-[400px] sm:h-[450px] items-start rounded-lg border flex flex-col border-gray-200 shadow-md group overflow-hidden font-poppins">
        <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1">
          <span className="text-[15px] sm:text-sm font-bold uppercase bg-black text-white py-1 px-2 rounded-md">
            New
          </span>
          <span className="text-[15px] sm:text-sm font-bold text-green-600 bg-green-100 py-1 px-2 rounded-md">
            -50%
          </span>
        </div>

        <button
          onClick={handleAddToWishlist} // LA METHODE EST au dessus de cette page
          className="absolute top-3 right-3 z-10 bg-white p-2 sm:p-2.5 rounded-full shadow-md text-gray-400 hover:text-red-500 hover:shadow-lg transition-all"
        >
          <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="relative w-full h-[260px] sm:h-[320px] bg-gray-200">
          <img
            className="w-full h-full object-cover object-center"
            src={img}
            alt={name}
          />
          <button
            onClick={handleAddToCart}
            className="absolute w-[70%] bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-[11px] sm:text-sm font-medium py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Add to cart
          </button>
        </div>

        <div className="flex flex-col flex-grow p-3 sm:p-4">
          <div className="flex flex-col items-start">
            <h3 className="text-sm sm:text-base mb-1 font-semibold text-gray-800 truncate">
              {name}
            </h3>
          </div>
          <div className="flex gap-3 items-center mt-2">
            <span className="text-green-600  text-sm sm:text-lg">{price}</span>
            <span className="line-through text-gray-400 text-xs sm:text-sm">
              {originalPrice}
            </span>
          </div>
        </div>
      </div>

      <WishlistSidebar
        isOpen={isWishlistOpen}
        onClose={() => setWishlistOpen(false)}
      />
    </>
  );
};

export default ProductCard;

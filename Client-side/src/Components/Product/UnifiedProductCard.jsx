import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../Redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Redux/actions/wishlistActions";
import ProductDialog from "../Common/ProductDialog"; // the box displayed when we click on view product
import SnackbarNotification from "../Common/SnackbarNotification";
import { HeartIcon, FiveStars } from "../Common/Icons";
import { generateCloudinaryUrl } from "../../utils/cloudinaryUtils";

const UnifiedProductCard = ({
  product,
  onSnackbar,
  viewMode = "grid",
  useNavigation = false,
}) => {
  const transformedImage = generateCloudinaryUrl(
    product.image,
    viewMode === "list"
      ? "w_300,h_300,c_fill,q_auto,f_auto" // si on veut list , on doit appliquer ce style sur l'image
      : "w_500,h_500,c_fill,q_auto,f_auto" // SINON (GRID ) DONC  CE STYLE SERA APPLIQUER
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id); // VERIFI EST CE QUE LE PRODUIT EXISTE DEJA DAND LE WISHLIST ITEMS OU PAS

  const [snackbarQueue, setSnackbarQueue] = useState([]);
  const [currentSnackbar, setCurrentSnackbar] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  //-----------------a discuter apres-----------------------------------------------------
  const enqueueSnackbar = useCallback((message, severity) => {
    setSnackbarQueue((prevQueue) => [...prevQueue, { message, severity }]);
  }, []);
  useEffect(() => {
    if (!currentSnackbar && snackbarQueue.length > 0) {
      setCurrentSnackbar(snackbarQueue[0]);
      setSnackbarQueue((prevQueue) => prevQueue.slice(1));
    }
  }, [currentSnackbar, snackbarQueue]);

  const handleSnackbarClose = () => setCurrentSnackbar(null);
  //----------------------------------------------------------------------

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, color: "Default" }));
    const message = "Product added to cart";
    onSnackbar
      ? onSnackbar(message, "success")
      : enqueueSnackbar(message, "success");
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      const message = "Removed from wishlist";
      onSnackbar
        ? onSnackbar(message, "info")
        : enqueueSnackbar(message, "info");
    } else {
      dispatch(addToWishlist(product));
      const message = "Added to wishlist";
      onSnackbar
        ? onSnackbar(message, "success")
        : enqueueSnackbar(message, "success");
    }
  };

  const handleViewProduct = () => {
    useNavigation ? navigate(`/product/${product.id}`) : setIsDialogOpen(true);
  };
  //----------------------------------------------------------------------------
  //  truncates a text string to a specified maximum length and appends an ellipsis (...)
  // if the text exceeds that length.
  const getTruncatedDescription = (text, maxLength = 80) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  //----------------------------------------------------------------------------
  const containerClasses = {
    grid: "flex flex-col border bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow duration-300 p-4",
    list: "grid grid-cols-[auto_1fr] gap-6 items-stretch bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow duration-300 p-6",
    desktoplist:
      "grid grid-cols-[auto_2fr] gap-8 items-stretch bg-white shadow-md hover:shadow-xl rounded-lg transition-shadow duration-300 p-8",
  };

  const imageClasses = {
    grid: "w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105",
    list: "h-full w-32 sm:w-40 md:w-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105",
    desktoplist:
      "h-full w-48 md:w-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105",
  };

  return (
    <div className={containerClasses[viewMode]}>
      <div className="relative h-full">
        {product.oldPrice && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            -
            {Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            )}
            %
          </span>
        )}
        <img
          src={transformedImage}
          alt={product.title}
          className={imageClasses[viewMode]}
          loading="lazy"
        />
        <button
          onClick={handleWishlistToggle}
          aria-label={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <HeartIcon color={isInWishlist ? "#FF0000" : "#6C7275"} />
        </button>
      </div>

      <div>
        <div className="flex items-center text-gray-500">
          <FiveStars rating={product.rating} />
          <span className="ml-2">{product.rating.toFixed(1)} out of 5</span>
        </div>
        <h3 className="font-medium text-gray-900 mt-2 line-clamp-1 text-sm sm:text-base md:text-lg lg:text-base">
          {product.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-gray-600 text-xs sm:text-sm md:text-base lg:text-sm">
          {getTruncatedDescription(product.description)}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-gray-900 font-bold text-sm sm:text-base md:text-lg lg:text-base">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-xs sm:text-sm md:text-base lg:text-sm">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex items-center mt-4 space-x-2">
          <button
            className="flex-1 border border-gray-400 py-2 rounded-lg text-xs sm:text-sm md:text-base lg:text-sm hover:border-gray-700 hover:text-gray-800 transition duration-200"
            onClick={handleViewProduct}
          >
            {useNavigation ? "View Product" : "View Details"}
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-xs sm:text-sm md:text-base lg:text-sm hover:bg-gray-800 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {!useNavigation && (
        <ProductDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          product={product}
          onAddToCart={handleAddToCart}
        />
      )}

      {currentSnackbar && (
        <SnackbarNotification
          open={Boolean(currentSnackbar)}
          onClose={handleSnackbarClose}
          message={currentSnackbar.message}
          severity={currentSnackbar.severity}
        />
      )}
    </div>
  );
};

UnifiedProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onSnackbar: PropTypes.func,
  viewMode: PropTypes.oneOf(["grid", "list", "desktoplist"]),
  useNavigation: PropTypes.bool,
};

export default UnifiedProductCard;

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../Redux/wishlistSlice";

const WishlistSidebar = ({ isOpen, onClose }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Wishlist</h2>
          <button onClick={onClose} className="text-red-500 font-bold text-lg">
            ×
          </button>
        </div>
        {wishlist.length > 0 ? (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b pb-2"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-grow">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-green-600">{`$${item.price}`}</p>
                </div>
                <button
                  onClick={() => dispatch(handleRemoveFromWishlist(item.id))}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistSidebar;

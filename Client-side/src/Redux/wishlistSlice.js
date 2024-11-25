import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.find((product) => product.id === item.id);
      if (!exists) {
        state.push(item);
      }
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

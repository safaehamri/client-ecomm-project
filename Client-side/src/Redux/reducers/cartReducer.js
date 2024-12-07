import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../actionTypes";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
}; // nous renvoi les items qui sont deja dans le lS sinon renvoi un array empty

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.cartItems.findIndex(
        //
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return { ...state, cartItems: updatedCartItems };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
      // action .payload = contient le produit dont le user veut supprimer , alors , on a creer une deuxieme list , donc on loup sur tous les items , si on coincide avec le meme id du produit dont on va sauter ce produits et la nouvelle liste va contenir tous les produits sauf celui choisi par le user
    }

    case UPDATE_CART_QUANTITY: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.newQuantity }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;

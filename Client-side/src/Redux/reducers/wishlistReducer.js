import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actionTypes";

const initialState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlistItems")) || [],
}; // BRING THE STATE FROM LOCALSTORAGE OR GIVE ME AN EMPTY ARRAY

// Déclaration du reducer pour gérer l'état de la wishlist
const wishlistReducer = (state = initialState, action) => {
  // Vérifie le type de l'action envoyée
  switch (action.type) {
    // Cas où l'action est d'ajouter un élément à la wishlist
    case ADD_TO_WISHLIST:
      // Vérifie si l'élément à ajouter existe déjà dans la wishlist
      if (state.wishlistItems.find((item) => item.id === action.payload.id)) {
        // Si l'élément existe déjà, retourne l'état actuel sans changement
        return state;
      }
      // Si l'élément n'existe pas, ajoute-le à la liste et retourne le nouvel état
      return {
        ...state, // Copie tout l'état existant
        wishlistItems: [...state.wishlistItems, action.payload], // Ajoute l'élément reçu dans `action.payload` à la liste existante
      };

    // Cas où l'action est de supprimer un élément de la wishlist
    case REMOVE_FROM_WISHLIST:
      return {
        ...state, // Copie tout l'état existant pour préserver les autres propriétés qui ne sont pas modifiées
        wishlistItems: state.wishlistItems.filter(
          // Utilise la méthode `filter` pour créer une nouvelle liste sans l'élément à supprimer
          (item) => item.id !== action.payload // Garde uniquement les éléments dont l'ID est différent de celui fourni dans `action.payload`
        ),
      };

    // Par défaut, retourne l'état actuel si l'action n'est pas reconnue
    default:
      return state;
  }
};

export default wishlistReducer;

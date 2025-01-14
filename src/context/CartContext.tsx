import { createContext, ReactNode, useContext, useReducer } from "react";

// Define types for CartItem, State, and Action
interface CartItem {
  id: number | undefined;
  title?: string;
  price?: number;
  image?: string;
}

interface State {
  cart: CartItem[];
}

type Action =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; id: number };

// Create the CartContext with the correct type
type CartContextType = [State, React.Dispatch<Action>];

// Initial state for the cart
export const initialState: State = {
  cart: [],
};

// Reducer function for handling actions
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART": {
      const { cart } = state;

      if (action.id === undefined) {
        console.warn("Cannot remove an item without a valid id.");
        console.log(action.id);
        return state;
      }

      const index = cart.findIndex((cartItem) => cartItem.id === action.id);

      if (index >= 0) {
        const newCart = [...cart];
        newCart.splice(index, 1);
        return { ...state, cart: newCart };
      } else {
        console.warn(
          `Cannot remove product with id: ${action.id} as it does not exist in the cart.`
        );
        return state;
      }
    }

    default:
      return state;
  }
};

// Create the CartContext
export const CartContext = createContext<CartContextType>([
  initialState,
  () => {},
]);

interface CartProviderProps {
  initialState: State;
  reducer: Action;
  children: ReactNode;
}

// CartProvider component to wrap the app
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const reducerValue = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={reducerValue}>{children}</CartContext.Provider>
  );
};

// Custom hook to access the CartContext
export const useCartContext = (): CartContextType => {
  return useContext(CartContext);
};

export default reducer;

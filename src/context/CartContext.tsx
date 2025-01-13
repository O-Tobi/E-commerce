import { createContext, ReactNode, useContext, useReducer } from "react";

// Define types for CartItem, State, and Action
interface CartItem {
  id?: number | undefined;
  title?: string | undefined;
  price?: number | undefined;
  image?: string | undefined;
}

interface State {
  cart: CartItem[];
}

type Action =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number | undefined};

// Create the CartContext with the correct type
type CartContextType = [State, React.Dispatch<Action>];

// Initial state for the cart
const initialState: State = {
  cart: [],
};

// Reducer function for handling actions
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create the CartContext
export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

// CartProvider component to wrap the app
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const reducerValue = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={reducerValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the CartContext
export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

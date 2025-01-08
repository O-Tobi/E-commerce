import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type CartContextType = ReturnType<typeof useReducer>;

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
  reducer: React.Reducer<object, object >;
  initialState: object;  
}

export const CartProvider: React.FC<CartProviderProps> = ({ reducer, initialState, children }) => {

  const reducerValue = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={reducerValue}>
      {children}
    </CartContext.Provider>
  );
};


export const useCartContext = ()=> {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider")
  };
  return context;
};

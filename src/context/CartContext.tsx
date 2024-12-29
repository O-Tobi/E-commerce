import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CartcontextType {
  cartNumber: number;
  setCartNumber: Dispatch<SetStateAction<number>>;
}

const CartContext = createContext<CartcontextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartNumber, setCartNumber] = useState(0);

  const cartValue: CartcontextType = { cartNumber, setCartNumber };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;

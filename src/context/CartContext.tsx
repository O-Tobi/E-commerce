import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CartContextType {
  cartNumber: number;
  setCartNumber: Dispatch<SetStateAction<number>>;
  cartItem: object | null;
  setCartItem: Dispatch<SetStateAction<object>>;
}

const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartItem, setCartItem] = useState<object | null>(null);

  const cartValue: CartContextType = {
    cartNumber,
    setCartNumber,
    cartItem,
    setCartItem,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;

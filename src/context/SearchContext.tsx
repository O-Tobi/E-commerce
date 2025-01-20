import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for the context
interface SearchContextType {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

// Create the context with the correct type
const searchContext = createContext<SearchContextType | undefined>(undefined);

// Create a custom hook to consume the context
const useSearchContext = () => {
  const context = useContext(searchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

// Create the provider component
export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [input, setInput] = useState("");

  const value: SearchContextType = {
    input,
    setInput,
  };

  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
};

export default useSearchContext;

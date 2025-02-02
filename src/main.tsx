import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import reducer, { initialState } from "./context/CartContext.tsx";
import { SearchProvider } from "./context/SearchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchProvider>
      <CartProvider initialState={initialState} reducer={reducer}>
        <App />
      </CartProvider>
    </SearchProvider>
  </StrictMode>
);

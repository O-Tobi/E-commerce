import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

interface NavLinkProps {
  navName: string;
  isNavName: boolean;
  icon: string | undefined;
  navStyle?: string;
}

const Navigation: React.FC<NavLinkProps> = ({
  navStyle = " ",
  navName,
  isNavName,
  icon,
}) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartDisplay must be used within a CartProvider");
  }

  const { cartNumber } = cartContext;

  return (
    <div className={`/${navStyle}`}>
      {isNavName ? (
        <NavLink to={`/${navName.toLowerCase()}`}>{navName}</NavLink>
      ) : (
        <NavLink to={`/${navName.toLowerCase()}`}>
          <button className="flex">
            {icon && (
              <img src={icon} height={25} width={25} alt={`${navName} Icon`} />
            )}
            {navName === "Checkout" && cartNumber !== 0 ? (
              <div className="badge bg-primary text-white">{cartNumber}</div>
            ) : null}
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;

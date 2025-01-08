import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

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
  const [{ cart }] = useCartContext();

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
            {navName === "Checkout" && cart.length !== 0 ? (
              <div className="badge bg-primary text-white">{cart.length}</div>
            ) : null}
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;

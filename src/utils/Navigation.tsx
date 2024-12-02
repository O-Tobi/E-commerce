import React from "react";
import { NavLink } from "react-router-dom";
//import { Cart } from "../../utils";

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
  return (
    <div className={`/${navStyle}`}>
      {isNavName ? (
        <NavLink to={`/${navName.toLowerCase()}`}>{navName}</NavLink>
      ) : (
        <NavLink to={`/${navName.toLowerCase()}`}>
          <img src={icon} height={25} width={25} />
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;

// navlink link link-hover

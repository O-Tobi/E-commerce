import React from "react";
import { NavLink } from "react-router-dom";
//import { Cart } from "../../utils";

interface NavLinkProps {
  navName: string;
  isNavName: boolean;
  icon: string | undefined;
}

const Navigation: React.FC<NavLinkProps> = ({ navName, isNavName, icon }) => {
  return (
    <div className="navlink">
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

import React from "react";
import { NavLink } from "react-router-dom";
//import { Cart } from "../../utils";

interface NavLinkProps {
  navName: string;
  isNaVName: boolean;
  icon: string | undefined;
}

const Navigation: React.FC<NavLinkProps> = ({ navName, isNaVName, icon }) => {
  return (
    <div className="font-semibold">
      {isNaVName ? (
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

import React from "react";
import { NavLink } from "react-router-dom";
//import { Cart } from "../../utils";

interface NavLinkProps {
    text: string
};

const Navigation: React.FC<NavLinkProps> = ({text}) => {
    return (
        <NavLink to={`/${text.toLowerCase()}`}>
            {text} 
        </NavLink>
    )
};

export default Navigation;
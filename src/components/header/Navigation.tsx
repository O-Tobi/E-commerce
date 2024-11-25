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
            {/* <span>
                <img src={Cart} alt="cart" width={18} height={18}/>
            </span> */}
        </NavLink>
    )
};

export default Navigation;
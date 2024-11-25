import React from "react";
import { NavLink } from "react-router-dom";


interface NavLinkProps {
    iconName: string
    icon: string
};

const LoginAndProfile: React.FC<NavLinkProps> = ({icon, iconName}) => {
    return (
        <NavLink to={`/${iconName.toLowerCase()}`}>
             <span>
                <img src={icon} alt="cart" width={18} height={18}/>
            </span> 
        </NavLink>
    )
};

export default LoginAndProfile;
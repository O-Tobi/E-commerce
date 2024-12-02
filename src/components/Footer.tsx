import {Twitter, Youtube, Facebook } from "./../utils/assets";
import { FooterServices, FooterCompany } from "../utils/constants";
import Navigation from "../utils/Navigation";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        {FooterServices.map((service, id) => (
          <Navigation
            key={id}
            navName={service.navName}
            isNavName={service.isNavName}
            icon={service.icon}
            navStyle="link link-hover"
          />
        ))}
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        {FooterCompany.map((service, id) => (
          <Navigation
            key={id}
            navName={service.navName}
            isNavName={service.isNavName}
            icon={service.icon}
            navStyle="link link-hover"
          />
        ))}
        
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <NavLink
          to=""
          target="_blank"
          rel="noopener noreferrer">
          <img src={Twitter}/>
          </NavLink>

          <NavLink
          to=""
          target="_blank"
          rel="noopener noreferrer">
          <img src={Youtube}/>
          </NavLink>

          <NavLink
          to=""
          target="_blank"
          rel="noopener noreferrer">
          <img src={Facebook}/>
          </NavLink>

         
        </div>
      </nav>
    </footer>

    // apply toast that ask if they want to contact the developer
  );
};

export default Footer;

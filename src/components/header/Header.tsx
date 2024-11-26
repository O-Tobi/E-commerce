import { NavText, Menu, Close } from "../../utils/index.js";
import Navigation from "./Navigation";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="flex nav bg-white ">
      {/* logo with first three nav */}
      <div className="flex items-center space-x-8">
        {/* logo */}
        <nav className="logo">Tobrick</nav>
        {/* first three navs */}
        <div className="hidden lg:flex space-x-4">
          {NavText.slice(0, 4).map((nav, id) => (
            <Navigation
              key={id}
              navName={nav.navName}
              icon={nav.icon}
              isNaVName={nav.isNavName}
            />
          ))}
        </div>
      </div>

      {/* search input */}
      <input type="search" className="input" placeholder="Search" />

      {/* 
    last two navigations alone on lg
    -last two navigations with the hamburger menu on md
    -harmurger alone on sm */}
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-6">
          {NavText.slice(-2).map((nav, id) => (
            <Navigation
              key={id}
              navName={nav.navName}
              icon={nav.icon}
              isNaVName={nav.isNavName}
            />
          ))}
        </div>

        {/* hamburger menu */}
        <button className="lg:hidden" onClick={toggle}>
          {isOpen ? (
            <div className="w-[18px] h-[18px] sm:w-[25px] sm:h-[25px]">
              <img src={Close} alt="Menu" className="w-full h-full" />
            </div>
          ) : (
            <div className="w-[18px] h-[18px] sm:w-[25px] sm:h-[25px]">
              <img src={Menu} alt="Menu" className="w-full h-full" />
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

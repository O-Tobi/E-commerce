import { NavText, Menu, Close, Search } from "../../utils/index.js";
import Navigation from "./Navigation";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="navbar justify-between p-2 ">
      {/* logo with first four nav */}
      <div className="flex-none space-x-8">
        {/* logo */}
        <nav className="logo">Tobrick</nav>
        {/* first three navs */}
        <div className="hidden lg:flex space-x-4">
          {NavText.slice(0, 4).map((nav, id) => (
            <Navigation
              key={id}
              navName={nav.navName}
              icon={nav.icon}
              isNavName={nav.isNavName}
            />
          ))}
        </div>
      </div>

      {/* search input */}
      {/* <input type="search" className="input" placeholder="Search" /> */}

      <label className="hidden input input-bordered md:flex  items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <img src={Search} width={18} height={18} />
      </label>

      {/* 
    last two navigations alone on lg
    -last two navigations with the hamburger menu on md
    -harmurger alone on sm */}
      <div className="flex  items-center space-x-6">
        <div className="hidden md:flex space-x-6">
          {NavText.slice(-2).map((nav, id) => (
            <Navigation
              key={id}
              navName={nav.navName}
              icon={nav.icon}
              isNavName={nav.isNavName}
            />
          ))}
        </div>

        {/* hamburger menu */}
        <button
          className="lg:hidden flex items-center justify-center"
          onClick={toggle}
          aria-label="Toggle Menu"
          role="button"
          tabIndex={0}
        >
          {isOpen ? (
            <div className="fixed top-0 right-0 z-50  bg-white shadow-lg w-64 h-full max-w-full overflow-auto">
              <div className="flex justify-between items-center">
                {/* Close Icon */}
                <div className="mt-3 ml-3 icon-size">
                  <img src={Close} alt="Close Menu" className="w-full h-full" />
                </div>

                {/* Additional Navigation Links */}
                <div className="md:hidden flex items-center mt-3 mr-3 space-x-4">
                  {NavText.slice(-2).map((nav, id) => (
                    <div key={id} className="flex items-center">
                      <Navigation
                        navName={nav.navName}
                        icon={nav.icon}
                        isNavName={nav.isNavName}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Navigation Links */}
              <div className="mt-16 space-y-2 px-4">
                {NavText.slice(0, 4).map((nav, id) => (
                  <Navigation
                    key={id}
                    navName={nav.navName}
                    icon={nav.icon}
                    isNavName={nav.isNavName}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Menu Icon
            <div className="flex icon-size">
              <img src={Menu} alt="Open Menu" className="w-full h-full" />
            </div>
          )}
        </button>
        {/* hamburger menu ends*/}
      </div>
    </header>
  );
};

export default Header;

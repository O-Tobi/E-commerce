import { Menu, Close } from "./../../utils/assets.js";
import { NavText } from "../../utils/constants.js";
import Navigation from "../../utils/Navigation.js";
import { useState } from "react";

const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
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
            <div className="mt-3 ml-3 icon-size" >
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
  );
};

export default MenuComponent;

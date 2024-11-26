import { 
  NavText,
  Menu,
  Close,
 } from "../../utils/index.js";
import Navigation from "./Navigation";
import { useState } from "react";


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState)
  };

  return (
    <header className="flex justify-between  p-10 bg-white ">
      <div className="flex items-center space-x-8">
        <nav className="font-bold text-2xl">Tobrick</nav>
        <div className="hidden md:flex space-x-6">
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

      <input
        type="search"
        className="
        border
         border-primary
         rounded-3xl 
         px-4 py-2 
        focus:outline-none 
        focus:ring-2
      focus:ring-accent
      w-4/12"
        placeholder="Search"
      />

      <button className="md:hidden" onClick={toggle}>
        {isOpen ? <img src={Close} alt="Menu" width={25} height={25}/> : 
        <img src={Menu} alt="Menu" width={25} height={25}/> }
      </button>
      

      <div className="flex items-center space-x-8">
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
      </div>
    </header>
  );
};

export default Header;

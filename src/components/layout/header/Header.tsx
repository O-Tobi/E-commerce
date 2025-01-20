import { NavText } from "../../../utils/constants.js";
import Navigation from "../../../utils/Navigation.js";
import MenuComponent from "./Menu.js";
import InputComponent from "./Input.js";
import { Link } from "react-router-dom";
import useSearchContext from "../../../context/SearchContext.js";



const Header: React.FC = () => {
  const {setInput} = useSearchContext();

  const homehandler = () => {
    setInput("");
  };


  return (
    <div className="items-center">
      <header className="navbar justify-between px-4 pt-2">
        {/* logo with first four nav */}
        <div className="flex-none space-x-8">
          {/* logo */}
          <button onClick={homehandler}>
          <Link to="/" className="logo">Tobrick</Link>
          </button>
          {/* first three navs */}
          <div className="hidden lg:flex space-x-4">
            {NavText.slice(0, 4).map((nav, id) => (
              <Navigation
                key={id}
                navName={nav.navName}
                icon={nav.icon}
                isNavName={nav.isNavName}
                navStyle="bold-xl md:text-base font-semibold sm:text-sm"
              />
            ))}
          </div>
        </div>

        {/* search input */}

        <InputComponent  className="hidden md:flex h-10" />

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
          <MenuComponent />
        </div>
      </header>

      {/* search bar on sm  */}
      <div className="flex md:hidden w-full px-2 mb-2">
        <InputComponent className="flex text-sm  w-full px-2 mx-0.5 h-8" />
      </div>
    </div>
  );
};

export default Header;

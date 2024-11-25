import { NavText } from "../../utils/index.js";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-12 bg-white">
      <nav className="font-bold text-xl">Tobrick</nav>
      {NavText.slice(0, 4).map((nav, id) => (
        <div key={id}>
          <Navigation
            navName={nav.navName}
            icon={nav.icon}
            isNaVName={nav.isNavName}
          />
        </div>
      ))}

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
      w-3/12"
        placeholder="Search"
      />

      {NavText.slice(-2).map((nav, id) => (
        <div key={id}>
          <Navigation
            navName={nav.navName}
            icon={nav.icon}
            isNaVName={nav.isNavName}
          />
        </div>
      ))}
    </header>
  );
};

export default Header;

import { NavText } from "../../utils/index.js";
import Navigation from "./Navigation";
import { Cart } from "../../utils/index.js";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white">
      <nav className="font-bold text-xl">Tobrick</nav>
      {NavText.slice(0, 4).map((nav, index) => (
        <div key={index}>
          <Navigation text={nav} />
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

      <nav><img src={Cart} alt="cart" width={18} height={18}/></nav>

      {NavText.slice(-1).map((nav, index) => (
        <div key={index}>
          <Navigation text={nav} />
        </div>
      ))}
    </header>
  );
};

export default Header;

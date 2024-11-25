import { NavText } from "../../utils/index.js";
import Navigation from "./Navigation";
import { LogAndProf } from "../../utils/index.js";
import LoginAndProfile from "./LoginAndProfile.js";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white">
      <nav className="font-bold text-xl">Tobrick</nav>
      {NavText.map((nav, index) => (
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

      {LogAndProf.map((secondNav, index) => (
        <div key={index}>
          <LoginAndProfile
            iconName={secondNav.iconName}
            icon={secondNav.icon}
          />
        </div>
      ))}
    </header>
  );
};

export default Header;

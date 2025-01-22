import { Search } from "../../../utils/assets";
import useSearchContext from "../../../context/SearchContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface InputComponentProps {
  className: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ className = "" }) => {
  const { setInput } = useSearchContext();
  const [tempInput, setTempInput] = useState("");

  // handle the search input before update the global search context
  const handleLocalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempInput(e.target.value);
  };

  //since the search page is on the homepage, this chunk will make sure the search function works regardless of which page you're on
  const navigateTo = useNavigate();
  const navigate = () => {
    navigateTo("/");
  };

  // update the global context on keypress Enter
  const handleContextUpdate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tempInput.length !== 0) {
      setInput(tempInput);
      navigate();
      setTempInput("");
    }
  };

  return (
    <label
      className={`input input-bordered  item-center gap-2 rounded-3xl ${className}`}
    >
      <input
        onKeyDown={handleContextUpdate}
        onChange={handleLocalInput}
        value={tempInput}
        type="text"
        className="grow"
        placeholder="Search products, brands and categories"
      />
      <img src={Search} width={18} height={18} />
    </label>
  );
};

export default InputComponent;

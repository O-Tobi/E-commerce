import { Search } from "../../../utils/assets";
import useSearchContext from "../../../context/SearchContext";
import { useState	 } from "react";

interface InputComponentProps {
  className: string;
  
}

const InputComponent: React.FC<InputComponentProps> = ({ className = "" }) => {
  const {setInput} = useSearchContext();
  const [tempInput, setTempInput ] = useState("");

  const handleLocalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempInput(e.target.value);
    console.log(tempInput);
  };

  const handleContextUpdate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter" && tempInput.length !== 0) {
      setInput(tempInput);
      setTempInput("");
      console.log("search text:", tempInput)
    };
  };


  return (
    <label
      className={`input input-bordered  item-center gap-2 rounded-3xl ${className}`}
    >
      <input onKeyDown={handleContextUpdate} onChange={handleLocalInput} value={tempInput} type="text" className="grow" placeholder="Search products, brands and categories" />
      <img src={Search} width={18} height={18} />
    </label>
  );
};

export default InputComponent;

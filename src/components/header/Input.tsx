import { Search } from "../../utils/assets";

interface InputComponentProps {
  className: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ className = "" }) => {
  return (
    <label
      className={`input input-bordered  item-center gap-2 rounded-3xl ${className}`}
    >
      <input type="text" className="grow" placeholder="Search products, brands and categories" />
      <img src={Search} width={18} height={18} />
    </label>
  );
};

export default InputComponent;

import { useNavigate } from "react-router-dom";

const CheckOutCard = ({
  imageUrl,
  title,
  price,
  itemCount,
  itemId,
}) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/products/${itemId}`);
  };

  return (
    <div className="card card-normal m-2">
      <div className="divider m-0"></div>
      <div onClick={navigateHandler} className="card-body lg:flex-row ">
      <figure className="w-full lg:w-8/12">
        <img
          className="h-40"
          src={imageUrl}
          alt={`${title.toLocaleLowerCase()}`}
        />
      </figure>
        <div className="text-center lg:text-left my-2">
        <h3 className="text-xl mb-1">{title}</h3>
        <h2 className="text-xl font-bold mb-1">${price}</h2>
        <h3 className="text-xl mb-1">Quantity: {itemCount}</h3>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCard;

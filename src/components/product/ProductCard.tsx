import {useNavigate } from "react-router-dom";

interface ProductCardProps {
  productImage: string;
  productName: string;
  productPrice: number;
  productId?: number
}

const ProductCard: React.FC<ProductCardProps> = ({
  productImage,
  productName,
  productPrice,
  productId
}) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`products/${productId}`);
  };

  return (
    <div onClick={navigateHandler} className="card card-normal gb-mg mb-10 bg-base-100 w-96 md:w-80 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
      <figure>
        <img
          className="h-40"
          src={productImage}
          alt={`${productName.toLocaleLowerCase()}`}
        />
      </figure>
      <div className="card-body items-center text-center ">
        <h6>{productName}</h6>

        <div className="card-actions card-title justify-end">
          ${productPrice}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

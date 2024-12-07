interface ProductCardProps {
  productImage: string;
  productName: string;
  productPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productImage,
  productName,
  productPrice,
}) => {
  return (
    <div className="card card-normal gb-mg mb-10 bg-base-100 w-96 md:w-80 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
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

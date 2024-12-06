
interface ProductCardProps {
    productImage: string;
    productName: string;
    productDescription: string;

}


const ProductCard:React.FC<ProductCardProps> = ({productImage, productName, productDescription}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={productImage}
            alt={`${productName.toLocaleLowerCase()}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>{productDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    )
};

export default ProductCard;
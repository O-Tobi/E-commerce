import useApi from "../../services/apiCall";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useApi<{
    id: number;
    title: string;
    image: string;
    price: number;
    description:string;
    category: string;
  }>({ apiParams: `products/${id}` });

  if (error) {
    <>...error</>
  };

  if (loading) {
    <>...loading</>
  }

  console.log(id)

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={data?.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data?.title}</h2>
        {/* use the capitalize function here */}
        <h5>{data?.category.toUpperCase()}</h5>   
        <p>{data?.description}</p>
        <h5 className="font-bold">${data?.price}</h5>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy</button>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

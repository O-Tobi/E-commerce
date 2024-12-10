import useApi from "../../services/apiCall";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../utils/Loading";
import { Cart } from "../../utils/assets";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useApi<{
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  }>({ apiParams: `products/${id}` });

  if (error) {
    <>...error</>;
  }

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex justify-center my-5 mx-2">
      <div className="card lg:card-side bg-base-100 shadow-xl md:w-9/12 h-4/5">
        <figure className="w-full h-full">
          <img src={data?.image} alt={data?.title} className="object-cover" />
        </figure>
        <div className="card-body h-2/4">
          <h2 className="card-title mb-2">{data?.title}</h2>
          {/* use the capitalize function here */}
          <h6 className="text-sm">
            Category:{" "}
            <span className="bg-primary text-white px-1 py-0.5 rounded-sm">
              {data?.category.toUpperCase()}{" "}
            </span>{" "}
          </h6>
          <p>{data?.description}</p>

          <div>
            <h4 className="font-bold text-2xl">${data?.price}</h4>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary btn-block text-white flex items-center gap-2 relative">
              <img
                src={Cart}
                className="h-4 w-4 absolute left-4 invert brightness-0"
                alt="Cart Icon"
              />
              <span className="mx-auto">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

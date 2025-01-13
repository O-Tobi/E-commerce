import useApi from "../../services/apiCall";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../utils/Loading";
import { Cart } from "../../utils/assets";
import { useCartContext } from "../../context/CartContext";

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

  const [{ cart }, dispatch] = useCartContext();

  if (error) {
    <>...error</>;
  }

  if (loading) {
    return <LoadingComponent />;
  }

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
          id: data?.id,
          title: data?.title,
          image: data?.image,
          price: data?.price,
      }
    });
    console.log(cart);
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
        payload:  data?.id,
    });
  };

  // filter the cart by the curent id and get the length
  //on each product detail page, display only the number of the the specific item present in the cart
  const cartFilter = cart.filter((item) => item.id === data?.id);
  const itemCount = cartFilter.length;

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
            {itemCount !== 0 ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={removeFromCart}
                  className="btn bg-primary  text-white flex items-center text-2xl "
                >
                  {" "}
                  -{" "}
                </button>
                <p>{itemCount}</p>
                <button
                  onClick={addToCart}
                  className="btn bg-primary  text-white flex items-center text-2xl"
                >
                  {" "}
                  +{" "}
                </button>
                <p>({itemCount} item(s) added)</p>
              </div>
            ) : (
              <button
                onClick={addToCart}
                className="btn bg-primary btn-block text-white flex items-center gap-2 relative"
              >
                <img
                  src={Cart}
                  className="h-4 w-4 absolute left-4 invert brightness-0"
                  alt="Cart Icon"
                />
                <span className="mx-auto">ADD TO CART</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

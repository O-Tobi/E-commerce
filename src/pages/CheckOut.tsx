import { useCartContext } from "../context/CartContext";
import { Cart } from "../utils/assets";
import CheckOutCard from "./CheckOutCard";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const [{ cart }] = useCartContext();

  // summarize the products such that only one product is shown and its count in the cart is diplayed
  const cartMap = cart.map((item) => item.id);
  const cartSet = new Set(cartMap);
  const newCartArray = Array.from(cartSet);

  const uniqueCheckoutList = newCartArray.map((id) => {
    const uniqueItem = cart.find((item) => item.id === id);
    if (!uniqueItem) {
      throw new Error("Item with id not found in the cart");
    }
    //find the number of each item in the array
    const count = cart.filter((item) => item.id === id).length;

    if (uniqueItem.price === undefined) {
      throw new Error("price is undefined");
    }
    const productTotal = uniqueItem?.price * count;

    return {
      ...uniqueItem,
      count,
      productTotal,
    };
  });

  const checkoutSummary = uniqueCheckoutList.reduce((acc, product) => {
    return acc + product.productTotal;
  }, 0);

  const currencyFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(checkoutSummary);

  return (
    <section>
      {uniqueCheckoutList.length === 0 ? (
        <div className=" card my-10 shadow-xl mx-4">
          <div className="card-body items-center">
            <div className="bg-primary rounded-full h-24 w-24 items-center shadow-xl">
              <figure>
                <img
                  src={Cart}
                  className=" invert brightness-0 m-4"
                  alt="Cart Icon"
                />
              </figure>
            </div>
            <div className="text-center">
              <h3 className="text-2xl">Your cart is empty!</h3>
              <p className="my-1">
                Browse our categories and discover our best deals!
              </p>
              <button className="btn bg-primary text-white shadow-xl">
                <Link to="/">Start Shopping</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row m-4 gap-4">
          <div className="card lg:w-8/12 p-2 shadow-xl">
            <h2 className="card-title">Cart ({cart.length})</h2>
            {uniqueCheckoutList.map((item) => (
              <CheckOutCard
                key={item.id}
                imageUrl={item.image}
                title={item.title}
                price={item.price}
                itemCount={item.count}
                itemId={item.id}
              />
            ))}
          </div>

          <div className="card lg:w-4/12 p-2 shadow-xl h-1/3">
            <h2 className="card-title">Cart Summary</h2>
            <div className="divider m-0"></div>
            <div className="card-body flex-row justify-between font-bold text-4xl">
              <p>Subtotal</p>
              <p className="text-right">{currencyFormat}</p>
            </div>
            <div className="divider m-0"></div>
            <div className="card-action">
              <button className="btn btn-block font-bold">
                CHECKOUT ({currencyFormat})
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CheckOut;

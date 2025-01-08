import { useCartContext } from "../context/CartContext";
import CheckOutCard from "./CheckOutCard";

const CheckOut = () => {
  const [{ cart }] = useCartContext();

 
  //map through the cart to isolate the ids
  const cartMap = cart.map(item => item.id);
  // select only a single case of each repetitions
  const cartSet = new Set(cartMap);
  // make the cartSet into an array of ids
  const newCartArray = Array.from(cartSet);

  //use the ids to map through the original cart and also do the count 
  const uniqueCheckoutList = newCartArray.map((id) => {
    // Find the unique item from the cart
    const uniqueItem = cart.find((item) => item.id === id);
  
    // Count occurrences of this item in the cart
    const count = cart.filter((item) => item.id === id).length;
  
    // Return a new object combining the item and its count
    return {
      ...uniqueItem,
      count,
    };
  });


  console.log(uniqueCheckoutList);

  
 
  
  return (
    <section>
      <div className="flex flex-col lg:flex-row m-4 gap-4 ">
        <div className="card lg:w-8/12 bg-red-400 p-2 shadow-xl">
          <h2 className="card-title">Cart {cart.length}</h2>
          {uniqueCheckoutList.map((item) => (
            <CheckOutCard
              key={item.id}
              imageUrl={item.image}
              title={item.title}
              price={item.price}
              itemCount={item.count}
              
            />
          ))}
        </div>

        <div className="card lg:w-4/12 bg-blue-400 p-2 shadow-xl">
          <h2 className="card-title">Cart Summary</h2>
          <div className="divider m-0"></div>
          <div className="card-body">the summary</div>
          <div className="divider m-0"></div>
          <div className="card-action">
            <button className="btn btn-block">CHECKOUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;

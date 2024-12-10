const CheckOut = () => {
  return (
    <section>
      <div className="flex m-4 gap-4 ">
        <div className="card w-8/12 bg-red-400 p-4 shadow-xl ">
          <h2 className="card-title">Cart</h2>
          <div className="card-body">cart content goes here</div>
          <div className="card-actions">
            remove and incdrement button goes here
          </div>
        </div>

        <div className="card w-4/12 bg-blue-400 p-4 shadow-xl">
          <h2 className="card-title">Cart Summary</h2>
          <div className="card-body">the summary</div>
          <div className="card-action">the checkoutbutton</div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;

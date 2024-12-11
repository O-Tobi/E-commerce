const CheckOut = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row m-4 gap-4 ">
        <div className="card lg:w-8/12 bg-red-400 p-2 shadow-xl ">
          <h2 className="card-title">Cart</h2>
          <div className="divider m-0"></div>
          <div className="card-body">cart content goes here</div>
          <div className="card-actions">
            remove and incdrement button goes here
          </div>
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

import useSearchContext from "../context/SearchContext";
import useApi from "../services/apiCall";
import LoadingComponent from "../utils/Loading";
import ProductCard from "../components/product/ProductCard";

const SearchPage = () => {
  const { input, setInput } = useSearchContext();
  const { data, error, loading } = useApi<{
    id: number;
    title: string;
    image: string;
    price: number;
  }>({ apiParams: "products" });

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <div>...error fetching data</div>;
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No products found.</div>;
  }

  const searchResult = data.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );

  const homehandler = () => {
    setInput("");
  };

  return (
    <>
      <h1 className="m-2 text-left text-2xl md:text-4xl">
        Search Result for: <span className="text-primary">"{input}"</span>
      </h1>
      <div className="flex flex-wrap justify-between content-center mt-6">
        {searchResult.length !== 0 ? (
          searchResult.map((result) => (
            <ProductCard
              key={result.id}
              productName={result.title}
              productImage={result.image}
              productPrice={result.price}
              productId={result.id}
            />
          ))
        ) : (
          <div className="w-full text-center m-4">
            <h2 className="text-center text-2xl my-1">Search not found</h2>
            {/* style this button */}
            <button
              className="btn bg-primary text-white shadow-xl my-1"
              onClick={homehandler}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;

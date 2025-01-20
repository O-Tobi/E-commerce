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
      <h1 className="m-2">Search Result for "{input}"</h1>
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
          <>
            <h3>Search not found</h3>
            {/* style this button */}
            <button onClick={homehandler}>Conntinue Shopping</button>
          </>
        )}
      </div>
    </>
  );
};

export default SearchPage;

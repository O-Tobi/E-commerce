import ProductCard from "./ProductCard";
import useApi from "../../services/apiCall";

const Products = () => {
  const { data, error, loading } = useApi<{
    id: number;
    title: string;
    image: string;
    price: number;
  }>({ apiParams: "products" });

  if (loading) {
    return (
      <div className="flex justify-center m-auto items-center content-center w-6/12">
        <span className="loading loading-infinity w-full loop-gradient"></span>
      </div>
    );
  }

  if (error) {
    return <div>...error fetching data</div>;
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <section className="flex flex-wrap justify-between content-center my-5 mx-10 sm:px-5 md:px-0 ">
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          productName={product.title}
          productImage={product.image}
          productPrice={product.price}
        />
      ))}
    </section>
  );
};

export default Products;

import ProductCard from "./ProductCard";
import useApi from "../../services/apiCall";
import { useState } from "react";

const Products = () => {
  const { data, error, loading } = useApi<{
    id: number;
    title: string;
    image: string;
    price: number;
  }>({ apiParams: "products" });

  const {
    data: categoryData,
    error: categoryError,
    loading: categoryLoading,
  } = useApi<string[]>({ apiParams: "products/categories" });

  const [catFilter, setCatFilter] = useState<string>("all");

  if (loading || categoryLoading) {
    return (
      <div className="flex justify-center m-auto items-center content-center w-6/12">
        <span className="loading loading-infinity w-full loop-gradient"></span>
      </div>
    );
  }

  if (error || categoryError) {
    return <div>...error fetching data</div>;
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No products found.</div>;
  }

  //function to change the first letter of each words to uppercase
  const Captialize = (i: string) => {
    return i
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  //get the value of the button clicked
  const FilterHandler = (e) => {
    const categoryValue = e.target.value;
    setCatFilter(categoryValue);
  };

  const RenderAll = (e) => {
    setCatFilter("all")
  }

  return (
    <section className="my-5 mx-10 sm:px-5 md:px-0 ">
        {/* filter buttons */}
      <div className="hidden md:flex justify-between font-bold bg-red-100 my-12 mx-20 p-0">
        <button onClick={RenderAll}>All</button>

        {/* mapping through the categories from the API for filtering purpose */}
        {categoryData?.map((cat: string, index: number) => (
          <button onClick={FilterHandler} value={cat} key={index}>
            {Captialize(cat)}
          </button>
        ))}
      </div>

        {/* onMount render all products, on filter: displayed the filtered product while onclick all render all products all */}
      <div className="flex flex-wrap justify-between content-center  ">
        {catFilter !== "all"
          ? data?.map(
              (product) =>
                product.category === catFilter && (
                  <ProductCard
                    key={product.id}
                    productName={product.title}
                    productImage={product.image}
                    productPrice={product.price}
                  />
                )
            )
          : data?.map((product) => (
                  <ProductCard
                    key={product.id}
                    productName={product.title}
                    productImage={product.image}
                    productPrice={product.price}
                  />
                )
            )}
      </div>
    </section>
  );
};

export default Products;

// on click of the category, get the value of the button clicked, convert to lowercase and use the value to filter the already mapped product card listing

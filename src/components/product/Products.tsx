import ProductCard from "./ProductCard";
import useApi from "../../services/apiCall";
import { useState } from "react";
import LoadingComponent from "../../utils/Loading";


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
  const [catName, setCatName] = useState<string>("All Products"); //this state changes the category name of the dropwon for sm

  if (loading || categoryLoading) {
    return (
      <LoadingComponent />
    )
  }

  if (error || categoryError) {
    return <div>...error fetching data</div>;
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No products found.</div>;
  }

  //function to change the first letter of each words to uppercase
  const Capitalize = (i: string) => {
    return i
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  //get the value of the button clicked
  const FilterHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const categoryValue = e.currentTarget.value;
    setCatFilter(categoryValue);
    setCatName(Capitalize(categoryValue));
  };

  const RenderAll = () => {
    setCatFilter("all");
    setCatName("All Products");
  };
  

  return (
    <section className="my-5 mx-10 sm:px-5 md:px-0 ">
      <div className="md:hidden  mb-2 dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          {catName}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button className="hover:underline" onClick={RenderAll}>
              All
            </button>
          </li>
          <li>
            {/* mapping through the categories from the API for filtering purpose */}
            {categoryData?.map((cat: string, index: number) => (
              <button
                className="hover:underline"
                onClick={FilterHandler}
                value={cat}
                key={index}
              >
                {Capitalize(cat)}
              </button>
            ))}
          </li>
        </ul>
      </div>

      {/* filter buttons */}
      <div className="hidden md:flex justify-between font-bold my-12 mx-20 p-0">
        <button className="hover:underline" onClick={RenderAll}>
          All
        </button>

        {/* mapping through the categories from the API for filtering purpose */}
        {categoryData?.map((cat: string, index: number) => (
          <button
            className="hover:underline"
            onClick={FilterHandler}
            value={cat}
            key={index}
          >
            {Capitalize(cat)}
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
                    productId={product.id}
                  />
                )
            )
          : data?.map((product) => (
              <ProductCard
                key={product.id}
                productName={product.title}
                productImage={product.image}
                productPrice={product.price}
                productId={product.id}
              />
            ))}
      </div>
    </section>
  );
};

export default Products;

// on click of the category, get the value of the button clicked, convert to lowercase and use the value to filter the already mapped product card listing

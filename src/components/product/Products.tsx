import ProductCard from "./ProductCard";
import useApi from "../../services/apiCall";

const Products = () => {
    const {data, error, loading} = useApi<{id: number; title: string; image: string; description: string;}>({apiParams: "products"})

    if (loading) {
        return <div>...loading</div>
    }

    if (error) {
       return <div>...error fetching data</div>
    }

    if (!data || !Array.isArray(data) || data.length===0) {
        return <div>No products found.</div>;
    }

  return (
    <section className="m-5 flex flex-wrap">
        {data?.map((product) => (
                <ProductCard
                    key={product.id}
                    productName={product.title}
                    productImage={product.image}
                    productDescription={product.description}
                />
            ))}
    </section>
  );
};

export default Products;

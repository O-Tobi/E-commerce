import Hero from "../components/Hero";
import Products from "../components/product/Products";
import useSearchContext from "../context/SearchContext";
import SearchPage from "./SearchPage";

const Home = () => {
  const { input } = useSearchContext();
  return (
    <main>
      {input.length !== 0 ? (
        <SearchPage />
      ) : (
        <>
          <Hero />
          <Products />
        </>
      )}
    </main>
  );
};

export default Home;

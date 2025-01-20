import Hero from "../components/Hero";
import Products from "../components/product/Products";
import SearchPage from "./SearchPage";
import useSearchContext from "../context/SearchContext";



const Home = () => {
    const {input} = useSearchContext();
    console.log(input);
    return (
        <main>
            {input.length === 0 ? (
                <>
                <Hero/>
                <Products/></>
            ) : (
                <SearchPage/>
            )}
            
        </main>
    )
}

export default Home;
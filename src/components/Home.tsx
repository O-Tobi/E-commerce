import Header from "./header/Header";
import Hero from "./Hero";
import Products from "./product/Products";
import Footer from "./Footer";


const Home = () => {
    return (
        <main>
            <Header />
            <Hero/>
            <Products/>
            <Footer/> 
        </main>
    )
}

export default Home;
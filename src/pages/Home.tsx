import Header from "../components/header/Header";
import Hero from "../components/Hero";
import Products from "../components/product/Products";
import Footer from "../components/Footer";


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
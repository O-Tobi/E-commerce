import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import ProductDetails from "./components/product/ProductDetails";
//import useSearchContext from "./context/SearchContext";


function App() {
 // const { input } = useSearchContext();

  return (
    <BrowserRouter>
      <Routes>
        {/* Group routes under a common Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>

        {/* Always accessible independent route */}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

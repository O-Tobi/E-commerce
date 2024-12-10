import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="product/:id" element={<ProductDetails/>}/>
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

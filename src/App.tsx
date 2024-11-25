import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import CheckOut from "./components/CheckOut";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hero" element={<Hero />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

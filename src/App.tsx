import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CheckOut from "./components/CheckOut";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

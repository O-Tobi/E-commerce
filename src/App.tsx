import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";

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

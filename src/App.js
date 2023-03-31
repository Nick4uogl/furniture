import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/about/About.jsx";
import Main from "./components/Main";
import ProductsPage from "./components/products_page/ProductsPage";
import ProductPage from "./components/product_page/ProductPage";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

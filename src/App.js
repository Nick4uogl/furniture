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
          <Route path="/furniture" element={<Main />} />
          <Route path="furniture/about" element={<About />} />
          <Route path="furniture/products" element={<ProductsPage />} />
          <Route path="furniture/:productId" element={<ProductPage />} />
          <Route path="furniture/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

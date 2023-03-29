import "./App.css";
import Advantages from "./components/advantages/Advantages";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import ProductsSlider from "./components/products_slider/ProductsSlider";

function App() {
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <Hero />
        <Advantages />
        <Products />
        <ProductsSlider />
      </div>
      <Footer />
    </div>
  );
}

export default App;

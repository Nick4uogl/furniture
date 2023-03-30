import React from "react";
import "./Products.scss";
import product1 from "../../img/products/product1.jpg";
import product2 from "../../img/products/product2.jpg";
import product3 from "../../img/products/product3.jpg";
import product4 from "../../img/products/product4.jpg";
import product5 from "../../img/products/product5.jpg";
import product6 from "../../img/products/product6.jpg";
import ProductsList from "../products_list/ProductsList.jsx";

let products = [
  {
    id: "1",
    img: product1,
    name: "Ліжко двоспальне",
    label: "20%",
    price: 12000,
  },
  {
    id: "2",
    img: product2,
    name: "Шкаф",
    label: "30%",
    price: 20000,
  },
  {
    id: "3",
    img: product3,
    name: "Стілець",
    label: "10%",
    price: 800,
  },
  {
    id: "4",
    img: product4,
    name: "Комод",
    label: "",
    price: 600,
  },
  {
    id: "5",
    img: product5,
    name: "Стілець барний",
    label: "",
    price: 600,
  },
  {
    id: "6",
    img: product6,
    name: "Кухня",
    label: "20%",
    price: 40000,
  },
];

function Products() {
  return (
    <section className="products">
      <div className="products__container">
        <h2 className="products__title">Наші товари</h2>
        <ProductsList products={products} />
        <button className="products__load-more">Завантажити ще</button>
      </div>
    </section>
  );
}

export default Products;

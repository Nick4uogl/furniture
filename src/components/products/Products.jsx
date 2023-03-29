import React from "react";
import "./Products.scss";
import product1 from "../../img/products/product1.jpg";
import product2 from "../../img/products/product2.jpg";
import product3 from "../../img/products/product3.jpg";
import product4 from "../../img/products/product4.jpg";
import product5 from "../../img/products/product5.jpg";
import product6 from "../../img/products/product6.jpg";

function Products() {
  let products = [
    {
      img: product1,
      name: "Ліжко двоспальне",
      label: "20%",
      price: 12000,
    },
    {
      img: product2,
      name: "Шкаф",
      label: "30%",
      price: 20000,
    },
    {
      img: product3,
      name: "Стілець",
      label: "10%",
      price: 800,
    },
    {
      img: product4,
      name: "Комод",
      label: "",
      price: 600,
    },
    {
      img: product5,
      name: "Стілець барний",
      label: "",
      price: 600,
    },
    {
      img: product6,
      name: "Кухня",
      label: "20%",
      price: 40000,
    },
  ];

  return (
    <section className="products">
      <div className="products__container">
        <h2 className="products__title">Наші товари</h2>
        <div className="products__list">
          {products.map((product) => {
            return (
              <article className="product">
                <img src={product.img} alt="" />
                <p className="product__title">{product.name}</p>
                <p className="product__label">
                  {product.label && `${product.label} знижки`}
                  <span className="product__price product__price-nohover">
                    {product.price} грн.
                  </span>
                </p>
                <p className="product__price">{product.price} грн. </p>
                <div className="product__overlay">
                  <button className="product__add">Добавити в корзину</button>
                  <a href="/#" className="product__info">
                    Детальніше
                  </a>
                </div>
                <button className="product__add product__add-nohover">
                  Добавити в корзину
                </button>
                <a href="/#" className="product__info product__info-nohover">
                  Детальніше
                </a>
              </article>
            );
          })}
        </div>
        <button className="products__load-more">Завантажити ще</button>
      </div>
    </section>
  );
}

export default Products;

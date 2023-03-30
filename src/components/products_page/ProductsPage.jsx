import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "./ProductsPage.scss";
import ProductsList from "../products_list/ProductsList.jsx";

import product1 from "../../img/products/product1.jpg";
import product2 from "../../img/products/product2.jpg";
import product3 from "../../img/products/product3.jpg";
import product4 from "../../img/products/product4.jpg";
import product5 from "../../img/products/product5.jpg";
import product6 from "../../img/products/product6.jpg";

let products = [
  {
    id: "1",
    img: product1,
    name: "Ліжко двоспальне",
    label: "20%",
    price: 12000,
    type: "ліжко",
  },
  {
    id: "2",
    img: product2,
    name: "Шкаф",
    label: "30%",
    price: 20000,
    type: "шкаф",
  },
  {
    id: "3",
    img: product3,
    name: "Стілець",
    label: "10%",
    price: 800,
    type: "стілець",
  },
  {
    id: "4",
    img: product4,
    name: "Комод",
    label: "",
    price: 600,
    type: "комод",
  },
  {
    id: "5",
    img: product5,
    name: "Стілець барний",
    label: "",
    price: 600,
    type: "стілець",
  },
  {
    id: "6",
    img: product6,
    name: "Кухня",
    label: "20%",
    price: 40000,
    type: "кухня",
  },
];

function ProductsPage() {
  const [productList, setProductList] = React.useState(products);

  function filterProducts(type) {
    if (type === "all") {
      setProductList(() => {
        return products;
      });
      return;
    }
    setProductList(() => {
      return products.filter((item) => item.type === type);
    });
  }

  return (
    <div className="products-page">
      <div className="products-page__container">
        <Swiper
          className="products-page__filter"
          spaceBetween={33}
          slidesPerView={"auto"}
        >
          <SwiperSlide className="products-page__slide">
            <div
              className="products-page__filter-item"
              onClick={() => filterProducts("all")}
            >
              <p>Усі товари</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="products-page__slide">
            <div
              className="products-page__filter-item"
              onClick={() => filterProducts("кухня")}
            >
              <p>Кухні</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="products-page__slide">
            <div
              className="products-page__filter-item"
              onClick={() => filterProducts("стіл")}
            >
              <p>Столи</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="products-page__slide">
            <div
              className="products-page__filter-item"
              onClick={() => filterProducts("ліжко")}
            >
              <p>Ліжка</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="products-page__slide">
            <div
              className="products-page__filter-item"
              onClick={() => filterProducts("комод")}
            >
              <p>Комоди</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="products-page__slide">
            <div
              className="products-page__filter-item"
              onClick={() => filterProducts("шкаф")}
            >
              <p>Шкафи</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <ProductsList products={productList} />
        <div className="products-page__navigation">
          <a href="/#" className="products-page__navigation-item">
            1
          </a>
          <a href="/#" className="products-page__navigation-item">
            2
          </a>
          <a href="/#" className="products-page__navigation-item">
            3
          </a>
          <a href="/#" className="products-page__navigation-item">
            Наступна
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;

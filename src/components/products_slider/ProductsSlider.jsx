import React from "react";
import "./ProductsSlider.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../img/gallery/image1.jpg";
import image2 from "../../img/gallery/image2.jpg";
import image3 from "../../img/gallery/image3.jpg";
import image4 from "../../img/gallery/image4.jpg";
import "swiper/scss";
import "swiper/scss/navigation";
import SwiperButton from "./SwiperButton";
import { motion } from "framer-motion";

function ProductsSlider() {
  let products = [
    {
      id: "1",
      img: image1,
      name: "Полички",
      price: 2000,
    },
    {
      id: "2",
      img: image2,
      name: "Ліжко двоспальне",
      price: 12000,
    },
    {
      id: "3",
      img: image3,
      name: "Ліжко",
      price: 8000,
    },
    {
      id: "4",
      img: image4,
      name: "Стіл",
      price: 4000,
    },
  ];

  const textVariants = {
    offscreen: {
      y: -50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section className="products-slider">
      <div className="products-slider__container">
        <motion.h2
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          className="products-slider__title"
        >
          Що купують інші ?
        </motion.h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={42}
          className="products-slider-block"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            280: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperButton />
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id} className="products-slider__slide">
                <a href="/#" className="products-slider__link">
                  <img src={product.img} alt="Полички" />
                  <div className="products-slide-info">
                    <h2 className="products-slide-info__title">
                      {product.name}
                    </h2>
                    <p className="products-slide-info__price">
                      {product.price}грн.
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductsSlider;

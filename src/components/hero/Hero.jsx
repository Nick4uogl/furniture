import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mainBg from "../../img/mainBg.jpg";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Hero.scss";

function Hero() {
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__container">
          <div className="hero-info">
            <h1 className="hero-info__title">ЯКІСНІ МЕБЛІ ПРОСТО ДЛЯ ВАС</h1>
            <p className="hero-info__text">
              Наша компанія використовує найкращі матеріали, щоб зробити ваш
              будинок комфортнішим.
            </p>
            <a href="/#" className="hero-info__btn">
              Перейти до товарів
            </a>
          </div>
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            className="hero-slider"
            pagination={{ clickable: true }}
            // loop={true}
            // speed={1500}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
          >
            <SwiperSlide className="hero-slider__slider">
              <img src={mainBg} alt="" />
            </SwiperSlide>
            <SwiperSlide className="hero-slider__slider">
              <img src={mainBg} alt="" />
            </SwiperSlide>
            <SwiperSlide className="hero-slider__slider">
              <img src={mainBg} alt="" />
            </SwiperSlide>
            <SwiperSlide className="hero-slider__slider">
              <img src={mainBg} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Hero;

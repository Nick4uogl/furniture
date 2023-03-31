import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import { useContext } from "react";
import CartContext from "../../CartContext";

import { motion } from "framer-motion";

const productVariants = {
  offscreen: {
    y: -60,
    opacity: 0,
  },
  onscreen: (i) => {
    const delay = 0.3 + i * 0.05;
    return {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay,
      },
    };
  },
};

function Product({ custom, id, img, name, label, price }) {
  const { increaseProductItems } = useContext(CartContext);

  return (
    <motion.article
      variants={productVariants}
      custom={custom}
      initial="offscreen"
      whileInView="onscreen"
      className="product"
    >
      <img src={img} alt="" />
      <p className="product__title">{name}</p>
      <p className="product__label">
        {label && `${label} знижки`}
        <span className="product__price product__price-nohover">
          {price} грн.
        </span>
      </p>
      <p className="product__price">{price} грн. </p>
      <div className="product__overlay">
        <button
          className="product__add"
          onClick={() => {
            increaseProductItems(id, img, name, price);
          }}
        >
          Добавити в корзину
        </button>
        <Link className="product__info" to={`/furniture/${id}`}>
          Детальніше
        </Link>
      </div>
      <button
        className="product__add product__add-nohover"
        onClick={() => {
          increaseProductItems(id, img, name, price);
        }}
      >
        Добавити в корзину
      </button>
      <Link
        to={`/furniture/${id}`}
        className="product__info product__info-nohover"
      >
        Детальніше
      </Link>
    </motion.article>
  );
}

export default Product;

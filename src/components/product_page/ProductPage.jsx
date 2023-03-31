import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import bed from "../../img/gallery/bed.jpg";
import { useContext } from "react";
import CartContext from "../../CartContext";

function ProductPage() {
  const { increaseProductItems } = useContext(CartContext);

  const { productId } = useParams();
  console.log(productId);
  return (
    <div className="product-page">
      <div className="product-page__container">
        <div className="product-page__left">
          <img src={bed} alt="chair" />
          <p className="product-page__product-name">Ліжко “Атлант”</p>
        </div>
        <div className="product-page__right">
          <h2 className="product-page__title">Характеристика та опис</h2>
          <div className="product-page__table">
            <div className="product-page__characteristics product-page__column">
              <div className="column-item">Висота, мм</div>
              <div className="column-item">Ширина, мм</div>
              <div className="column-item">Глибина, мм</div>
              <div className="column-item">Довжина, мм</div>
              <div className="column-item">Колір</div>
              <div className="column-item">Матеріал</div>
              <div className="column-item">Тип</div>
              <div className="column-item">Час виробництва</div>
            </div>
            <div className="product-page__values product-page__column">
              <div className="column-item">500</div>
              <div className="column-item">1500</div>
              <div className="column-item">200</div>
              <div className="column-item">2500</div>
              <div className="column-item">Без кольору</div>
              <div className="column-item">Дуб</div>
              <div className="column-item">Двоспальне</div>
              <div className="column-item">5 діб</div>
            </div>
          </div>

          <p className="product-page__price">12 000 грн.</p>
          <button
            className="add-to-cart"
            onClick={() => {
              increaseProductItems();
            }}
          >
            Додати в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

import React from "react";
import "./Cart.scss";
import "./CartProduct";
import { useContext } from "react";
import CartContext from "../../CartContext";
import CartProduct from "./CartProduct";

function Basket() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-page">
      <div className="cart-page__container">
        <h2 className="cart-page__title">Корзина</h2>
        {cartItems.length === 0 ? (
          <p className="no-products">У вашій корзині немає товарів</p>
        ) : (
          <div className="cart-page__list">
            {cartItems?.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.img}
                price={product.price}
                count={product.count}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Basket;

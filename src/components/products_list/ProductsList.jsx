import React from "react";
import Product from "../product/Product.jsx";
import "./ProductsList.scss";

function ProductsList({ products }) {
  if (products.length === 0) {
    return (
      <div className="no-products">
        Товарів в даній категорії нема в наявності
      </div>
    );
  }

  return (
    <div className="products-list">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            img={product.img}
            price={product.price}
            name={product.name}
            label={product.label}
          />
        );
      })}
    </div>
  );
}

export default ProductsList;

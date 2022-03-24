import React from "react";
import Product from "./../Product/Product";

const Shop = (props) => {
  return (
    <div>
      <Product
        product={props.product}
        addToCartHandle={props.addToCartHandle}
      ></Product>
    </div>
  );
};

export default Shop;

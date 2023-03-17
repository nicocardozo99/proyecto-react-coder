import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalProductos } = useCartContext();
  return (
    <div className="cart-widget">
      <i className="bi bi-cart">{totalProductos()}</i>
      <div className="qty-display"></div>
    </div>
  );
};

export default CartWidget;

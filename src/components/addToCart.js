import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import _ from "lodash";

function AddToCart({ showDailog, onShowDailog }) {
  const { cartValue } = React.useContext(CartContext);
  const [cart, setCart] = cartValue;
  let total = 0;

  const modalWrapper = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "black",
    zIndex: "99999",
    opacity: 0.5,
    display: showDailog ? "block" : "none",
  };
  const modalDailog = {
    position: "fixed",
    zIndex: "999999",
    top: 0,
    right: 0,
    width: "40rem",
    height: "100%",
    background: "#fff",
    display: showDailog ? "block" : "none",
  };

  return ReactDOM.createPortal(
    <>
      <div
        className="modalWrapper"
        style={modalWrapper}
        onClick={onShowDailog}
      ></div>
      <div className="modalDailog" style={modalDailog}>
        <button className="btn btn-primary" onClick={onShowDailog}>
          close
        </button>
        {cart.length === 0 && (
          <div className="emptyCart">
            <h5>YOUR BAG</h5>
            <p>Your Cart Is Currently Empty</p>
            <button className="btn btn-primary" onClick={onShowDailog}>

              Continue Shopping
            </button>
            <hr/>
          </div>
         
        )}
        {cart.length >= 0 && (
          <div className="cartItem">
            {cart.map((item, key) => {
              total += item.price;
              return (
                <div key={key} className="cardItemSingle">
                  <img src={item.imgSrc} />
                  <div>
                    <h3>{item.name}</h3>
                    <h3>{item.description}</h3>
                    <h2>{item.price} PKR</h2>
                    <p>{item.color}</p>

                  </div>

                </div>
              );
            })}
            <p className="totalPrice">Total price: {total} PKR</p>
          </div>
        )}
      </div>
    </>,
    document.getElementById("root-portal")
  );
}

export default AddToCart;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./context/cartContext";
import { toast } from "react-toastify";
import { getProduct } from "./services/products";

function SingleProduct() {
  const { id } = useParams();
  const [{ name, description, color, price, imgSrc }] = useState(
    getProduct(parseInt(id))
  );

  const [count, setCount] = useState(0);
  const { cartValue } = React.useContext(CartContext);
  const [cart, setCart] = cartValue;
  const oldPrice = cart.filter((item) => item.id === parseInt(id)).length;
  const [productAmount, setProductAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const itemLength = cart.filter((item) => item.id === parseInt(id)).length;
    setCount(itemLength);
    setProductAmount(oldPrice ? price * oldPrice : 0);
    setTotalAmount(oldPrice ? price * oldPrice + 449 : 0);
  }, []);
  const handleIncreamenet = () => {
    if (cart.length === 5)
      return toast.warning(
        "You have reached Order Limits to select more please remove already selected items "
      );
    setCount(count + 1);
    setProductAmount(price + productAmount);
    setTotalAmount(price + productAmount + 449);
    setCart([...cart, getProduct(parseInt(id))]);
  };

  const handleDecreamenet = () => {
    if (cart.filter((item) => item.id === parseInt(id)).length) {
      setCount(count - 1);
      setProductAmount(productAmount - price);
      setTotalAmount(productAmount - price + 449);
      const itemIndex = cart.findIndex((cart) => {
        return cart.id === parseInt(id);
      });

      if (itemIndex !== -1) setCart(cart.filter((item, i) => i !== itemIndex));
    }
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  return (
    <div style={{ marginTop: "12rem" }} className="container-fluid ">
      <button
        className="btn btn-dark btn-lg py-3"
        style={{ margin: "auto", display: "block", fontSize: "1.7rem" }}
      >
        PRODUCT DETAILS
      </button>
      <div className="row" id="prdBox">
        <div className="col-md-10 col-11 mx-auto">
          <div className="row mt-5 gx-3">
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
              <div className="card p-4">
                <div className="row">
                  <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                    <img src={imgSrc} className="img-fluid" alt="cart img" />
                  </div>

                  <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                    <div className="row">
                      <div className="col-6 card-title">
                        <h1 className="mb-4 product_name">{name}</h1>
                        <p className="mb-2">MODEL: {description}</p>
                        <p className="mb-2">COLOR: {color}</p>
                        <p className="mb-3">
                          1 YEAR PARTS GURANTEE / LIFE TIME SERVICE GURANTEE
                        </p>
                      </div>
                      <div className="col-6">
                        <ul className="pagination justify-content-end set_quantity">
                          <li className="page-item">
                            <button
                              className="page-link "
                              onClick={handleDecreamenet}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                          </li>
                          <li className="page-item">
                            <input
                              type="text"
                              name=""
                              className="page-link"
                              id="textbox"
                              value={count}
                              onChange={handleCount}
                            />
                          </li>
                          <li className="page-item">
                            <button
                              className="page-link"
                              onClick={handleIncreamenet}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-8 d-flex justify-content-between remove_wish">
                        <p>
                          <i className="fas fa-trash-alt"></i> REMOVE ITEM
                        </p>
                        <p>
                          <i className="fas fa-heart m-1"></i>MOVE TO WISH LIST
                        </p>
                      </div>
                      <div className="col-4 d-flex justify-content-end price_money">
                        <h3>
                          PKR
                          <span className="m-2" id="itemval">
                            {price}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div className="right_side p-3 shadow bg-white">
                  <h2 className="product_name mb-5">Total Amount</h2>
                  <div className="price_indiv d-flex justify-content-between">
                    <p style={{ fontSize: "1.5rem" }}>Product amount</p>
                    <p className="m-1" style={{ fontSize: "1.3rem" }}>
                      PKR
                      <span className="m-2" id="product_total_amt">
                        {productAmount}
                      </span>
                    </p>
                  </div>
                  <div className="price_indiv d-flex justify-content-between">
                    <p style={{ fontSize: "1.5rem" }}>Delivery Charges</p>
                    <p className="m-1" style={{ fontSize: "1.3rem" }}>
                      PKR
                      <span className="m-2" id="shipping_charge">
                        449
                      </span>
                    </p>
                  </div>
                  <hr />
                  <div className="total-amt d-flex justify-content-between font-weight-bold">
                    <p style={{ fontSize: "1.5rem" }}>Total Amount</p>
                    <p className="m-1" style={{ fontSize: "1.3rem" }}>
                      PKR
                      <span className="m-2" id="total_cart_amt">
                        {totalAmount}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

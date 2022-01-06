import React from "react";
import Product from "./product";

function ProductsDetails({ heading, items }) {
  return (
    <section className="products my-5" id="products">
      <h1 className="heading">{heading}</h1>
      <hr className="w-25 m-auto mb-5" />
      <div className="container" id="productBox">
        <div className="row">
          {items.length ? (
            items.map((item) => {
              return <Product key={item.id} item={item} />;
            })
          ) : (
            <h1 className="text-center">There is no Item available</h1>
          )}
        </div>
      </div>
    </section>
  );
}

ProductsDetails.defaultProps = {
  heading: "Product Details",
};
export default ProductsDetails;

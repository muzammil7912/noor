import React from "react";

function Services() {
  return (
    <section className="service">
      <div className="box-container">
        <div className="box">
          <i className="fas fa-shipping-fast"></i>
          <h3>fast delivery</h3>
        </div>

        <div className="box">
          <i className="fas fa-undo"></i>
          <h3>No Refund</h3>
        </div>

        <div className="box">
          <i className="fas fa-headset"></i>
          <h3>24 x 7 support</h3>
        </div>
      </div>
    </section>
  );
}

export default Services;

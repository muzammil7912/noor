import React from "react";
function Banner() {
  return (
    <section className="home" id="home">
      <div className="slide-container active">
        <div className="slide">
          <div className="content">
            <span>Incredible Prices on all your Favourite items</span>
            <h3>Noor-Brothers</h3>
            <p>Get more for less on selected brands</p>
            <a href="#products" className="btn">
              Shop Now
            </a>
          </div>
          <div className="image">
            <img src={"https://projects.imedia.pk/Muzammil1/2.png"} className="shoe" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

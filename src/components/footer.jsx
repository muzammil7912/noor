import React from "react";

function Footer() {
  return (
    <section className="footer my-5">
      <div className="box-container">
        <div className="box">
          <h3>contact us</h3>
          <a href="https://wa.me/923172675200" target="_blank">
            <i className="fas fa-mobile"></i>0317-2675200
          </a>
          <a
            href="https://mail.google.com/"
            style={{ textTransform: "lowercase" }}
          >
            <i className="fas fa-envelope"></i>noorbrothersonline@gmail.com
          </a>
          <a href="https://wa.me/923172675200" className="map">
            <i className="fas fa-map-marker-alt"></i>Plot 41 Near Metro-Cinema
            Orangi Town No 1 , Karachi
          </a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">
            <i className="fab fa-facebook"></i>facebook
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>instagram
          </a>
        </div>

        <div className="box">
          <h3>Customer Service</h3>
          <a href="#">Return Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#products">products</a>
        </div>

        <div className="credit">
          © 2021<span> noorbrothers</span> | all rights reserved |
          <a href="https://www.instagram.com/_.musaakberali/">
            created by makberali
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

function Product({ item }) {
  const { id, name, description, price, imgSrc,imgSrc2 } = item;

  return (
    <div className="col-md-4">
      <div className="profile-card-4 text-center">
        <img src={imgSrc} className="img img-responsive" />
        <img src={imgSrc2} className="img2 img-responsive" />
        <div className="profile-content">
          <div className="profile-description">
            <h3 className="my-2">
              <strong>{name}</strong>
            </h3>
            <p>{description}</p>
          </div>
          <div className="row">
            <div className="col-xs-4">
              <div className="rate mb-4">
                <h4>
                  <strong>{price} PKR</strong>
                </h4>
              </div>
              <Link to={`product/${id}`} className="btn">
                <strong>Add to Cart</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

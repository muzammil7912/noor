// import React from "react";
// import firstProjectPhoto from '../src/webImages/products';



const products = [
  {
    id: 1,
    name: "Daina",
    description: "DSM-10",
    color: "Black",
    price:  8999,
    imgSrc: "./webImages/products/product1.jpg",
  },
  {
    id: 2,
    name: "Daina",
    description: "DSM-10",
    color: "Silver",
    price:  8999,
    imgSrc:"./webImages/products/product2.jpg",
  },
  {
    id: 3,
    name: "Sitara",
    description: "96",
    color: "Red",
    price:  7999,
    imgSrc:"./webImages/products/product4.jpg",
  },

  {
    id: 4,
    name: "Daikin",
    description: "DSM-10",
    color: "Black",
    price:  11499,
    imgSrc:"./webImages/products/product5.jpg",
    imgSrc2:"./webImages/products/product3.jpg",
  },
  {
    id: 5,
    name: "Surprise",
    description: "066",
    color: "Black",
    price:  8999,
    imgSrc:"./webImages/products/product6.jpg",
  },
];

export const getProducts = () => {
  return products;
};
export const getProduct = (id) => {
  return products.find((product) => product.id === id);
};

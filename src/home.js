import React from "react";
import Banner from "./components/banner";
import ProductsDetails from "./components/productsDetails";
import Services from "./components/services";
import { getProducts } from "./services/products";
import { useState } from "react";
import Contact from "./components/contact";
import Brands from './components/brands';

function Home({ search }) {
  const [products] = useState(getProducts());
  const filterProducts = products.filter((product) => {
    return product.name.includes(search);
  });
  return (
    <>
      <Banner />
      <Services />
      <ProductsDetails
        heading={["latest", <span key={1}> products</span>]}
        items={filterProducts}
      />
      <Contact />
      <Brands />
    </>
  );
}

export default Home;

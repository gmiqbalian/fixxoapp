import React from "react";
import Header from "../fragments/Header/Header";
import Showcase from "../fragments/Showcase/Showcase";
import Categories from "../fragments/Categories/Categories";
import NewProducts from "../fragments/NewProducts/NewProducts";
import Footer from "../fragments/Footer/Footer";
import WebsiteSupport from "../fragments/Support/WebsiteSupport";
import PopularProducts from "../fragments/PopularProducts/PopularProducts";
import FeaturedProducts from "../fragments/FeaturedProducts/FeaturedProducts";

const Home = () => {

  return (
    <>
        <Header />
        <Showcase />
        <FeaturedProducts />
        <Categories />
        <NewProducts />
        <PopularProducts />
        <WebsiteSupport />
        <Footer />
    </>
  )
}

export default Home
import Breadcrumb from '../fragments/BreadCrumb/Breadcrumb';
import Header from '../fragments/Header/Header'
import Footer from '../fragments/Footer/Footer'
import ProductsGrid from '../fragments/ProductsGrid/ProductsGrid';
import { useProductContext } from "../../contexts/ProductContext";
import React, { useEffect, useState } from "react";

const Products = ({Products}) => {
  const {all, getAllAsync} = useProductContext();

  useEffect(()=>{
    getAllAsync()
    }, []
  )
  
  return (
    <>
        <Header />
        <Breadcrumb currentPage= {"Products"} />
        <ProductsGrid title="Latest Products" items={all} />
        <Footer />
    </>
  )
}

export default Products
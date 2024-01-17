import { useProductContext } from "../../../contexts/ProductContext";
import React, { useEffect } from "react";
import ProductsGrid from '../ProductsGrid/ProductsGrid';


const PopularProducts = () => {
  const {women, getWomenAsync} = useProductContext();

  useEffect(()=>{
    getWomenAsync()
    }, []
  )
  return (
    <section className="products-display">
        <div className="product-box">
          <ProductsGrid title="Popular Products" items={women} />
        </div>
        <div className="text-box">
          <div className="title-1">2 FOR USD $49</div>
          <a href="#" className="btn-black-white">POPULAR PRODUCTS</a>
        </div>
    </section>
  )
}

export default PopularProducts
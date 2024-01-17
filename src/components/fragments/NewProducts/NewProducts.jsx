import ProductsGrid from "../ProductsGrid/ProductsGrid";
import { useProductContext } from "../../../contexts/ProductContext";
import React, { useEffect } from "react";



const NewProducts = () => {
  const {electronics, getElectronicsAsync} = useProductContext();

  useEffect(()=>{
    getElectronicsAsync()
    }, []
  )

  return (
    <section className="products-display">
        <div className="text-box">
          <div className="title-1">2 FOR USD $29</div>
          <a href="#" className="btn-black-white">NEW PRODUCTS</a>
        </div>
        <div className="product-box">
          <ProductsGrid title="Latest Products" items={electronics} />
        </div>
    </section>
  )
}

export default NewProducts
import React, { useEffect} from "react";
import ProductsGrid from '../ProductsGrid/ProductsGrid'
import { useProductContext } from "../../../contexts/ProductContext";

const FeaturedProducts = () => {
    const {eightProducts, getEightProductsAsync} = useProductContext();

    useEffect(()=>{
        getEightProductsAsync()
      }, []
    )

    return (
        <div className="featured-products">
            <h3>Featured Products</h3>
            <ProductsGrid title="" items={eightProducts} />
        </div>
    )
}

export default FeaturedProducts
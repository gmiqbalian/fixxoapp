import React, {useState, useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsGrid = ({title, items}) => {
  return (
    <section className='products-grid'>
      <div className="container">
        {/* <div className="title">{title}</div> */}
        <div className="collection">
            {/* {items.map(item => (<ProductCard key={item.articleNumber} item={item} />))} */}
            {items.map(item => (<ProductCard key={item.title} item={item} />))}
          </div>
      </div>
    </section>
  )
}

export default ProductsGrid
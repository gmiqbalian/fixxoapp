import React from 'react';
import { NavLink } from 'react-router-dom';
import Rating from '../Rating/Rating';

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
        <div className="card-img">
            <img src={item.image} alt={item.title} />
            <nav className="icons">
                <a href="#" className="link active"><i className="fa-regular fa-heart"></i></a>
                <a href="#" className="link"><i className="fa-regular fa-code-compare"></i></a>
                <a href="#" className="link"><i className="fa-regular fa-bag-shopping"></i></a>
            </nav>
            <NavLink className="btn-theme" to="/products/">QUICK VIEW</NavLink>
        </div>
        <div className="card-body">
            <p className="card-category">{item.category}</p>
            <p className="card-title">{item.title}</p>
            <div className="card-rating">
                <Rating starRating={item.rating.rate} />
            </div>
            <p className="card-price">{item.price} {item.currency} $</p>
        </div>
    </div>
  )
}

export default ProductCard
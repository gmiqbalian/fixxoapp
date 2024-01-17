import React from 'react'

const Rating = ({starRating}) => {
  const getStars = (_, index) => (<i key={index} className={`fa-sharp fa-star ${index < starRating ? "fa-solid":"fa-regular"}`}></i>);
  const stars = Array.from({length: 5}, getStars)
  
  return (
    <div>{stars}</div>
  )
}

export default Rating
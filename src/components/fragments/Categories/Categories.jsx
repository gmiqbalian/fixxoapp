import React from 'react'
import OfficeStyleImg from '../../../images/office-style.png'
import PartyStyleImg from '../../../images/party-style.png'

const Categories = () => {
  return (
    <section className="category-container">
      <div className="office-box">
        <img src={OfficeStyleImg} alt="office-style-img" />
      </div>
      <div className="offer-box">
        <div className="text">
          <div className="title-1">50% Offer</div>
          <div className="title-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ea nemo sed vero fugit, pariatur ratione sapiente, alias magni eveniet officiis esse.</div>
          <a href="#" className="btn-black-white">FLASH SALE</a>
        </div>
      </div>
      <div className="party-box">
        <img src={PartyStyleImg} alt="office-style-img" />
      </div>
    </section>

  )
}

export default Categories
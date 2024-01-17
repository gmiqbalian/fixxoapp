import React from 'react'
import CustomerServiceImg from '../../../images/customer-service.png';
import SecuredPaymentImg from '../../../images/credit-card.png';
import HomeDeliveryImg from '../../../images/delivery-truck.png';

const WebsiteSupport = () => {
  return (
    <section className='websupport'>
      <div className="s-container">
        <div className='box'>
          <div className="icon">
            <img src={CustomerServiceImg} alt="" />              
          </div>            
          <div className="text">
            <p className='title-1'>Customer Support</p>
            <p className='title-2'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className='box'>
          <div className="icon">
            <img src={SecuredPaymentImg} alt="" />              
          </div>            
          <div className="text">
            <p className='title-1'>Secured Payment</p>
            <p className='title-2'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className='box'>
          <div className="icon">
            <img src={HomeDeliveryImg} alt="" />              
          </div>            
          <div className="text">
            <p className='title-1'>Free Home Delivery</p>
            <p className='title-2'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className='box'>
          <div className="icon">
            <img src={HomeDeliveryImg} alt="" />              
          </div>            
          <div className="text">
            <p className='title-1'>30 Day Returns</p>
            <p className='title-2'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default WebsiteSupport
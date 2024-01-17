import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='social-media-icons'>
          <i className="fa-brands fa-facebook-f social-icon"></i>
          <i className="fa-brands fa-instagram social-icon"></i>
          <i className="fa-brands fa-twitter social-icon"></i>
          <i className="fa-brands fa-google social-icon"></i>
          <i className="fa-brands fa-linkedin social-icon"></i>
        </div>
        <div className='footer-text'>
          &copy; 2023 Fixxo. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
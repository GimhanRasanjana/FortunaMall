
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './navigationbar.css'
import logo from '../assets/images/logo.png'
function Navigationbar() {
  return (
    <Navbar variant="dark" className="navbar fixed-top px-2 py-0">
      <Navbar.Brand className="py-0" href="#">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
    
      {/* Search Container */}
      <div className="search-container">
        <input type="text" placeholder="Search in" className="search-input" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} style={{ color: '#000000' }} />
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="bottom-icons mx-2">
        <FontAwesomeIcon className='mx-1' icon={faLinkedinIn} />
        <FontAwesomeIcon className='mx-1' icon={faFacebookF} />
        <FontAwesomeIcon className='mx-1' icon={faYoutube} />
        <FontAwesomeIcon className='mx-1' icon={faInstagram} />
        <FontAwesomeIcon className='mx-1' icon={faWhatsapp} />
      </div>

      {/* Icons */}
      
        
      <div className="bottom-icons ">
          <span className='mx-2'><FontAwesomeIcon icon={faHeart} /> Wishlist</span>
          <span className='mx-2'><FontAwesomeIcon icon={faShoppingCart} /> Cart</span> 
          <FontAwesomeIcon icon="fa-solid fa-scale-balanced" style={{color: "#000000",}} />
          <span className='mx-2'><FontAwesomeIcon icon={faUser} className='mx-2' />Log In / Register</span>
          
        </div>
  
    </Navbar>
  );
}

export default Navigationbar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import playstore from '../assets/images/footer/android.png'
import appstore from '../assets/images/Footer/ios.png'
import './FooterComp.css'
function FooterComp(){
    return(
        <>
            <div className="footer">
                <div className="section">
                    <div className="section-title">OVERVIEW</div>
                    <div className="sub-section">About Us</div>
                    <div className="sub-section">Contact Us</div>
                    <div className="sub-section">Terms of Use</div>
                </div>

                <div className="section">
                    <div className="section-title">CATEGORIES</div>
                    <div className="sub-section">Made in Sri Lanka</div>
                    <div className="sub-section">Automotive</div>
                    <div className="sub-section">Food &amp; Beverages</div>
                </div>

                <div className="section">
                    <div className="section-title">FOLLOW US ON</div>
                    <div className="follow-us">
                        <FontAwesomeIcon className="icon-footer" icon={faFacebookF} style={{ color: '#000000' }} /> 
                        <FontAwesomeIcon className="icon-footer" icon={faTwitter} style={{ color: '#000000' }} />
                        <FontAwesomeIcon className="icon-footer" icon={faYoutube} style={{ color: '#000000' }} />
                        <FontAwesomeIcon className="icon-footer" icon={faInstagram} style={{ color: '#000000' }} />
                        <FontAwesomeIcon className="icon-footer" icon={faLinkedin} style={{ color: '#000000' }} />
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">EXPERIENCE OUR APP</div>
                    <div className="downLink">
                    <img className='img-footer' src={playstore} alt="Play Store" />
                    <img  className='img-footer' src={appstore} alt="App Store" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComp
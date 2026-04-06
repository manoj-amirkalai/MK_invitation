import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import './WeddingFooter.css';

const WeddingFooter = () => {
  return (
    <footer className="weddingFooter">
      <div id='footercontainer' className="footerContent">
        <div className="thankYouSection">
          <div id='heart' >
          <FaHeart  className="heartIcon" />
          </div>
          <h2 id='thankyou' >Thank You</h2>
          <p id='message' >Your presence is the greatest gift of us.</p>
          <p id='couplename' className="coupleNames">Manoj & Keerthana</p>
        </div>

        <div className="socialIcons">
          <a id='whatsupicon' href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noreferrer" className="iconLink whatsapp">
            <FaWhatsapp />
          </a>
          <a id='instagramicon' href="https://instagram.com/YOUR_PROFILE" target="_blank" rel="noreferrer" className="iconLink instagram">
            <FaInstagram />
          </a>
          <a id='mailicon' href="mailto:yourwedding@email.com" className="iconLink mail">
            <FaEnvelope />
          </a>
        </div>

        <div className="copyright" id='copyright'>
          <p>© 2026 Made with Love</p>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;
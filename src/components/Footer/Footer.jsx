import { 
  FaSpotify, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaFacebookF 
} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Follow Dibby Duos</h3>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Spotify">
                <FaSpotify />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Quick Links</h3>
            <nav className="footer__nav">
              <a href="#music">Music</a>
              <a href="#tour">Tour</a>
              <a href="#videos">Videos</a>
              <a href="#merch">Merch</a>
            </nav>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <div className="footer__contact">
              <a href="mailto:booking@Dibby Duos.com">Booking</a>
              <a href="mailto:mgmt@Dibby Duos.com">Management</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Dibby Duos. All Rights Reserved.
          </p>
          <div className="footer__legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

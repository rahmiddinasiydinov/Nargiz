import './Footer.scss';
import { ReactComponent as Facebook } from "../../Assets/SVG/facebook.svg";
import { ReactComponent as Linkedin } from "../../Assets/SVG/linkedin.svg";
import { ReactComponent as Insta } from "../../Assets/SVG/insta.svg";
import { ReactComponent as Twitter } from "../../Assets/SVG/twitter.svg";
import { ReactComponent as Youtube } from "../../Assets/SVG/youtube.svg";
// import { Link } from 'react-router-dom';
function Footer() {
    return (
      <footer className="footer">
        <div className="container">
            {" "}
            <section className="footer__content">
              <ul className="footer__social">
                <li className="footer__social--item">
                  <a href="#about" className="footer__social--link">
                    About us
                  </a>
                </li>
                <li className="footer__social--item">
                  <a href="#contact" className="footer__social--link">
                   Contact us
                  </a>
                </li>
                <li className="footer__social--item">
                  <a href="facebook" className="footer__social--link">
                    <Facebook className="footer__social--icon" />
                  </a>
                </li>
                <li className="footer__social--item">
                  <a href="instagram" className="footer__social--link">
                    <Insta className="footer__social--icon" />
                  </a>
                </li>
                <li className="footer__social--item">
                  <a href="twitter" className="footer__social--link">
                    <Twitter className="footer__social--icon" />
                  </a>
                </li>
                <li className="footer__social--item">
                  <a href="youtube" className="footer__social--link">
                    <Youtube className="footer__social--icon" />
                  </a>
                </li>
                <li className="footer__social--item">
                  <a href="linked" className="footer__social--link">
                    <Linkedin className="footer__social--icon" />
                  </a>
                </li>
              </ul>
              <p className="footer__text">
                Thank you for getting in touch!
                <br /> Kindly.
                <br /> Fill the form, have a great day!
              </p>
            </section>
        </div>
      </footer>
    );
}
export default Footer;
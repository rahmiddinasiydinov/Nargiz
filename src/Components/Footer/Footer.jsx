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
          <div className="footer__wrapper">
            {" "}
            <section className="footer__content">
              <p className="footer__text">
                Thank you for getting in touch!
                <br /> Kindly.
                <br /> Fill the form, have a great day!
                <ul className="footer__social">
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
              </p>
            </section>
            <section className="footer__info--wrapper">
              <div className="footer__info">
                <h3 className="footer__info--title">About us</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a className="footer__link" href="#about">About us</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#team">Our team</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#faq">Frequent Questions</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#contact">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="footer__info">
                <h3 className="footer__info--title">Information</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a className="footer__link" href="#blog">Blog</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#pricing">Pricing</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#resourses">Resources</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#vacancies">Vacancies</a>
                  </li>
                </ul>
              </div>
              <div className="footer__info">
                <h3 className="footer__info--title">Contact</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a className="footer__link" href="#email">Email us</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#support">Support Page</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#facebook">Facebook</a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#twitter">Twitter</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </footer>
    );
}
export default Footer;
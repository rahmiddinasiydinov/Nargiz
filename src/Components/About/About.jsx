import './About.scss';
import img1 from '../../Assets/Images/about1.png';
import img2 from "../../Assets/Images/about2.png";
import fast from '../../Assets/SVG/fast.svg';
import headphone from '../../Assets/SVG/headphone.svg';
import plant from '../../Assets/SVG/plant.svg';
import dollar from '../../Assets/SVG/dollar.svg';
function About() {
    return (
      <section className="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__images">
              <img className="about__img--down" src={img2} alt="img" />
              <img className="about__img--up" src={img1} alt="img" />
            </div>
            <div className="about__content">
              <h2 className="about__title">About us</h2>
              <p className="about__text">
                Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est
                hic quod et similique ullam et. Ipsum ipsam temporibus quo ea
                natus enim quae officia nulla. Debitis ea dicta ea eum
                laboriosam quis dolore repudiandae. Est hic quod et similique
                ullam et. Ipsum ipsam temporibus quo ea natus enim quae officia
                nulla. Debitis ea dicta ea eum laboriosam quis dolore
                repudiandae. Est hic quod et similique ullam et. Ipsum ipsam
                temporibus quo ea natus enim quae officia nulla. Debitis ea
                dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et
                similique ullam et. Ipsum ipsam temporibus quo ea natus enim
                quae officia nulla.{" "}
              </p>
              <button className="about__btn">Contact us</button>
            </div>
          </div>
          <ul className="about__list">
            <li className="about__item">
              <h4 className="about__item--header">
                <img src={fast} alt="fast" className="about__item--img" />
                <span className="about__item--title">
                  Fast <br /> Delivery
                </span>
              </h4>
              <p className="about__item--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </li>
            <li className="about__item">
              <h4 className="about__item--header">
                <img src={headphone} alt="fast" className="about__item--img" />
                <span className="about__item--title">
                  Great Customer Service
                </span>
              </h4>
              <p className="about__item--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </li>
            <li className="about__item">
              <h4 className="about__item--header">
                <img src={plant} alt="fast" className="about__item--img" />
                <span className="about__item--title">Original <br/> Plants</span>
              </h4>
              <p className="about__item--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </li>
            <li className="about__item">
              <h4 className="about__item--header">
                <img src={dollar} alt="fast" className="about__item--img" />
                <span className="about__item--title">
                  Affordable <br /> Price
                </span>
              </h4>
              <p className="about__item--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </li>
          </ul>
        </div>
      </section>
    );}
     
    
    export default About;
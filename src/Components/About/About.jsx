import './About.scss';
import img1 from '../../Assets/Images/about1.png';
import img2 from "../../Assets/Images/about2.png";
import fast from '../../Assets/SVG/fast.svg';
import headphone from '../../Assets/SVG/headphone.svg';
import plant from '../../Assets/SVG/plant.svg';
import dollar from '../../Assets/SVG/dollar.svg';
function About() {
    return (
      <section className="about" id="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__images" data-aos="fade-up-right">
              <img className="about__img--down" src={img2} alt="img" />
              <img className="about__img--up" src={img1} alt="img" />
            </div>
            <div className="about__content" data-aos="fade-up-left">
              <h2 className="about__title">О нас</h2>
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
              <a className="about__btn" href="#contact">
                Связаться с нами
              </a>
            </div>
          </div>
          <ul className="about__list">
            <li className="about__item" data-aos="zoom-in-up">
              <h4 className="about__item--header">
                <img src={fast} alt="fast" className="about__item--img" />
                <span className="about__item--title">
                  Быстрая <br /> доставка
                </span>
              </h4>
              <p className="about__item--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </li>
            <li className="about__item" data-aos="zoom-in-up">
              <h4 className="about__item--header">
                <img src={headphone} alt="fast" className="about__item--img" />
                <span className="about__item--title">
                  Отличное обслуживание клиентов
                </span>
              </h4>
              <p className="about__item--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </li>
            <li className="about__item" data-aos="zoom-in-up">
              <h4 className="about__item--header">
                <img src={plant} alt="fast" className="about__item--img" />
                <span className="about__item--title">
                  Оригинальные <br /> растения
                </span>
              </h4>
              <p className="about__item--text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </li>
            <li className="about__item" data-aos="zoom-in-up">
              <h4 className="about__item--header">
                <img src={dollar} alt="fast" className="about__item--img" />
                <span className="about__item--title">
                  Доступная <br /> цена
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
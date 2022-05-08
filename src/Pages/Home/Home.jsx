import React, { useEffect, useState }  from "react";
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Home.scss';
import Famous from "../../Components/Famous/Famous";
import About from "../../Components/About/About";
import img from '../../Assets/Images/gift.png';
import Project from "../../Components/Project/Project";
import vasa1 from '../../Assets/Images/vasa1.png';
import vasa2 from "../../Assets/Images/vasa2.png";
import {ReactComponent as Logo} from '../../Assets/SVG/logo.svg'
function Home() {
  const [data, setData] = useState([]);
  const [gift, setGift] = useState([]);
    useEffect(() => {
        fetch("https://nargiz-back.herokuapp.com/pottery")
            .then(res => res.json())
          .then(data => {
            setData(data);
            setGift([data[0], data[1]])
          });
    }, []);
  return (
    <>
      <main className="main">
        <section className="view">
          <div className="container">
            <div className="view__swiper">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="view__wrapper">
                    <div className="view__content" data-aos="fade-up-right">
                      <h2 className="view__title">Gold & Black Pottery</h2>
                      <p className="view__text">Риштанская керамика</p>
                      <Link to="/products" className="view__btn">
                        посмотреть больше
                      </Link>
                    </div>
                    <img
                      src={vasa1}
                      alt="img is failed"
                      data-aos="fade-up-left"
                      className="view__img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="view__wrapper">
                    <div className="view__content" data-aos="fade-up-right">
                      <h2 className="view__title">Orange Ceramic</h2>
                      <p className="view__text">Риштанская керамика</p>
                      <Link to="/products" className="view__btn">
                        посмотреть больше
                      </Link>
                    </div>
                    <img
                      src={vasa2}
                      alt="img is failed"
                      data-aos="fade-up-left"
                      className="view__img"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="view__design">
            <div className="view__design--wrapper">
             
                {[1, 2, 3, 4, 5, 6, 7].map((e) => {
                  return (
                        <Logo className="view__design--logo" />
                  );
                })}
            
               
                

            
            </div>
          </div>
        </section>
        <Famous />
        <About />
        <section className="gift">
          <div className="container">
            <div className="gift__wrapper">
              <div className="gift__content">
                <h2 className="gift__title">
                  У нас также есть производственный канал под специальный
                  подарок!
                </h2>
                <p className="gift__text">
                  Debitis ea dicta ea eum laboriosam quis dolore repudiandae.
                  Est hic quod et similique ullam et. Ipsum ipsam temporibus quo
                  ea natus enim quae officia nulla. Debitis ea dicta ea eum
                  laboriosam quis dolore repudiandae. Est hic quod et similique
                  ullam et. Ipsum ipsam temporibus quo ea natus enim quae
                  officia nulla. Debitis ea dicta ea eum laboriosam quis dolore
                  repudiandae. Est hic quod et similique ullam et. Ipsum ipsam
                  temporibus quo ea natus enim quae officia nulla. Debitis ea
                  dicta ea eum laboriosam quis dolore repudiandae. Est hic quod
                  et similique ullam et. Ipsum ipsam temporibus quo ea natus
                  enim quae officia nulla.
                </p>
                <div className="gift__buttons">
                  <a href="#contact" className="gift__contact">
                    Связаться с нами
                  </a>
                </div>
              </div>
              <img src={img} alt="img" className="gift__img" />
            </div>
          </div>
        </section>
        <section className="gift__product">
          <div className="container">
            <div className="gift__product--wrapper">
              <div className="gift__product--img">
                <div className="rec"></div>
                <img src={vasa1} alt="img" className="gift__img--product" />
              </div>
              <div className="gift__info">
                <h4 className="gift__info--title">Gold & Black Pottery</h4>
                <p className="gift__info--text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad
                  minim veniam, quis nostrud exercitationulco laboris nisi ut
                  aliquip ex ea commodo consequatuisaute.
                </p>
                <Link to={`/products`} className="gift__info--link">
                  Посмотреть больше
                </Link>
              </div>
            </div>
            <div className="gift__product--wrapper gift__second">
              <div className="gift__info">
                <h4 className="gift__info--title">Orange Ceramic</h4>
                <p className="gift__info--text">
                  Pri cu dico labores officiis, odio principes complectitur ad
                  sea. Sea id doctus forensibus, nec lorem vocent aliquam eu.
                  Aliquid definitiones id cum, ad meliore perpetua referrentur
                  sed. Quas suscipit ad mea verear vivendo tincidunt.
                </p>
                <Link to={`/products`} className="gift__info--link">
                  Посмотреть больше
                </Link>
              </div>
              <div className="gift__product--img">
                <div className="rec"></div>
                <img src={vasa2} alt="img" className="gift__img--product" />
              </div>
            </div>
          </div>
        </section>
        <Project />
      </main>
    </>
  );
}
export default Home;

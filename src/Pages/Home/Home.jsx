import React, { useEffect, useState }  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Home.scss';
import Famous from "../../Components/Famous/Famous";
import About from "../../Components/About/About";
import img from '../../Assets/Images/gift.png';
import kattle from '../../Assets/Images/kattle.png';
import Project from "../../Components/Project/Project";
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
                {data?.map((e, i) => (
                  <SwiperSlide key={i}>
                    <div className="view__wrapper">
                      <div className="view__content">
                        <h2 className="view__title">{e.name}</h2>
                        <p className="view__text">{e.desc}</p>
                        <Link to="/products" className="view__btn">
                          Explore Catalogue
                        </Link>
                      </div>
                      <img src={e.img} alt="img is failed" className="view__img"/>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="view__design">
            <div className="container view__design--wrapper">
              <span className="view__design--text">
                Design tips for designers, that cover everything you need
              </span>
              <span className="view__design--text">
                Design tips for designers, that cover everything you need
              </span>
              <span className="view__design--text">
                Design tips for designers, that cover everything you need
              </span>
              <span className="view__design--text">
                Design tips for designers, that cover everything you need
              </span>
              <span className="view__design--text">
                Design tips for designers, that cover everything you need
              </span>
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
                  We have also production channel under special gift!
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
                    Contact us
                  </a>
                  <Link to="/products" className="gift__catalogue">
                    Catalogue
                  </Link>
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
                <img
                  src={gift[0]?.img}
                  alt="img"
                  className="gift__img--product"
                />
              </div>
              <div className="gift__info">
                <h4 className="gift__info--title">{gift[0]?.name}</h4>
                <p className="gift__info--text">{gift[0]?.desc}</p>
                <Link
                  to={`/single/${gift[0]?._id}`}
                  className="gift__info--link"
                >
                  View details
                </Link>
              </div>
            </div>
            <div className="gift__product--wrapper gift__second">
              <div className="gift__info">
                <h4 className="gift__info--title">{gift[1]?.name}</h4>
                <p className="gift__info--text">{gift[1]?.desc}</p>
                <Link
                  to={`/single/${gift[1]?._id}`}
                  className="gift__info--link"
                >
                  View details
                </Link>
              </div>
              <div className="gift__product--img">
                <div className="rec"></div>
                <img
                  src={gift[1]?.img}
                  alt="img"
                  className="gift__img--product"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="coupon">
          <div className="coupon__container">
            <div className="coupon__wrapper">
              <div className="coupon__content">
                {" "}
                <h2 className="coupon__title">Get you coupon card $150</h2>
                <p className="coupon__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum.
                </p>
                <a href="/products" className="coupon__link">
                  View
                </a>
              </div>
              <img src={kattle} alt="" className="coupon__img" />
            </div>
          </div>
        </section>
        <Project />
      </main>
    </>
  );
}
export default Home;

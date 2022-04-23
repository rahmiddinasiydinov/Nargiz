import React, { useEffect, useState }  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Home.scss';
import Famous from "../../Components/Famous/Famous";
import About from "../../Components/About/About";
function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://nargiz-back.herokuapp.com/pottery")
            .then(res => res.json())
            .then(data => setData(data));
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
                      <div>
                        <h2 className="view__title">{e.name}</h2>
                        <p className="view__text">{e.desc}</p>
                        <button className="view__btn">Explore Catalogue</button>
                      </div>
                      <img src={e.img} alt="img is failed" />
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
                  <button className="gift__contact">Contact us</button>
                  <button className="gift__catalogue">Catalogue</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;

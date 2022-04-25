import './Products.scss';
import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper";
// import "./Home.scss";
import vasa from "../../Assets/Images/vasa.png";
import Iimg from "../../Assets/SVG/I.svg";
import Project from "../../Components/Project/Project";
import { Link } from 'react-router-dom';
import FamousCard from '../../Components/FamousCard/FamousCard';

function Products() {
  const [data, setData] = useState([]);
  const [gift, setGift] = useState([]);
  useEffect(() => {
    fetch("https://nargiz-back.herokuapp.com/pottery")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
          setGift([data[0], data[1]]);
          console.log(data);
      });
  }, []);
  return (
    <>
      <main className="main">
        <section className="product__famous">
          <div className="container">
            <h2 className="product__famous--title">The most famous products</h2>
            <div className="product__famous--wrapper">
              {data?.map((e, i) => (
                  <Link key={i} to={`/product/${e.id}`} className='product__famous--link'>
                    <FamousCard img={e.img} title={e.desc} price={e.price} />
                  </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="coupon product__coupon">
          <img className="coupon__Iimg product__Iimg" src={Iimg} alt="" />
          <div className="coupon__container">
            <div className="coupon__wrapper">
              <div className="coupon__content">
                {" "}
                <h2 className="coupon__title">Recommendation of the day $15</h2>
                <p className="coupon__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum.
                </p>
                <Link
                  to={`single/${data[0]?.id}`}
                  className="coupon__link product__coupon--link"
                >
                  View
                </Link>
              </div>
              <img src={vasa} alt="" className="coupon__img" />
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
                <a href="/" className="gift__info--link">
                  View details
                </a>
              </div>
            </div>
            <div className="gift__product--wrapper">
              <div className="gift__info">
                <h4 className="gift__info--title">{gift[1]?.name}</h4>
                <p className="gift__info--text">{gift[1]?.desc}</p>
                <a href="/" className="gift__info--link">
                  View details
                </a>
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

        <Project />
      </main>
    </>
  );
}
export default Products;

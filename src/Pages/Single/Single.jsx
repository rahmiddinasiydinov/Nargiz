import "./Single.scss";
import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

//SWIPER
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
//SWIPER


import Project from "../../Components/Project/Project";
import { Link } from "react-router-dom";
import FamousCard from "../../Components/FamousCard/FamousCard";
import { useParams } from "react-router";
import { ReactComponent as Deliver } from "../../Assets/SVG/deliver.svg";
import { ReactComponent as Return } from "../../Assets/SVG/return.svg";
import TransitionsModal from "../../Components/SaleModel/SaleModel";
import vasa1 from "../../Assets/Images/vasa1.png";
import vasa2 from "../../Assets/Images/vasa2.png";
function Single() {
  const [data, setData] = useState([]);
    const [gift, setGift] = useState([]);
    let params = useParams();
    const [id, setId] = useState(params.id);
    const [single, setSingle] = useState({});
  console.log(id);
  //MUI Model
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  useEffect(() => {
    fetch("https://nargiz-back.herokuapp.com/pottery")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setGift([data[0], data[1]]);
          const found = data.find(e => e._id === id);
        setSingle(found);
        
      });
  }, [id]);
  return (
    <>
      {open ? (
        <TransitionsModal open={open} handleClose={handleClose} id={id} />
      ) : (
        ""
      )}
      <main className="main">
        <section className="single" id="single">
          <div className="container">
            <h2 className="single__title">{single?.name}</h2>
            <div className="single__wrapper">
              <div className="single__swipe">
                <Swiper
                  direction={"vertical"}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {data?.map((e, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div
                          className="single__swipe--wrapper"
                          onClick={() => {
                            setId(e._id);
                          }}
                        >
                          <img
                            className="single__swipe--img"
                            src={e.img}
                            alt={e.name.slice(0, 10) + " . . ."}
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="single__info">
                <img
                  width={250}
                  src={single?.img}
                  alt="img"
                  className="single__img"
                />
                <div className="single__content">
                  <p className="single__text">{single.desc}</p>
                  <div className="single__clouses">
                    <ul className="singl__list">
                      <li className="single__item">
                        <h5 className="single__subtitle">
                          <Deliver className="single__deliver" /> Условия
                          доставки <br />
                          <span className="single__lighttext">
                            Услуга доставки бесплатна
                          </span>{" "}
                        </h5>
                      </li>
                      <li className="single__item">
                        <h5 className="single__subtitle">
                          <Return className="single__deliver" />
                          Условия возврата
                          <br />
                          <span className="single__lighttext">
                            учить больше
                          </span>{" "}
                        </h5>
                      </li>
                    </ul>
                  </div>
                  <button className="single__btn" onClick={handleOpen}>
                    Купить сейчас
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="coupon product__coupon">
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
        </section> */}
        <section className="product__famous">
          <div className="container">
            <h2 className="product__famous--title">Самые известные продукты</h2>
            <div className="product__famous--wrapper">
              {data?.map((e, i) => (
                <a
                  key={i}
                  className="product__famous--link"
                  href="#single"
                  onClick={() => {
                    setId(e._id);
                  }}
                >
                  <FamousCard img={e.img} title={e.desc} price={e.price} />
                </a>
              ))}
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
export default Single;

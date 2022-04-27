import './Famous.scss';
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FamousCard from '../FamousCard/FamousCard';

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

function Famous() {
      const [data, setData] = useState([]);
      useEffect(() => {
        fetch("https://nargiz-back.herokuapp.com/pottery")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    return (
      <section className="famous">
        <div className="container">
          <h2 className="famous__title">The most famous products</h2>
          <div className="famous__slide">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data?.map((e, i) => (
                <SwiperSlide key={i}>
                  <Link to={`/single/${e._id}`}>
                    <FamousCard img={e.img} title={e.desc} price={e.price} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className='famous__btn'>See All products</button>
        </div>
      </section>
    );
}
export default Famous
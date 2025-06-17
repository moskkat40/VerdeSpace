/* eslint-disable no-param-reassign */
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ReviewsSlider.scss';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export const ReviewsSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      slidesPerView="auto"
      cssMode={true}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onInit={swiper => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="reviewsSlider"
    >
      <div className="reviewsSlider__arrows">
        <div ref={prevRef} className="reviewsSlider__next">
          <img src="/src/images/arrow.svg" alt="" />
        </div>
        <div ref={nextRef} className="reviewsSlider__prev">
          <img src="/src/images/arrow.svg" alt="" />
        </div>
      </div>
      <div className="reviewsSlider__text">Photos and videos</div>
      <div className="reviewsSlider__wrapper">
        <SwiperSlide className="reviewsSlider__slide">
          <img src="/src/images/reviewsSlider1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="reviewsSlider__slide">
          <img src="/src/images/reviewsSlider2.png" alt="" />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

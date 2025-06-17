import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './PlantPageSlider.scss';
import '../HomePage/HomePage.scss';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { FlowerCard } from '../FlowerCard/FlowerCard';

export const PlantPageSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="homePage__text">
        <h2 className="homePage__textTitle">Title</h2>
        <span className="homePage__textLine"></span>
      </div>
      <Swiper
        slidesPerView="auto"
        cssMode={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="plantPageSlider"
      >
        <div className="plantPageSlider__arrows">
          <div ref={prevRef} className="plantPageSlider__next">
            <img src="/src/images/arrow.svg" alt="" />
          </div>
          <div ref={nextRef} className="plantPageSlider__prev">
            <img src="/src/images/arrow.svg" alt="" />
          </div>
        </div>

        <SwiperSlide className="plantPageSlider__slide">
          <FlowerCard />
        </SwiperSlide>
        <SwiperSlide className="plantPageSlider__slide">
          <FlowerCard />
        </SwiperSlide>
        <SwiperSlide className="plantPageSlider__slide">
          <FlowerCard />
        </SwiperSlide>
        <SwiperSlide className="plantPageSlider__slide">
          <FlowerCard />
        </SwiperSlide>
        <SwiperSlide className="plantPageSlider__slide">
          <FlowerCard />
        </SwiperSlide>
        <SwiperSlide className="plantPageSlider__slide">
          <FlowerCard />
        </SwiperSlide>
        <SwiperSlide className="plantPageSlider__slide">
          <FlowerCard />
        </SwiperSlide>
        <SwiperSlide className="plantPageSlider__slide">
          <FlowerCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HowItWorksSlider.scss';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export const HowItWorksSlider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="howItWorksSlider"
      >
        <div className="swiper__content">
          <SwiperSlide>
            <p className="howItWorksSlider__title">Use filters</p>
            <p className="howItWorksSlider__text">
              Use category filters so we can better understand your preferences
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="howItWorksSlider__title">
              Choose plants and add to favorites
            </p>
            <p className="howItWorksSlider__text">
              Browse a selection of plants that meet your needs. Add your
              favorites for easy comparison.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="howItWorksSlider__title">Get care instructions</p>
            <p className="howItWorksSlider__text">
              After choosing your plants, you will receive detailed instructions
              on care, watering, transplanting, and fertilizing — everything you
              need to keep your green friends healthy and beautiful.
            </p>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

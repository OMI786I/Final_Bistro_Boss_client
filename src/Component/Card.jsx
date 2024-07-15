// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
//import required images

import slide1 from "../assets/assets/home/slide1.jpg";
import slide2 from "../assets/assets/home/slide2.jpg";
import slide3 from "../assets/assets/home/slide3.jpg";
import slide4 from "../assets/assets/home/slide4.jpg";
import slide5 from "../assets/assets/home/slide5.jpg";
const Card = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <img src={slide1}></img>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2}></img>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3}></img>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Coffee
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4}></img>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5}></img>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Card;

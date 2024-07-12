import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function BannerElement() {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false, 
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
      <SwiperSlide>
        <img
          src=  {isMobile ? "/small.webp" : "/Crazy-Sale-Web_1440x.webp"}
          alt="Slide 1"
          className="w-full sm:h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src= {isMobile ? "/small2.webp" : "/PB_400_Web_1440x.webp"}
          alt="Slide 2"
          className="w-full sm:h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src= {isMobile ? "/small3.webp" : "/boardlg.webp"}
          alt="Slide 3"
          className="w-full sm:h-auto"
        />
      </SwiperSlide>
      </Swiper>
    </>
  );
}

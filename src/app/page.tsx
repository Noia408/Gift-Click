'use client'
import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import TagCard from "./components/tag";

export default function Home() {
  
  return (
    <div className="w-full h-fit flex flex-col gap-[3vw] pt-[1vw]">
      <div className="w-full h-[30vw] bg-green-700 rounded-xl">
      <Swiper
       slidesPerView={1}
       spaceBetween={30}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-fit"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
      <div className="w-full h-fit rounded-xl overflow-auto">
      <Swiper
       slidesPerView={5}
       spaceBetween={30}
       pagination={{
        clickable: true,
      }}
       loop={true}
       navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full h-fit"
      >
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
        <SwiperSlide className="w-full h-full"><TagCard/></SwiperSlide>
      </Swiper>
      </div>
      <div className="w-full h-[20vw] bg-green-700 rounded-xl sbox">

      </div>

    </div>
  );
}
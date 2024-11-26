'use client'
import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import TagCard from "@/components/tag";
import Card from "@/components/card";

export default function Home() {
  
  return (
    <div className="w-full h-fit flex flex-col gap-[3vw] pt-[1vw]">
      {/* Banner Principal */}
      <div className="w-full h-[30vw] rounded-xl overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="w-full h-full"
        >
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
            <div className="absolute left-[5vw] top-1/2 -translate-y-1/2 z-20 text-white">
              <h2 className="text-[3vw] font-bold mb-[1vw]">Gift Cards em Promoção</h2>
              <p className="text-[1.5vw] mb-[2vw]">Aproveite até 50% de desconto</p>
              <button className="px-[2vw] py-[1vw] rounded-xl hover:bg-[#77c555] bg-green-700 transition-colors">
                Ver Ofertas
              </button>
            </div>
            <Image src={"/asset/banner1.jpg"} width={1920} height={1080} alt="Promoção Gift Cards" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
            <div className="absolute left-[5vw] top-1/2 -translate-y-1/2 z-20 text-white">
              <h2 className="text-[3vw] font-bold mb-[1vw]">Gift Cards para Jogos</h2>
              <p className="text-[1.5vw] mb-[2vw]">Os melhores títulos com preços incríveis</p>
              <button className="px-[2vw] py-[1vw] rounded-xl hover:bg-[#77c555] bg-green-700 transition-colors">
                Explorar
              </button>
            </div>
            <Image src={"/asset/banner2.jpg"} width={1920} height={1080} alt="Gift Cards Jogos" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Categorias */}
      <div className="w-full h-fit rounded-xl overflow-hidden">
        <h3 className="text-[2vw] font-semibold mb-[2vw] text-[#202125]">Categorias Populares</h3>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="w-full h-fit"
        >
          <SwiperSlide className="w-full h-full">
            <TagCard />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <TagCard  />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <TagCard />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <TagCard />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <TagCard />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <TagCard />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <TagCard />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <TagCard />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Produtos em Destaque */}
      <div className="w-full h-fit bg-[#f5f6f7] rounded-xl p-[2vw]">
        <h3 className="text-[2vw] font-semibold mb-[2vw] text-[#202125]">Produtos em Destaque</h3>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="w-full h-fit"
        >
          <SwiperSlide className="w-full h-full">
            <Card/>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Card/>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Card/>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Card/>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Card/>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Card/>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Card/>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <Card/>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}
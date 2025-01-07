'use client'
import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from "next/image";
import Card from "@/components/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BookCopy, ChevronRight, Clapperboard, Cpu, Gamepad, ShoppingBag } from "lucide-react";
import Link from "next/link";

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
            <Image src={"/asset/overview_giftcards_header.webp"} width={1920} height={1080} alt="Promoção Gift Cards" className="w-full h-full object-cover" />
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
            <Image src={"/asset/Fortnite.jpg"} width={1920} height={1080} alt="Gift Cards Jogos" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Categorias */}
      <div className="w-full h-fit rounded-xl overflow-hidden">
        <h3 className="text-[2vw] font-semibold mb-[2vw] text-[#202125]">Descontos da Semana</h3>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
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
      <div className="w-full h-fit p-[4vw] bg-green-700 rounded-xl flex flex-col gap-[1vw]">
        <h1 className="text-[3vw] text-white">Por cada compra no site garante pontos para você trocar por benefícios e economizar ainda mais!</h1>
        <span className="text-[1.5vw] text-white">Visite nossas ofertas imperdíveis e descubra produtos incríveis que podem ser resgatados com seus pontos. Aproveite para economizar e tornar suas compras ainda mais recompensadoras!</span>
        <div className="w-fit h-fit mt-[1vw]">
          <Link href={"/"} className="px-[2vw] py-[1vw] rounded-xl hover:text-[#77c555] text-white duration-300 bg-[#ef4444] flex">Visite Nossa Ofertas<ChevronRight  /></Link>
        </div>
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
      <div className="w-full h-fit p-[2vw] bg-green-700 rounded-xl flex flex-col gap-[2vw]">
        <h1 className="text-[2vw] text-white">Ao fazer compras online, todos encontrarão algo para desfrutar</h1>
        <div className="grid grid-cols-3 gap-[1vw]">
          <div className="group hover:scale-95 duration-300 p-[1vw] bg-white rounded-xl w-full h-[25vw] flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col gap-[0.3vw]">
              <Clapperboard className="text-green-700" size={36} />
              <h1 className="text-[2vw] text-[#202125]">Entretenimento</h1>
              <span className="text-[#3b3d44] text-[1vw]">Desbloqueie diversão sem fim com nossa coleção selecionada de cartões-presente de entretenimento dos principais e. plataformas de negociação. Quer se trate de filmes, música ou serviços de streaming, esses cartões-presente somente com criptomoedas oferecem entrega digital instantânea, colocando o entretenimento ao seu alcance.</span>
            </div>
            <Link href={"/"} className="duration-300 group-hover:text-white group-hover:bg-[#ef4444] w-full items-center justify-center flex py-[0.5vw] bg-[#eaebed] rounded-xl">Navegar</Link>
          </div>
          <div className="group hover:scale-95 duration-300 p-[1vw] bg-white rounded-xl w-full h-[25vw] flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col gap-[0.3vw]">
              <Gamepad className="text-green-700" size={36} />
              <h1 className="text-[2vw] text-[#202125]">Jogos e eSports</h1>
              <span className="text-[#3b3d44] text-[1vw]">Mergulhe no mundo dos jogos com nossa seleção exclusiva de cartões-presente de jogos dos melhores e. a escolha das plataformas de negociação. Esses cartões-presente de criptomoeda são a sua porta de entrada para entrega digital instantânea, com os melhores jogos e conteúdo de jogos a apenas um clique de distância.</span>
            </div>
            <Link href={"/"} className="duration-300 group-hover:text-white group-hover:bg-[#ef4444] w-full items-center justify-center flex py-[0.5vw] bg-[#eaebed] rounded-xl">Navegar</Link>
          </div>
          <div className="group hover:scale-95 duration-300 p-[1vw] bg-white rounded-xl w-full h-[25vw] flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col gap-[0.3vw]">
              <ShoppingBag className="text-green-700" size={36} />
              <h1 className="text-[2vw] text-[#202125]">Compras</h1>
              <span className="text-[#3b3d44] text-[1vw]">Explore a ampla seleção de cartões-presente de lojas em mercados de comércio eletrônico. Todos os cartões-presente da loja podem ser adquiridos com criptomoedas e entregues instantaneamente por e-mail. pelo correio.</span>
            </div>
            <Link href={"/"} className="duration-300 group-hover:text-white group-hover:bg-[#ef4444] w-full items-center justify-center flex py-[0.5vw] bg-[#eaebed] rounded-xl">Navegar</Link>
          </div>
          <div className="group hover:scale-95 duration-300 p-[1vw] bg-white rounded-xl w-full h-[25vw] flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col gap-[0.3vw]">
              <BookCopy className="text-green-700" size={36} />
              <h1 className="text-[2vw] text-[#202125]">Educação</h1>
              <span className="text-[#3b3d44] text-[1vw]">Encontre giftcards dedicados ao aprendizado e desenvolvimento pessoal! Acesse cursos online, plataformas de idiomas, treinamentos profissionais e muito mais, com opções que ajudam você a investir no seu conhecimento de forma prática e acessível.</span>
            </div>
            <Link href={"/"} className="duration-300 group-hover:text-white group-hover:bg-[#ef4444] w-full items-center justify-center flex py-[0.5vw] bg-[#eaebed] rounded-xl">Navegar</Link>
          </div>
          <div className="group hover:scale-95 duration-300 p-[1vw] bg-white rounded-xl w-full h-[25vw] flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col gap-[0.3vw]">
              <Cpu className="text-green-700" size={36} />
              <h1 className="text-[2vw] text-[#202125]">Tecnologia</h1>
              <span className="text-[#3b3d44] text-[1vw]">Nossa ampla seleção de cartões-presente eletrônicos ajudará você a encontrar o que precisa, desde dispositivos de nicho até gigantes do setor.</span>
            </div>
            <Link href={"/"} className="duration-300 group-hover:text-white group-hover:bg-[#ef4444] w-full items-center justify-center flex py-[0.5vw] bg-[#eaebed] rounded-xl">Navegar</Link>
          </div>
          

        </div>

      </div>
      <div className="w-full h-fit flex flex-col">
        <h1 className="text-[2vw] text-[#202125]">Perguntas frequentes</h1>
        <Accordion type="single" collapsible className="w-full px-[2vw]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[1.5vw] text-[#202125]">Como recebo o giftcard após a compra?</AccordionTrigger>
            <AccordionContent className="text-[#3b3d44] text-[1vw]">
              Após a confirmação do pagamento, o giftcard será enviado automaticamente para o e-mail ou Whatsapp cadastrado na sua conta.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[1.5vw] text-[#202125]">O que devo fazer se não receber o giftcard no meu e-mail?</AccordionTrigger>
            <AccordionContent className="text-[#3b3d44] text-[1vw]">
              Primeiro, verifique sua caixa de spam ou promoções no e-mail cadastrado. Se ainda não encontrar o giftcard, acesse sua conta na plataforma e consulte a área -Meus Pedidos-. Caso o problema persista, entre em contato com nosso suporte para verificar a situação.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[1.5vw] text-[#202125]">O que faço se o código do giftcard não funcionar?</AccordionTrigger>
            <AccordionContent className="text-[#3b3d44] text-[1vw]">
              Se o código não funcionar, verifique se foi inserido corretamente e se está sendo usado na plataforma correta. Caso o problema persista, entre em contato com nosso suporte, informando os detalhes da compra. Nossa equipe solucionará o problema o mais rápido possível.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[1.5vw] text-[#202125]">Preciso criar uma conta para comprar um giftcard?</AccordionTrigger>
            <AccordionContent className="text-[#3b3d44] text-[1vw]">
              Sim, para garantir a segurança da sua compra e o envio correto do giftcard, é necessário criar uma conta na nossa plataforma. O processo é rápido e simples, e seus dados estarão protegidos de acordo com nossa política de privacidade.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-[1.5vw] text-[#202125]">Como posso acumular pontos?</AccordionTrigger>
            <AccordionContent className="text-[#3b3d44] text-[1vw]">
              Nossa plataforma oferece um programa de recompensas! A cada compra de giftcards, você acumula pontos automaticamente. O número de pontos varia de acordo com o valor gasto e promoções específicas. Esses pontos podem ser resgatados em descontos em compras futuras ou ofertas exclusivas.
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
      </div>

    </div>
  );
}

    'use client'
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Thumbs, } from 'swiper/modules';
    // import { useState } from 'react';
    import Image from 'next/image';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/thumbs';

    const Produto = () => {
      // const [thumbsSwiper, setThumbsSwiper] = useState(null);

      return (
        <div className="w-full h-fit flex flex-col gap-[2vw] px-[6vw] py-[2vw]">
          <div className="flex gap-[2vw]">
            {/* Lado Esquerdo - Imagens */}
            <div className="w-[45%] h-fit">
              <Swiper
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                className="w-full aspect-square rounded-xl overflow-hidden mb-[1vw]"
              >
                <SwiperSlide>
                  <Image 
                    src="/asset/cardcg.png" 
                    alt="Gift Card 1" 
                    width={1000} 
                    height={1000} 
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image 
                    src="/asset/cardcg.png" 
                    alt="Gift Card 2" 
                    width={1000} 
                    height={1000} 
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image 
                    src="/asset/cardcg.png" 
                    alt="Gift Card 3" 
                    width={1000} 
                    height={1000} 
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>

              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="thumbs-swiper h-[5vw]"
              >
                <SwiperSlide className="cursor-pointer rounded-xl overflow-hidden">
                  <Image 
                    src="/asset/cardcg.png" 
                    alt="Thumb 1" 
                    width={200} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer rounded-xl overflow-hidden">
                  <Image 
                    src="/asset/cardcg.png" 
                    alt="Thumb 2" 
                    width={200} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer rounded-xl overflow-hidden">
                  <Image 
                    src="/asset/cardcg.png" 
                    alt="Thumb 3" 
                    width={200} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Lado Direito - Informações */}
            <div className="w-[55%] h-fit flex flex-col gap-[1.5vw]">
              <div className="flex flex-col gap-[0.5vw]">
                <div className="flex items-center gap-[1vw]">
                  <span className="text-[0.9vw] bg-[#eaebed] px-[1vw] py-[0.3vw] rounded-xl">Jogos e eSports</span>
                  <span className="text-[0.9vw] bg-[#eaebed] px-[1vw] py-[0.3vw] rounded-xl">Steam</span>
                </div>
                <h1 className="text-[2.5vw] font-semibold text-[#202125]">Gift Card Steam R$50</h1>
                <div className="flex items-center gap-[1vw]">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-[1.2vw] h-[1.2vw] text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-[1vw] text-[#3b3d44]">(150 avaliações)</span>
                </div>
              </div>

              <div className="flex flex-col gap-[0.5vw]">
                <div className="flex items-center gap-[1vw]">
                  <span className="text-[2.5vw] font-bold text-[#202125]">R$42,50</span>
                  <span className="text-[1.5vw] line-through text-[#3b3d44]">R$50,00</span>
                  <span className="text-[1vw] bg-red-500 text-white px-[0.8vw] py-[0.3vw] rounded-xl">-15%</span>
                </div>
                <p className="text-[1vw] text-[#3b3d44]">Em até 12x sem juros</p>
              </div>

              <div className="flex flex-col gap-[1vw]">
                <h3 className="text-[1.2vw] font-medium text-[#202125]">Selecione o valor:</h3>
                <div className="grid grid-cols-4 gap-[1vw]">
                  <button className="px-[1vw] py-[0.5vw] border border-[#d7d9db] rounded-xl hover:border-[#77c555] text-[1vw]">R$ 20</button>
                  <button className="px-[1vw] py-[0.5vw] border border-[#77c555] bg-[#f5f6f7] rounded-xl text-[1vw]">R$ 50</button>
                  <button className="px-[1vw] py-[0.5vw] border border-[#d7d9db] rounded-xl hover:border-[#77c555] text-[1vw]">R$ 100</button>
                  <button className="px-[1vw] py-[0.5vw] border border-[#d7d9db] rounded-xl hover:border-[#77c555] text-[1vw]">R$ 250</button>
                </div>
              </div>

              <div className="flex gap-[1vw]">
                <div className="flex items-center gap-[0.5vw] border border-[#d7d9db] rounded-xl px-[1vw] py-[0.5vw]">
                  <button className="text-[1.2vw] text-[#202125] hover:text-[#77c555] duration-300">-</button>
                  <span className="text-[1vw] text-[#202125]">1</span>
                  <button className="text-[1.2vw] text-[#202125] hover:text-[#77c555] duration-300">+</button>
                </div>
                <button className="flex-1 bg-green-700 hover:bg-[#77c555] duration-300 text-white rounded-xl text-[1.2vw]">
                  Adicionar ao Carrinho
                </button>
              </div>

              <div className="flex flex-col gap-[1vw] mt-[1vw]">
                <h3 className="text-[1.2vw] font-medium text-[#202125]">Descrição</h3>
                <p className="text-[1vw] text-[#3b3d44] leading-relaxed">
                  O Gift Card Steam é a maneira perfeita de presentear os amantes de jogos. Com ele, é possível comprar jogos, DLCs, itens in-game e muito mais na Steam, a maior plataforma de jogos para PC do mundo.
                </p>
              </div>
            </div>
          </div>

          {/* Seção de Comentários */}
          <div className="w-full h-fit bg-white rounded-xl p-[2vw] mt-[2vw]">
            <h2 className="text-[2vw] font-semibold text-[#202125] mb-[2vw]">Avaliações dos Clientes</h2>
            
            <div className="flex flex-col gap-[2vw]">
              {/* Comentário Individual */}
              <div className="flex flex-col gap-[1vw] border-b border-[#d7d9db] pb-[2vw]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[3vw] h-[3vw] bg-[#eaebed] rounded-full flex items-center justify-center">
                    <span className="text-[1.2vw] font-medium text-[#202125]">JD</span>
                  </div>
                  <div>
                    <h4 className="text-[1.2vw] font-medium text-[#202125]">João Daniel</h4>
                    <div className="flex items-center gap-[0.5vw]">
                      <div className="flex">
                        {[1,2,3,4,5].map((star) => (
                          <svg key={star} className="w-[1vw] h-[1vw] text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-[0.9vw] text-[#3b3d44]">há 2 dias</span>
                    </div>
                  </div>
                </div>
                <p className="text-[1vw] text-[#3b3d44]">
                  Excelente produto! Entrega rápida e código funcionou perfeitamente. Recomendo!
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Produto; 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const BannerSoluctions = ({ bannerItems }) => {
  return (
    <div className="flex flex-col items-center bg-[#131112] text-white">
      <h1 className="text-3xl font-bold mb-5 mt-10 text-center px-4">
        Soluções personalizáveis Para Todas As Empresas
      </h1>
      <div className="w-full max-w-screen-xl px-4">
        <div className="block md:hidden mb-20">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {bannerItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#131112]">
                  <div className="z-10 p-5 rounded-lg">
                    <div className="mb-5">
                      <img
                        src={item.icon}
                        alt={`Ícone ${index + 1}`}
                        className="h-28 w-28 object-cover mx-auto mb-2"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {bannerItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#131112]"
            >
              <div className="z-10 p-5 rounded-lg">
                <div className="mb-5">
                  <img
                    src={item.icon}
                    alt={`Ícone ${index + 1}`}
                    className="h-28 w-28 object-cover mx-auto mb-2"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSoluctions;

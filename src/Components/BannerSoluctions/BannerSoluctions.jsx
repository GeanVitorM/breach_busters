import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const BannerSoluctions = ({ bannerItems }) => {
  return (
    <div className="flex flex-col items-center bg-[#131112] text-white px-4">
      <h1 className="text-3xl font-bold mb-5 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Soluções personalizáveis Para Todas As Empresas
      </h1>
      <div className="w-full max-w-screen-xl px-4">
        <div className="block md:hidden mb-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {bannerItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-2 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#131112]">
                  <div className="z-5 p-5 rounded-lg">
                    <div className="mb-5">
                      <img
                        src={item.icon}
                        alt={`Ícone ${index + 1}`}
                        className="h-36 w-36 object-cover ml-20"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h2>
                    <p style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {bannerItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#131112] max-w-xs mx-auto"
            >
              <div className="z-5 p-2 rounded-lg">
                <div className="mb-2">
                  <img
                    src={item.icon}
                    alt={`Ícone ${index + 1}`}
                    className="h-15 w-1/3 object-cover mx-auto mb-2"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h2>
                <p style={{ fontFamily: ' Anonymous Pro, sans-serif' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSoluctions;

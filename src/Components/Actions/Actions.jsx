import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import acao1 from '../../Images/Pull request-rafiki.png';
import acao2 from '../../Images/cyber-attack-pana.webp';

const Actions = () => {
  const cards = [
    {
      image: acao1,
      title: 'SOS RIO GRANDE DO SUL',
      description: 'A Breach Buster presta serviço e compartilha informação valiosa para que num momento de solidariedade a sua segurança não fique de lado.',
    },
    {
      image: acao2,
      title: 'Outro Título',
      description: 'Outra descrição importante sobre os serviços prestados pela Breach Buster.',
    },
  ];

  return (
    <div className="bg-[#202444] text-white min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ação!</h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="max-w-3xl w-full"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <div className="flex justify-center items-center w-full md:w-1/2">
              <img
                src={card.image}
                alt={card.title}
                className="w-full max-w-xs md:max-w-sm h-auto object-contain"
              />
            </div>
            <div className="text-center md:text-left w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>{card.title}</h2>
              <p className="text-lg md:text-xl mb-4" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>{card.description}</p>
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-block py-2 px-4 rounded-md text-lg font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Faça parte!
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Actions;

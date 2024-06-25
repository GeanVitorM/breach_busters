import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const BenefictsServices = ({ benefitsData }) => {
  return (
    <div className="bg-[#38347c] text-white py-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-6">Benefícios</h2>
        <p className="text-center mb-12 m-5">
          Ao simular ataques controlados, é possível identificar e corrigir vulnerabilidades antes que sejam exploradas por hackers maliciosos, mitigando riscos e protegendo seus dados e os de seus parceiros. Além disso, ajuda a cumprir requisitos regulatórios, proteger sua reputação e aumentar o conhecimento da equipe sobre práticas seguras de computação.
        </p>
        
        <div className="block md:hidden mb-20 px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
          >
            {benefitsData.map((benefit, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 w-72 h-96 mx-auto">
                  <h3 className="text-xl font-bold mb-2 text-center">{benefit.title}</h3>
                  <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-center">{benefit.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 h-96">
              <h3 className="text-xl font-bold mb-2 text-center">{benefit.title}</h3>
              <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 mx-auto mb-4" />
              <p className="text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full">
            BECOME BREACHLESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefictsServices;

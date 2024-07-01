import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const SoluctionCards = ({ soluctionData }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div id="solucoes" className="bg-[#202444] text-white m-44 mt-0 mb-0 my-20 px-4 lg:px-20" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="container py-4">
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold">Soluções</h1>
                    <p className="text-lg">
                        Realize testes e forneça sistemas de alta qualidade e segurança.
                        Simplifique o processo desde o desenvolvimento até a produção.
                        Obtenha insights profundos, identifique vulnerabilidades, priorize
                        brechas e corrija erros rapidamente.
                    </p>
                </div>
                {isMobile ? (
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                    >
                        {soluctionData.map(card => (
                            <SwiperSlide key={card.id}>
                                <a href={card.link} className="flex flex-col items-center p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg rounded-md hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300">
                                    <p className="text-lg text-center font-semibold mb-2">{card.title}</p>
                                    <div className="flex items-center">
                                        <img
                                            src={card.image}
                                            alt={`Imagem ${card.id}`}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <p className="ml-4 text-md">{card.description}</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {soluctionData.map(card => (
                            <a
                                key={card.id}
                                href={card.link}
                                className="rounded-md p-4 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300"
                            >
                                <div className="flex flex-col justify-between">
                                    <p className="text-lg text-center font-semibold mb-2">{card.title}</p>
                                    <div className="flex items-center">
                                        <img
                                            src={card.image}
                                            alt={`Imagem ${card.id}`}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <p className="ml-4 text-md">{card.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <div className="soluction-button text-center mt-4">
                <a 
                    href="#contact" 
                    className="glow-on-hover relative px-8 py-2 text-lg font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-transform transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5 active:shadow-md">
                    BECOME BREACHLESS
                </a>
            </div>
        </div>
    );
};

export default SoluctionCards;

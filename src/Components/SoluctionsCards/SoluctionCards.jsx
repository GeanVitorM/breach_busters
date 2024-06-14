import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const SoluctionCards = ({ soluctionData }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Detectar se a largura da tela é menor ou igual a 767px

    return (
        <div id="solucoes" className="bg-[#202444] text-white">
            <div className="container mx-auto py-4">
                <div className="text-center mb-8 px-4">
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
                        navigation
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                    >
                        {soluctionData.map(card => (
                            <SwiperSlide key={card.id}>
                                <a
                                    href={card.link}
                                    className="rounded-lg p-6 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300"
                                >
                                    <img
                                        src={card.image}
                                        alt={`Imagem ${card.id}`}
                                        className="w-20 h-20 object-cover mr-4 rounded-lg"
                                    />
                                    <div className="w-2/3">
                                        <p className="text-lg font-semibold mb-2">{card.title}</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {soluctionData.map(card => (
                            <a
                                key={card.id}
                                href={card.link}
                                className="rounded-lg p-6 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300"
                            >
                                <img
                                    src={card.image}
                                    alt={`Imagem ${card.id}`}
                                    className="w-20 h-20 object-cover mr-4 rounded-lg"
                                />
                                <div className="w-2/3">
                                    <p className="text-lg font-semibold mb-2">{card.title}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-center mt-4">
                <a href="#contact" className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full">
                    BECOME BREACHLESS
                </a>
            </div>
        </div>
    );
};

export default SoluctionCards;

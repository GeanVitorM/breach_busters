import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import icone1 from '../../Images/telescope.webp';
import icone2 from '../../Images/lock.webp';
import icone3 from '../../Images/choices (1).webp';

const Soluctions = () => {
    const cards = [
        {
            img: icone1,
            title: "Visibilidade",
            text: "Tenha visibilidade das brechas e vulnerabilidades do seu ambiente para tomar medidas proativas e mitigar possíveis riscos de segurança."
        },
        {
            img: icone2,
            title: "Segurança",
            text: "Implemente práticas de segurança avançadas para proteger seus sistemas contra ameaças cibernéticas, garantindo a integridade, confidencialidade e disponibilidade dos dados."
        },
        {
            img: icone3,
            title: "Controle",
            text: "Retome o controle do seu negócio, recupere o poder de direcionar os investimentos de segurança protegendo o que é mais valioso para sua empresa."
        }
    ];

    return (
        <div className="flex flex-col items-center bg-[#202444] pt-20 text-white">
            <h1 className="text-3xl font-bold mb-5 mt-10 text-center px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Soluções personalizáveis Para <span className="text-[#d11c9b]">Todas</span> As Empresas
            </h1>
            <div className="w-full max-w-screen-xl px-4">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]} // Remove Navigation daqui
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#202444]">
                                <div className="z-10 p-5 rounded-lg">
                                    <div className="mb-5">
                                        <img
                                            src={card.img}
                                            alt={`Ícone ${index + 1}`}
                                            className="h-28 w-28 object-cover mx-auto mb-2"
                                        />
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{card.title}</h2>
                                    <p style={{ fontFamily: 'Montserrat, sans-serif' }}>{card.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Soluctions;

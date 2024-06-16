import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clienteLogo from '../../Images/careca.png'; // Substitua com o caminho real da logo

const ClientCarrossel = () => {
    // Array de objetos com os dados dos depoimentos
    const testimonials = [
        {
            logo: clienteLogo, // Caminho da imagem da logo
            name: "CLIENTE LOGO",
            quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
        },
        {
            logo: clienteLogo,
            name: "CLIENTE LOGO",
            quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
        },
        {
            logo: clienteLogo,
            name: "CLIENTE LOGO",
            quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Desabilitar as setas de navegação
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="bg-gradient-to-r from-[#004AAD] to-[#CB6CE6] py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Precisa de mais provas?</h2>
                <div className="mx-auto max-w-xl relative">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="text-center">
                                <img src={testimonial.logo} alt={`${testimonial.name} Logo`} className="mx-auto mb-4 w-20 h-20 rounded-full" />
                                <p className="text-white font-bold">{testimonial.name}</p>
                                <p className="text-white mt-2">{testimonial.quote}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ClientCarrossel;

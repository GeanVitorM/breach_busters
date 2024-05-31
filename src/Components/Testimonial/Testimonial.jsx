import React, { useState } from 'react';
import perfil from "../../Images/careca.png";

const testimonials = [
    { id: 1, logo: perfil, text: 'Depoimento do cliente 1.' },
    { id: 2, logo: perfil, text: 'Depoimento do cliente 2.' },
    { id: 3, logo: perfil, text: 'Depoimento do cliente 3.' },
    { id: 4, logo: perfil, text: 'Depoimento do cliente 4.' },
    { id: 5, logo: perfil, text: 'Depoimento do cliente 5.' },
    { id: 6, logo: perfil, text: 'Depoimento do cliente 6.' },
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
    };

    const getClassName = (index) => {
        const position = (index - current + testimonials.length) % testimonials.length;

        switch (position) {
            case 0:
                return 'transform scale-110 z-10 opacity-100';
            case 1:
                return 'transform scale-90 z-0 opacity-70 translate-x-1/3';
            case testimonials.length - 1:
                return 'transform scale-90 z-0 opacity-70 -translate-x-1/3';
            default:
                return 'hidden';
        }
    };

    return (
        <div className="bg-[#3E4A89] w-full flex justify-center items-center py-10">
            <div className="relative w-full max-w-6xl">
                <div className="relative flex justify-center items-center overflow-hidden">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`absolute transition-transform duration-500 ease-in-out transform ${getClassName(index)}`}
                            style={{ width: '30%', transition: 'transform 0.5s' }}
                        >
                            <div className={`p-4 rounded-lg shadow-lg ${index === current ? 'bg-white' : 'bg-gray-200'}`}>
                                <img src={testimonial.logo} alt="Client Logo" className="w-24 h-24 object-contain mb-4 mx-auto" />
                                <p className="text-lg text-gray-700 text-center">{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20">
                    &#8249;
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20">
                    &#8250;
                </button>
                <div className="flex justify-center space-x-2 mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${current === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;

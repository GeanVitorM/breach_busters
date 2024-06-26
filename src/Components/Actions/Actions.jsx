import React, { useState, useEffect } from 'react';
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Tempo de mudança dos slides

    return () => clearInterval(interval);
  }, [cards.length]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }

    setTouchStartX(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="bg-[#202444] text-white py-12 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ação!</h1>
      <div
        className="relative flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="flex items-center justify-center w-full max-w-4xl space-x-8">
          <div className="w-1/2 md:w-1/3">
            <img
              src={cards[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="text-left w-1/2 md:w-2/3 lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>{cards[currentIndex].title}</h2>
              <p className="text-lg md:text-xl mb-4" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>{cards[currentIndex].description}</p>
            </div>
            <div className="mt-auto text-center">
              <a 
                href="#" 
                className="inline-block py-2 px-4 rounded-md text-lg font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Faça parte!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Actions;

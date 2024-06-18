import React, { useState, useEffect, useRef } from 'react';
import Relogio from "../../Images/relogio.webp";


const Benefits = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [textToShow, setTextToShow] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const cardsRef = useRef(null);

  const cards = [
    { id: 1, title: 'Por Que', subTitle: 'Saiba porque a Breach Busters é a escolha ideal', content: 'A Breach Busters domina o mercado Brasileiro e entende o contexto de segurança, aliamos paixão experiência e expertise formando uma trindade perfeita para ajudar o seu negocio a ser mais seguro.' },
    { id: 2, title: 'Privacidade', subTitle: 'Projetos em nivel TOP SECRET.', content: 'Seus dados estão seguros conosco, temos politicas severas a respeito dos dados dos nossos clientes e em breve atestaremos essas politicas com certificações como a 27001.Confidencialidade: Os projetos são confidenciais e somente para pessoas autorizadas. Todos os dados passam pelo processo de tratamento, tendo como fim sua destruição total.'},
    { id: 3, title: 'Profissionais', subTitle: 'Apaixonados pelo que fazem, e relevante pelo que entregam.', content: 'Somos fascinados pelo nosso trabalho, contamos com vasta experiência e certificados relevantes do mercado.Nosso time participa ativamente de comunidades, projetos open source e disseminam o conhecimento em prol de uma Internet mais segura ', }
  ];

  useEffect(() => {
    if (selectedCard) {
      const typingInterval = setInterval(() => {
        setTextToShow(prevText => {
          const newText = selectedCard.content.substring(0, typingIndex + 1);
          if (newText === selectedCard.content) {
            clearInterval(typingInterval);
          }
          setTypingIndex(prevIndex => prevIndex + 1);
          return newText;
        });
      }, 20);

      return () => clearInterval(typingInterval);
    }
  }, [selectedCard, typingIndex]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setTextToShow('');
    setTypingIndex(0);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className={`flex justify-center items-start py-4 bg-[#202444] text-white w-full mt-4 ${isMobile ? 'flex-col' : 'flex-row'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {isMobile ? (
        <>
          <div className="w-full space-y-4">
            {cards.map(card => (
              <div
                key={card.id}
                className="p-4 h-40 bg-[#303072] rounded-lg cursor-pointer border-l-4 flex items-center justify-center text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg"
                style={{ borderColor: '#141492' }}
                onClick={() => handleCardClick(card)}
              >
                <div>
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                  <p className="text-sm">{card.subTitle}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedCard && (
            <div className="mt-4 flex flex-col items-center">
              <div className="w-1/3 justify-center mb-4">
                
              </div>
              <div className="w-full bg-[#1A1A5C] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-white cursor-pointer md:cursor-default">
                  {selectedCard.title}
                </h3>
                <p className="text-white">{textToShow}</p>
              </div>
            </div>
          )}

          {!selectedCard && (
            <div className="mt-4 flex items-center justify-center w-full">
              <img src={Relogio} alt="Relógio" className="w-20 h-20" />
            </div>
          )}
        </>
      ) : (
        <>
          <div ref={cardsRef} className="w-1/3 space-y-4">
            {cards.map(card => (
              <div
                key={card.id}
                className="p-4 h-40 bg-[#303072] rounded-lg cursor-pointer border-l-4 flex items-center justify-center text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg"
                style={{ borderColor: '#141492' }}
                onClick={() => handleCardClick(card)}
              >
                <div>
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                  <p className="text-sm">{card.subTitle}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedCard && (
            <div className="ml-8 p-4 bg-[#303072] rounded-lg relative" style={{ width: '45vw', height: '34.3vw' }}>
              <>
                <h2 className="text-2xl font-bold">{selectedCard.title}</h2>
                <p className="mt-4">{textToShow}</p>
              </>
            </div>
          )}

          {!selectedCard && (
            <div className="ml-8 p-4 bg-[#303072] rounded-lg relative" style={{ width: '45vw', height: '34.3vw' }}>
              <img src={Relogio} className="flex items-center justify-center w-20 h-20" alt="Relógio" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Benefits;

import React, { useState, useEffect } from 'react';
import Relogio from "../../Images/relogio.webp";

const Benefits = () => {
  const cards = [
    { id: 1, title: 'Por Que', subTitle: 'Saiba porque a Breach Busters é a escolha ideal', content: 'A Breach Busters domina o mercado Brasileiro e entende o contexto de segurança, aliamos paixão experiência e expertise formando uma trindade perfeita para ajudar o seu negocio a ser mais seguro.' },
    { id: 2, title: 'Privacidade', subTitle: 'Projetos em nivel TOP SECRET.', content: 'Seus dados estão seguros conosco, temos politicas severas a respeito dos dados dos nossos clientes e em breve atestaremos essas politicas com certificações como a 27001.Confidencialidade: Os projetos são confidenciais e somente para pessoas autorizadas. Todos os dados passam pelo processo de tratamento, tendo como fim sua destruição total.' },
    { id: 3, title: 'Profissionais', subTitle: 'Apaixonados pelo que fazem, e relevante pelo que entregam.', content: 'Somos fascinados pelo nosso trabalho, contamos com vasta experiência e certificados relevantes do mercado.Nosso time participa ativamente de comunidades, projetos open source e disseminam o conhecimento em prol de uma Internet mais segura ' }
  ];

  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [textToShow, setTextToShow] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

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

  return (
    <div className="md:flex md:flex-row md:justify-center md:items-start py-2 bg-[#202444] text-white md:m-28 md:mt-0 md:mb-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="md:w-1/3 space-y-2 md:space-y-4 md:m-4">
        {cards.map(card => (
          <div
            key={card.id}
            className={`p-2 md:p-4 h-24 md:h-32 bg-[#303072] rounded-lg border-l-4 flex items-center justify-center text-center transition-all duration-300 ease-in-out transform ${selectedCard.id === card.id ? 'scale-105 bg-opacity-30 backdrop-filter backdrop-blur-lg' : ''}`}
            style={{ borderColor: '#d11c9b' }}
            onClick={() => handleCardClick(card)}
          >
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-[#d11c9b]">{card.title}</h2>
              <p className="text-xs md:text-sm">{card.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:mt-0 p-4 bg-[#303072] rounded-lg relative mt-4 lg:w-5/12 md:mt-4 w-full flex flex-col">
        {selectedCard ? (
          <div className="h-72 md:h-96">
            <h2 className="text-lg md:text-2xl font-bold text-[#d11c9b]">{selectedCard.title}</h2>
            <p className="mt-2 md:mt-4 text-white">{textToShow}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-72 md:h-96">
            <img src={Relogio} alt="Relógio" className="w-20 h-20" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Benefits;

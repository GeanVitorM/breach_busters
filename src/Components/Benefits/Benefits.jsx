import React, { useState, useEffect} from 'react';
import Relogio from "../../Images/relogio.webp";

const Benefits = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [textToShow, setTextToShow] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  const cards = [
    { id: 1, title: 'Por Que', subTitle: 'Saiba porque a Breach Busters é a escolha ideal', content: 'A Breach Busters domina o mercado Brasileiro e entende o contexto de segurança, aliamos paixão experiência e expertise formando uma trindade perfeita para ajudar o seu negocio a ser mais seguro.' },
    { id: 2, title: 'Privacidade', subTitle: 'Projetos em nivel TOP SECRET.', content: 'Seus dados estão seguros conosco, temos politicas severas a respeito dos dados dos nossos clientes e em breve atestaremos essas politicas com certificações como a 27001.Confidencialidade: Os projetos são confidenciais e somente para pessoas autorizadas. Todos os dados passam pelo processo de tratamento, tendo como fim sua destruição total.' },
    { id: 3, title: 'Profissionais', subTitle: 'Apaixonados pelo que fazem, e relevante pelo que entregam.', content: 'Somos fascinados pelo nosso trabalho, contamos com vasta experiência e certificados relevantes do mercado.Nosso time participa ativamente de comunidades, projetos open source e disseminam o conhecimento em prol de uma Internet mais segura ' }
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

  return (
    <div className="md:flex md:flex-row md:justify-center md:items-start py-4 bg-[#202444] text-white mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="md:w-1/3 space-y-3 md:m-4">
        {cards.map(card => (
          <div
            key={card.id}
            className="p-4 h-32 bg-[#303072] rounded-lg cursor-pointer border-l-4 flex items-center justify-center text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-lg"
            style={{ borderColor: '#d11c9b' }}
            onClick={() => handleCardClick(card)}
          >
            <div>
              <h2 className="text-2xl font-bold text-[#d11c9b]">{card.title}</h2>
              <p className="text-sm">{card.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:mt-0 p-4 bg-[#303072] md:rounded-lg relative lg:w-1/2 md:mt-4 w-full flex flex-col">
        {selectedCard ? (
          <div className="h-96">
            <h2 className="text-2xl font-bold text-[#d11c9b]">{selectedCard.title}</h2>
            <p className="mt-4 text-white">{textToShow}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-96">
            <img src={Relogio} alt="Relógio" className="w-20 h-20" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Benefits;

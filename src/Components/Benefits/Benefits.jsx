import React, { useState, useEffect, useRef } from 'react';
import Relogio from "../../Images/relogio.png";

const Benefits = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [textToShow, setTextToShow] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const cardsRef = useRef(null);

  const cards = [
    { id: 1, title: 'Expertise', content: 'Lorem ipsum massa auctor volutpat bibendum malesuada vitae odio, nostra tortor quisque eros bibendum aliquam tempus semper eleifend, etiam ligula. Lorem ipsum massa auctor volutpat bibendum malesuada vitae odio, nostra tortor quisque eros bibendum aliquam tempus semper eleifend, etiam ligula.' },
    { id: 2, title: 'Ofensivo', content: 'Lorem ipsum massa auctor volutpat bibendum malesuada vitae odio, nostra tortor quisque eros bibendum aliquam tempus semper eleifend, etiam ligula. Lorem ipsum massa auctor volutpat bibendum malesuada vitae odio, nostra tortor quisque eros bibendum aliquam tempus semper eleifend, etiam ligula.' },
    { id: 3, title: 'Framework', content: 'Lorem ipsum massa auctor volutpat bibendum malesuada vitae odio, nostra tortor quisque eros bibendum aliquam tempus semper eleifend, etiam ligula. Lorem ipsum massa auctor volutpat bibendum malesuada vitae odio, nostra tortor quisque eros bibendum aliquam tempus semper eleifend, etiam ligula.' }
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
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [selectedCard, typingIndex]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setTextToShow('');
    setTypingIndex(0);
  };

  return (
    <div className="flex justify-center items-start py-4 bg-[#3E4A89] text-white w-full mt-4">
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
              <p className="text-sm">lorem</p>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-8 p-4 bg-[#303072] rounded-lg" style={{ width: '45vw', height: '34.3vw' }}>
        {selectedCard ? (
          <>
            <h2 className="text-2xl font-bold">{selectedCard.title}</h2>
            <p className="mt-4">{textToShow}</p>
          </>
        ) : (
          <img src={Relogio} className="flex items-center justify-center w-20 h-20"/>
        )}
      </div>
    </div>
  );
};

export default Benefits;

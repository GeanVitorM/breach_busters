import React from 'react';
import illustration from '../../Images/Security On-bro.png';

const Home = ({ bgColor, title, subTitle, text }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen ${bgColor} text-white font-sans`}>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mt-20 mb-4">
            {title}
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#d11c9b]">
            {subTitle}
          </h2>
          <p className="text-lg mb-8">
            {text}
          </p>
          <a href="#contact" className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full">
            BECOME BREACHLESS
          </a>
        </div>
        <div className="md:w-2/3 flex items-center justify-center mt-8 md:mt-0"> {/* Alterado para md:w-2/3 */}
          <img src={illustration} alt="Illustration" className="w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import illustration from '../../Images/Cyber attack-pana.svg';

const Home = ({ bgColor, title, subTitle, text }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen ${bgColor} text-white font-sans`}>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto ">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-7xl text-6xl font-bold " style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
            {title}
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#d11c9b]" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
            {subTitle}
          </h2>
          <p className="text-lg mb-8" style={{ fontFamily: 'Montserrat , sans-serif' }}>
            {text}
          </p>
          <a href="#contact" className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full">
            BECOME BREACHLESS
          </a>
        </div>
        <div className="md:w-2/3 flex items-center justify-center mt-1 md:mt-0">
          <img src={illustration} alt="Illustration" className="w-2/3 md:w-5/6 px-6 ml-6" />
        </div>
      </div>
    </div>
  );
};

export default Home;

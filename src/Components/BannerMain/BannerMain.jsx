import React from 'react';
import illustration from '../../Images/cyber-attack-pana.webp';
import { ReactTyped as Typed } from 'react-typed'; 

const BannerMain = ({ bgColor, title, text , subTitle}) => {
  return (
    <div className={`flex mb-0 mt-10 m-0 items-center justify-center min-h-screen ${bgColor} text-white font-sans`}>
      <div className="md:flex flex-col md:flex-row md:items-center md:justify-between md:mx-20 m-6">
        <div className="md:w-2/3 text-center md:text-left md:ml-24 md:mr-8"> {/* Aumentada a margem esquerda */}
          <h1 className="md:text-7xl text-6xl font-bold mt-12 md:mt-12" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
            {title}
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold md:mb-4 text-[#d11c9b]" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
           {subTitle}
          </h2>
          <p className="mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {text}
          </p>
          <a href="#contact" className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full">
            BECOME BREACHLESS
          </a>
        </div>
        <div className="md:w-2/3 flex items-center justify-center md:mt-1 md:mt-0 ">
          <img src={illustration} alt="Illustration" className="w-2/4 md:w-5/6 px-4" />
        </div>
      </div>
    </div>
  );
};

export default BannerMain;

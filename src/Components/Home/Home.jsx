import React from 'react';
import illustration from '../../Images/Security On-bro.png'; 

const Home = ({ bgColor , title, text }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen ${bgColor} text-white`}>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-4">
            {title}
          </h1>
          <p className="text-lg mb-8">
           {text}
          </p>
          <a href="#contact" className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full">
            BECOME BREACHLESS
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={illustration} alt="Illustration" className="w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;

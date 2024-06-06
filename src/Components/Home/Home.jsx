import React from 'react';
import illustration from '../../Images/Security On-bro.png'; 

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#202444] text-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Bust<br />
            into the<br />
            Unexplored
          </h1>
          <p className="text-lg mb-8">
            Lorem ipsum massa auctor volutpat bibendum malesuada vitae odio, nostra tortor quisque eros bibendum aliquam tempus semper eleifend, etiam ligula.
          </p>
          <button className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full">
            BECOME BREACHLESS
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={illustration} alt="Illustration" className="w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;

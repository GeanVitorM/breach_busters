// src/components/BannerTs.js
import React from 'react';

const BannerSoluctions = ({ bannerItems }) => {
  return (
    <div className="flex flex-col items-center bg-[#000000] text-white">
      <h1 className="text-3xl font-bold mb-5 mt-10 text-center px-4">
        Soluções personalizáveis Para Todas As Empresas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 px-4 w-full max-w-screen-xl">
        {bannerItems.map((item, index) => (
          <div
            key={index}
            className="text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#000000]"
          >
            <div className="z-10 p-5 rounded-lg">
              <div className="mb-5">
                <img
                  src={item.icon}
                  alt={`Ícone ${index + 1}`}
                  className="h-28 w-28 object-cover mx-auto mb-2"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSoluctions;

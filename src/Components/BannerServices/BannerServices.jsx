import React from 'react';

const BannerServices = ({ title, description, buttonText, buttonLink, backgroundLeft, backgroundRight }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-indigo-900 to-purple-700 p-10 mt-0">
      <div className="flex flex-col lg:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
        <div
          className="text-white flex items-center justify-center p-10"
          style={{ background: backgroundLeft }}
        >
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <div
          className="text-white p-10"
          style={{ background: backgroundRight }}
        >
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="mb-6">{description}</p>
          <a
            href={buttonLink}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white py-2 px-4 rounded-full transition duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerServices;

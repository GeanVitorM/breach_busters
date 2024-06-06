import React from 'react';

const EthicalHacking = () => {
  return (
    <div className="flex justify-center items-center  bg-gradient-to-r from-indigo-900 to-purple-700 p-10 mt-0">
      <div className="flex flex-col lg:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
        <div className="bg-black text-white flex items-center justify-center p-10">
          <p className="text-2xl font-bold">APIs e a facilidade de hackear.</p>
        </div>
        <div className="text-white p-10 bg-gradient-to-r from-[#3E4A89] to-purple-700">
          <h2 className="text-2xl font-bold mb-4">Ethical Hacking no Combate</h2>
          <p className="mb-6">
            Entenda por que as APIs facilitam a vida dos agentes maliciosos. Se uma vez era normal realizar toda uma sequência de passos para obter informação sensível, hoje basta uma requisição.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white py-2 px-4 rounded-full transition duration-300">
            VEJA COMO AS APIS SÃO ALVOS FÁCEIS
          </button>
        </div>
      </div>
    </div>
  );
};

export default EthicalHacking;

import React from 'react';
import illustration from '../../Images/Security On-bro.png';
import icone1 from '../../Images/certificado.png';
import icone2 from '../../Images/navegador-da-web.png';
import icone3 from '../../Images/painel-de-controle.png';

const BannerTs = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#141414] text-white">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Teste<br />
              De<br />
              Intrusão.
            </h1>
            <p className="text-lg mb-8">
              Ao digitalizar sua presença, você se expõe a riscos invisíveis, com potenciais vulnerabilidades sendo alvo de cibercriminosos,
              ameaçando seus clientes, parceiros e a operação do negócio. Para atender aos padrões regulatórios e proteger sua reputação, é
              crucial ter uma equipe de especialistas em segurança cibernética. Eles aplicam técnicas avançadas e conhecimento especializado
              para identificar e corrigir vulnerabilidades, fortalecendo sua infraestrutura digital.
            </p>
            <button className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full">
              BECOME BREACHLESS
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center  md:mt-0">
            <img src={illustration} alt="Illustration" className="w-2/3 md:w-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#141414] text-white">
        <h1 className="text-3xl font-bold mb-5 mt-10 text-center px-4">Soluções personalizáveis Para Todas As Empresas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 px-4 w-full max-w-screen-xl">
          <div className="text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#141414]">
            <div className="z-10 p-5 rounded-lg">
              <div className="mb-5">
                <img
                  src={icone1}
                  alt="Ícone 1"
                  className="h-28 w-28 object-cover mx-auto mb-2"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">Visibilidade</h2>
              <p>Lorem ipsum massa auctor volutpat bibendum alesuada Lorem ipsum massa.</p>
            </div>
          </div>
          <div className="text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#141414]">
            <div className="z-10 p-5 rounded-lg">
              <div className="mb-5">
                <img
                  src={icone2}
                  alt="Ícone 2"
                  className="h-28 w-28 object-cover mx-auto mb-2"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">Segurança</h2>
              <p>Lorem ipsum massa auctor volutpat bibendum alesuada Lorem ipsum massa.</p>
            </div>
          </div>
          <div className="text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#141414]">
            <div className="z-10 p-5 rounded-lg">
              <div className="mb-5">
                <img
                  src={icone3}
                  alt="Ícone 3"
                  className="h-28 w-28 object-cover mx-auto mb-2"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">Controle</h2>
              <p>Lorem ipsum massa auctor volutpat bibendum alesuada Lorem ipsum massa.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTs;

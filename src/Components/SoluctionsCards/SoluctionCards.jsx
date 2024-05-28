import React from 'react';
import img1 from '../../Images/hacker (1).png';
import img2 from '../../Images/abra-o-livro.png';
import img3 from '../../Images/simbolo-de-interface-de-codigo-de-pesquisa-de-uma-lupa-com-numeros-de-codigo-binario.png';
import img4 from '../../Images/espada.png';
import img5 from '../../Images/aviao-de-papel.png';
import img6 from '../../Images/servidor.png';

const SoluctionCards = () => {
    return (
        <div className="bg-[#3E4A89] text-white">
            <div className="container mx-auto py-8">
                <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold">Soluções</h1>
                    <p className="text-lg">
                        Lorem ipsum massa auctor volutpat bibendum malesuada vitae odio,
                        nostra tortor quisque eros bibendum aliquam tempus semper eleifend,
                        etiam ligula.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="rounded-lg p-6 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300">
                        <img src={img1} alt="Imagem 1" className="w-20 h-23 object-cover mr-4 rounded-lg" />
                        <div className="w-2/3">
                            <p className="text-lg font-semibold mb-2">Teste de intrusão</p>
                        </div>
                    </div>
                    <div className="rounded-lg p-6 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300">
                        <img src={img2} alt="Imagem 2" className="w-20 h-23 object-cover mr-4 rounded-lg" />
                        <div className="w-2/3">
                            <p className="text-lg font-semibold mb-2">Treinamentos</p>
                        </div>
                    </div>
                    <div className="rounded-lg p-6 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300">
                        <img src={img3} alt="Imagem 3" className="w-20 h-23 object-cover mr-4 rounded-lg" />
                        <div className="w-2/3">
                            <p className="text-lg font-semibold mb-2">Engenharia Reversa</p>
                        </div>
                    </div>
                    <div className="rounded-lg p-6 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300">
                        <img src={img4} alt="Imagem 4" className="w-20 h-23 object-cover mr-4 rounded-lg" />
                        <div className="w-2/3">
                            <p className="text-lg font-semibold mb-2">Red Team</p>
                        </div>
                    </div>
                    <div className="rounded-lg p-6 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300">
                        <img src={img5} alt="Imagem 5" className="w-20 h-23 object-cover mr-4 rounded-lg" />
                        <div className="w-2/3">
                            <p className="text-lg font-semibold mb-2">Phishing</p>
                        </div>
                    </div>
                    <div className="rounded-lg p-6 flex bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg hover:bg-opacity-20 hover:backdrop-blur-xl transition duration-300">
                        <img src={img6} alt="Imagem 6" className="w-20 h-23 object-cover mr-4 rounded-lg" />
                        <div className="w-2/3">
                            <p className="text-lg font-semibold mb-2">Negação de serviço</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoluctionCards;

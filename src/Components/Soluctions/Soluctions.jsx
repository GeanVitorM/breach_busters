import React from 'react';
import icone1 from '../../Images/TelescopioPixel.png';
import icone2 from '../../Images/cadeado (1).png';
import icone3 from '../../Images/jogos.png';

const Soluctions = () => {
    return (
        <div className="flex flex-col items-center bg-[#3E4A89] pt-20 text-white">
            <h1 className="text-3xl font-bold mb-5 mt-10 text-center px-4">Soluções personalizáveis Para Todas As Empresas</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 px-4 w-full max-w-screen-xl">
                <div className=" text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#3E4A89]">
                    <div className=" z-10 p-5 rounded-lg">
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
                <div className=" text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#3E4A89]">
                    <div className=" z-10 p-5 rounded-lg">
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
                <div className=" text-center p-5 rounded-lg transition duration-300 hover:bg-white/20 hover:backdrop-filter hover:backdrop-blur-lg bg-opacity-90 bg-[#3E4A89]">
                    <div className=" z-10 p-5 rounded-lg">
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
    );
};

export default Soluctions;

import React from 'react';
import icone1 from '../../Images/telescopio.png';
import icone2 from '../../Images/cadeado.png';
import icone3 from '../../Images/codigo.png';

const Soluctions = () => {
    return (
        <div className="flex text-white flex-col items-center justify-center bg-[#3E4A89]">
            <h1 className="text-3xl font-bold mb-8 mt-20">Soluções personalizáveis Para Todas As Empresas</h1>
            <div className="flex justify-between mb-20 mx-8">
                <div className="text-center mx-5">
                    <div className="mb-5">
                        <img src={icone1} alt="Ícone 1" className="h-20 w-20 mx-auto mb-2" />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">Visibilidade</h2>
                    <p>Lorem ipsum massa auctor
                        volutpat bibendum
                        alesuada Lorem ipsum
                        massa.</p>
                </div>
                <div className="text-center mx-5">
                    <div className="mb-5">
                        <img src={icone2} alt="Ícone 2" className="h-20 w-20 mx-auto mb-2" />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">Segurança</h2>
                    <p>Lorem ipsum massa auctor
                        volutpat bibendum
                        alesuada Lorem ipsum
                        massa.</p>
                </div>
                <div className="text-center mx-5">
                    <div className="mb-5">
                        <img src={icone3} alt="Ícone 3" className="h-20 w-20 mx-auto mb-2" />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">Controle</h2>
                    <p>Lorem ipsum massa auctor
                        volutpat bibendum
                        alesuada Lorem ipsum
                        massa.</p>
                </div>
            </div>
        </div>
    );
};

export default Soluctions;

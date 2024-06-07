import React from 'react';

const BlackSection = () => {
    return (
        <div className="bg-black text-white py-12 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Vamos incrementar sua segurança!</h1>
            <p className="text-lg md:text-2xl">Reduza o risco da sua empresa, conte com profissionais
                dedicados e experts.</p>
            <p className="text-lg md:text-2xl">Entre em contato para tomar a melhor decisão!</p>
            <button className="mt-4 bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full">
                BECOME BREACHLESS
            </button>
        </div>
    );
}

export default BlackSection;

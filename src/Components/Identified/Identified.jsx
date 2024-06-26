import React from 'react';

const Identified = () => {
    return (
        <div 
            className="text-white py-12 px-6 text-center" 
            style={{ 
                backgroundImage: 'linear-gradient(to right, #1e3a8a, #7e22ce)', // Ajuste o degradê conforme necessário
                fontFamily: 'Montserrat, sans-serif'
            }}
        >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Se identificou?</h1>
            <p className="text-lg md:text-2xl mb-2">Gostaria de fazer parte do time?</p>
            <p className="text-lg md:text-2xl mb-2">Nossos valores batem com os seus?</p>
            <p className="text-lg md:text-2xl mb-2">Quer tornar o mundo digital mais seguro?</p>
            <p className="text-lg md:text-2xl mb-6">Entre em contato para tomar a melhor decisão!</p>
            <div className="mt-4">
                <a 
                    href="https://www.linkedin.com/company/breachbusters/" 
                    className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full"
                >
                    Join Us
                </a>
            </div>
        </div>
    );
}

export default Identified;

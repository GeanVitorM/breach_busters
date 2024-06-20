import React from 'react';

const ValuesAndZens = () => {
    return (
        <div className="bg-[#202444] text-white py-12 px-6 text-center relative">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-white"></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: ' Anonymous Pro , sans-serif' }}>Valores e Zens</h1>
            <p className="text-base md:text-lg mb-8">Acreditamos no que fazemos e fazemos com paixão!</p>
            <div className="relative max-w-3xl mx-auto" >
                <div className="absolute -left-5 top-[-10%] bottom-[-10%] bg-[#1D2960] w-5 rounded-full" style={{ fontFamily: ' Montserrat , sans-serif' }}></div>
                <div className="relative bg-[#34347c] text-[#e8e8e8] font-mono p-6 pl-10 shadow-lg text-left">
                    <p><strong>I.</strong> Buscamos o perfeito depois do feito;</p>
                    <p><strong>II.</strong> Os detalhes importam;</p>
                    <p><strong>III.</strong> Mantemos as coisas simples;</p>
                    <p><strong>IV.</strong> Reaprendemos a aprender a todo momento;</p>
                    <p><strong>V.</strong> Ética não é negociável;</p>
                    <p><strong>VI.</strong> Erros não passam despercebidos;</p>
                    <p><strong>VII.</strong> Questionamos e colaboramos;</p>
                    <p><strong>VIII.</strong> Somos curiosos;</p>
                </div>
            </div>
        </div>
    );
}

export default ValuesAndZens;

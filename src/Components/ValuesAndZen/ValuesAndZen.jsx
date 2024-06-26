import React from 'react';

const ValuesAndZens = () => {
    return (
        <div className="bg-[#202444] text-white py-12 px-6 text-center relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: ' Anonymous Pro , sans-serif' }}>Valores e Zens</h1>
            <p className="text-base md:text-lg mb-8">Acreditamos no que fazemos e fazemos com paixão!</p>
            <div className="relative max-w-3xl mx-auto" >
                <div className="absolute -left-5 top-[-10%] bottom-[-10%] bg-[#1D2960] w-5 rounded-full"></div>
                <div className="relative bg-[#34347c] text-[#e8e8e8] font-mono p-6 pl-10 shadow-lg text-left"  style={{ fontFamily: ' Montserrat , sans-serif' }}>
                    <p><strong>1.</strong> Buscamos o perfeito depois do feito;</p>
                    <p><strong>2.</strong> Os detalhes importam;</p>
                    <p><strong>3.</strong> Mantemos as coisas simples;</p>
                    <p><strong>4.</strong> Reaprendemos a aprender a todo momento;</p>
                    <p><strong>5.</strong> Ética não é negociável;</p>
                    <p><strong>6.</strong> Erros não passam despercebidos;</p>
                    <p><strong>7.</strong> Questionamos e colaboramos;</p>
                    <p><strong>8.</strong> Somos curiosos;</p>
                </div>
            </div>
        </div>
    );
}

export default ValuesAndZens;

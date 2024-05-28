import React from 'react';
import Icone from '../../Images/Icone_Fundo_Transparente.png';

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-[#202444] text-white z-10">
            <div className="flex justify-between items-center px-16 py-6">
                <div className="flex items-center">
                    <img src={Icone} alt="Logo" className="w-12 h-18" />
                    <div className="mx-4 border-l-2 h-12 border-white"></div>
                    <h1 className="text-xl font-bold">Breach Busters</h1>
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li><a href="#sobre" className="hover:text-gray-300">Sobre</a></li>
                        <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
                        <li><a href="#solucoes" className="hover:text-gray-300">Soluções</a></li>
                        <li><a href="#hire-us" className="hover:text-gray-300">Hire Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

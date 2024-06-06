import React from 'react';
import Icone from '../../Images/Icone_Fundo_Transparente.png';

const Header = ({ bgColor }) => {
    return (
        <div className={`fixed top-0 left-0 w-full ${bgColor} text-white z-10 shadow-lg`}>
            <div className="flex justify-between items-center px-16 py-6">
                <div className="flex items-center">
                    <img src={Icone} alt="Logo" className="w-12 h-18" />
                    <div className="mx-4 border-l-2 h-12 border-white"></div>
                    <h1 className="text-xl font-bold tracking-wide">Breach Busters</h1>
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li className="group">
                            <a href="#sobre" className="hover:text-gray-200 relative">
                                Sobre
                                <span className="block h-0.5 bg-[#0C44A4] absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200"></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#blog" className="hover:text-gray-200 relative">
                                Blog
                                <span className="block h-0.5 bg-[#0C44A4] absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200"></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#solucoes" className="hover:text-gray-200 relative">
                                Soluções
                                <span className="block h-0.5 bg-[#0C44A4] absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200"></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#contact-us" className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full relative">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

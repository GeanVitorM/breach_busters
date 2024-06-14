import React from 'react';
import Icone from '../../Images/Icone_Fundo_Transparente.png';

const Header = ({ bgColor, textColor, linkContact }) => {
    return (
        <div className={`fixed top-0 left-0 w-full ${bgColor} z-10 shadow-lg`}>
            <div className={`flex justify-between items-center px-16 py-6 ${textColor}`}>
                <div className="flex items-center">
                    <a href="/"><img src={Icone} alt="Logo" className="w-12 h-18" /></a>
                    <div className={`mx-4 border-l-2 h-12 ${textColor}`}></div>
                    <a href="/">
                        <h1 className="text-xl font-bold tracking-wide" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
                            Breach Busters
                        </h1>
                    </a>
                </div>
                <div>
                    <ul className="flex space-x-10 font-bold " style={{ fontFamily: 'Anonymous Pro , sans-serif' }}>
                        <li className="group">
                            <a href="/About" className="hover:text-gray-200 relative">
                                Sobre
                                <span className={`block h-0.5 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200 ${textColor}`}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#blog" className="hover:text-gray-200 relative">
                                Blog
                                <span className={`block h-0.5 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200 ${textColor}`}></span>
                            </a>
                        </li>
                        <li className="group">
                            <a href="#solucoes" className="hover:text-gray-200 relative">
                                Soluções
                                <span className={`block h-0.5 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200 ${textColor}`}></span>
                            </a>
                        </li>
                        <li className="group" style={{ fontFamily: 'Tomorrow  , sans-serif' }}>
                            <a href={linkContact} className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-8 rounded-full relative">
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

import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import Icone from '../../Images/Icone_Fundo_Transparente.png';

const Header = ({ bgColor, textColor, linkContact }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`fixed top-0 left-0 w-full ${bgColor} z-10 shadow-lg`}>
            <div className={`flex justify-between items-center px-4 md:px-16 py-4 md:py-6 ${textColor}`}>
                <div className="flex items-center">
                    <a href="/"><img src={Icone} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" /></a>
                    <div className={`hidden md:block mx-4 border-l-2 h-8 md:h-12 ${textColor}`}></div>
                    <a href="/">
                        <h1 className="text-lg md:text-xl font-bold tracking-wide ml-2" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
                            Breach Busters
                        </h1>
                    </a>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4 md:space-x-10 font-bold" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
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
                        <li className="group" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
                            <a href={linkContact} className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 md:px-8 rounded-full relative">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="block md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="focus:outline-none">
                        {menuOpen ? <HiX className="w-8 h-8" /> : <HiOutlineMenu className="w-8 h-8" />}
                    </button>
                </div>
            </div>
            {/* Drawer para dispositivos móveis */}
            <div className={`fixed top-0 right-0 h-full w-64 ${bgColor} shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-20`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="focus:outline-none">
                        <HiX className="w-8 h-8 text-white" />
                    </button>
                </div>
                <nav className={`flex flex-col items-center py-4 text-white`}>
                    <ul className="flex flex-col space-y-4 text-center font-bold" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
                        <li>
                            <a href="/About" className="hover:text-gray-300">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#blog" className="hover:text-gray-300">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#solucoes" className="hover:text-gray-300">
                                Soluções
                            </a>
                        </li>
                        <li>
                            <a href={linkContact} className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Fundo transparente para clicar e fechar o menu */}
            {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-10 md:hidden" onClick={() => setMenuOpen(false)}></div>}
        </header>
    );
};

export default Header;

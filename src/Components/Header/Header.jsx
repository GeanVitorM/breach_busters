import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Header = ({ logo, bgColor, textColor, linkContact, soluctionLinks = [], logoSize }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [solucoesOpen, setSolucoesOpen] = useState(false);

    return (
        <header className={`fixed top-0 left-0 w-full ${bgColor} z-10 shadow-lg`}>
            <div className={`flex justify-between items-center px-2 py-2 md:px-8 lg:px-20 xl:px-40 md:m-24 md:mt-0 md:mb-0 ${textColor}`}>
                <div className="flex items-center">
                    <a href="/">
                        <img src={logo} alt="Logo" className={logoSize} />
                    </a>
                    <div className={`hidden md:block mx-4 border-l-2 h-12 md:h-16 ${textColor}`}></div>
                    <a href="/">
                        <h1 className="text-lg md:text-2xl font-bold tracking-wide ml-2" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
                            Breach Busters
                        </h1>
                    </a>
                </div>
                <nav className="hidden md:flex space-x-6 lg:space-x-12 font-bold items-center" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
                    <a href="/About" className="hover:text-gray-200 relative">
                        Sobre
                        <span className={`block h-0.5 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200 ${textColor}`}></span>
                    </a>
                    <a href="#blog" className="hover:text-gray-200 relative">
                        Blog
                        <span className={`block h-0.5 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200 ${textColor}`}></span>
                    </a>
                    <a href="#solucoes" className="hover:text-gray-200 relative">
                        Soluções
                        <span className={`block h-0.5 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-200 ${textColor}`}></span>
                    </a>
                    <div className='py-2 px-4 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 shadow-md hover:shadow-lg transition duration-300'>
                        <a href={linkContact} className="text-white hover:text-gray-200">
                            Entre Em Contato
                        </a>
                    </div>
                </nav>
                <div className="block md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="focus:outline-none">
                        {menuOpen ? <HiX className="w-8 h-8" /> : <HiOutlineMenu className="w-8 h-8" />}
                    </button>
                </div>
            </div>
            <div className={`fixed top-0 right-0 h-full max-w-xs w-full ${textColor} bg-opacity-90 ${bgColor} shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-20 backdrop-blur-lg`}>
                <div className="flex justify-between items-center px-4 py-6">
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="w-10 h-15" />
                        <h1 className="text-lg font-bold tracking-wide ml-2" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
                            Breach Busters
                        </h1>
                    </a>
                    <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="focus:outline-none">
                        <HiX className="w-8 h-8 text-white" />
                    </button>
                </div>
                <nav className="flex flex-col items-center py-4 text-white mt-4">
                    <ul className="flex flex-col space-y-4 text-center font-bold" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
                        <li>
                            <a href="/About" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#blog" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
                                Blog
                            </a>
                        </li>
                        <li>
                            <button
                                className="hover:text-gray-300 flex items-center justify-center w-full text-center"
                                onClick={() => setSolucoesOpen(!solucoesOpen)}
                            >
                                Soluções
                                <svg
                                    className={`w-5 h-5 ml-1 transform ${solucoesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {solucoesOpen && (
                                <ul className="mt-2 space-y-2">
                                    {soluctionLinks.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.href} className="hover:text-gray-300 block text-center" onClick={() => setMenuOpen(false)}>
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li>
                            <div className='py-2 px-8 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-600 hover:to-blue-600 shadow-md hover:shadow-lg transition duration-300'>
                                <a href={linkContact} className="text-white hover:text-gray-200" onClick={() => setMenuOpen(false)}>
                                    Contact Us
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-10 md:hidden" onClick={() => setMenuOpen(false)}></div>}
        </header>
    );
};

export default Header;

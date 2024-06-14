import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import skeletonLogo from '../../Images/Icone_Fundo_Transparente.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div>
                <div className="container mx-auto mt-5 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex flex-row items-center space-x-4">
                            <img src={skeletonLogo} alt="Logo" className="w-16 h-20 mb-4 md:mb-0" />
                            <h1 className="text-bold" style={{ fontFamily: 'Tomorrow, sans-serif' }}>Breach Busters</h1>
                        </div>
                        <div className="mt-4 text-center md:text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <h3 className="text-[#d11c9b] font-bold">Whatsapp</h3>
                            <p className="text-lg font-bold">(123) 456 - 7890</p>
                            <h3 className="mt-4 text-[#d11c9b] font-bold">Email</h3>
                            <p className="text-lg font-bold">hello@reallygreatsite.com</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start mt-8 md:mt-0 font-sans" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
                        <div className="mx-4">
                            <h4 className="font-bold text-[#d11c9b]">sobre</h4>
                            <ul>
                                <a href="/About"><li>About</li></a>
                            </ul>
                        </div>
                        <div className="mx-4">
                            <h4 className="font-bold text-[#d11c9b]">Blog</h4>
                            <ul>
                                <li>News</li>
                                <li>Tips</li>
                            </ul>
                        </div>
                        <div className="mx-4">
                            <h4 className="font-bold text-[#d11c9b]">Soluções</h4>
                            <ul>
                                <a href="/Soluctions/teste-de-intrusao"><li>Teste de Intrusão</li></a>
                                <a href="/Soluctions/Red-Team"><li>Red Team</li></a>
                                <a href="/Soluctions/treinamentos"><li>Treinamentos</li></a>
                                <a href="/Soluctions/pishing"><li>Phishing</li></a>
                                <a href="#"><li>DDoS</li></a>
                                <a href="/Soluctions/Engenharia-reversa"><li>Engenharia reversa</li></a>
                            </ul>
                        </div>
                        <div className="mx-4">
                            <h4 className="font-bold text-[#d11c9b]">Hire Us</h4>
                            <ul>
                                <li>Work with us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start mt-8 px-20" style={{ fontFamily: ' Montserrat, sans-serif' }}>
                    <div className="flex space-x-4 mb-4 w-full justify-start">
                        <a href="#"><FaLinkedin className="text-xl cursor-pointer" /></a>
                        <a href="#"><FaYoutube className="text-xl cursor-pointer" /></a>
                        <a href="#"><FaInstagram className="text-xl cursor-pointer" /></a>
                    </div>
                    <div className="w-full border-3 border-white-100 py-4 text-center text-sm text-gray-500 border-t-4 border-white mt-4 flex justify-between">
                        <div className="flex flex-wrap space-x-2">
                            <a href="/Policy" className="hover:underline">Política</a>
                            <a href="/Terms" className="hover:underline">Termos</a>
                            <a href="/Privace" className="hover:underline">Privacidade</a>
                            <a href="#!" className="hover:underline">Segurança</a>
                        </div>
                        <p>&copy; Breach buster todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import skeletonLogo from '../../Images/Icone_Fundo_Transparente.png'; // Substitua pelo caminho correto da sua imagem

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="m-9 border-4 border-purple-600">
                <div className="container mx-auto px-4 px-5 mt-5 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={skeletonLogo} alt="Logo" className="w-16 h-20 mb-4" />
                        <div className="mt-4 text-center md:text-left">
                            <h3 className="text-purple-600 font-bold">Whatsapp</h3>
                            <p className="text-lg font-bold">(123) 456 - 7890</p>
                            <h3 className="mt-4 text-purple-600 font-bold">Email</h3>
                            <p className="text-lg font-bold">hello@reallygreatsite.com</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start mt-8 md:mt-0 font-sans">
                        <div className="mx-4">
                            <h4 className="font-bold">sobre</h4>
                            <ul>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className="mx-4">
                            <h4 className="font-bold">Blog</h4>
                            <ul>
                                <li>News</li>
                                <li>Tips</li>
                            </ul>
                        </div>
                        <div className="mx-4">
                            <h4 className="font-bold">Soluções</h4>
                            <ul>
                                <li>Pentesting</li>
                                <li>Red Team</li>
                                <li>Treinamentos</li>
                                <li>Phishing</li>
                                <li>DDoS</li>
                                <li>Engenharia reversa</li>
                            </ul>
                        </div>
                        <div className="mx-4">
                            <h4 className="font-bold">Hire Us</h4>
                            <ul>
                                <li>Work with us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start mt-8 px-20">
                    <div className="flex space-x-4 mb-4 w-full justify-start">
                        <FaFacebook className="text-xl cursor-pointer" />
                        <FaTwitter className="text-xl cursor-pointer" />
                        <FaInstagram className="text-xl cursor-pointer" />
                    </div>
                    <div className="w-full border-3 border-white-100 py-4 text-center text-sm text-gray-500 border-t-4 border-white mt-4 flex justify-between">
                        <div className="flex flex-wrap space-x-2">
                            <a href="#!" className="hover:underline">Política</a>
                            <a href="#!" className="hover:underline">Termos</a>
                            <a href="#!" className="hover:underline">Privacidade</a>
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

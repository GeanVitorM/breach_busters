import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import skeletonLogo from '../../Images/Icone_Fundo_Transparente.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-row items-center space-x-4">
              <img src={skeletonLogo} alt="Logo" className="w-16 h-20 mb-4 md:mb-0" />
              <h1 className="font-bold text-center md:text-left" style={{ fontFamily: 'Tomorrow, sans-serif' }}>Breach Busters</h1>
            </div>
            <div className="mt-4 text-center md:text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <h3 className="text-[#d11c9b] font-bold">Whatsapp</h3>
              <p className="text-lg font-bold">(123) 456 - 7890</p>
              <h3 className="mt-4 text-[#d11c9b] font-bold">Email</h3>
              <p className="text-lg font-bold">hello@reallygreatsite.com</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div>
              <h4 className="font-bold text-[#d11c9b] text-center md:text-left">Sobre</h4>
              <ul className="text-center md:text-left">
                <li><a href="/About" className="hover:underline">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#d11c9b] text-center md:text-left">Blog</h4>
              <ul className="text-center md:text-left">
                <li>News</li>
                <li>Tips</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#d11c9b] text-center md:text-left">Soluções</h4>
              <ul className="text-center md:text-left">
                <li><a href="/Solutions/teste-de-intrusao" className="hover:underline">Teste de Intrusão</a></li>
                <li><a href="/Solutions/Red-Team" className="hover:underline">Red Team</a></li>
                <li><a href="/Solutions/treinamentos" className="hover:underline">Treinamentos</a></li>
                <li><a href="/Solutions/pishing" className="hover:underline">Phishing</a></li>
                <li><a href="#" className="hover:underline">DDoS</a></li>
                <li><a href="/Solutions/Engenharia-reversa" className="hover:underline">Engenharia reversa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#d11c9b] text-center md:text-left">Hire Us</h4>
              <ul className="text-center md:text-left">
                <li>Work with us</li>
              </ul>
            </div>
          </div>

          {/* Social Icons and Legal */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-4 mb-4">
              <a href="#"><FaLinkedin className="text-xl cursor-pointer" /></a>
              <a href="#"><FaYoutube className="text-xl cursor-pointer" /></a>
              <a href="#"><FaInstagram className="text-xl cursor-pointer" /></a>
            </div>
            <div className="text-center md:text-left">
              <div className="flex flex-wrap space-x-2 mb-2">
                <a href="/Policy" className="hover:underline">Política</a>
                <a href="/Terms" className="hover:underline">Termos</a>
                <a href="/Privacy" className="hover:underline">Privacidade</a>
                <a href="#!" className="hover:underline">Segurança</a>
              </div>
              <p className="text-sm text-gray-500">&copy; Breach Buster todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

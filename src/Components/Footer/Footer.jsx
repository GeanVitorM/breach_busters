import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import skeletonLogo from '../../Images/BREACH BUSTER HACKING CLUB.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto md:px-2 lg:px-14">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-row items-center space-x4">
              <img src={skeletonLogo} alt="Logo" className="w-1/3 h-1/3" />
            </div>
            <div className="mt-2 text-center md:text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <h3 className="text-[#d11c9b] font-bold">Whatsapp</h3>
              <p className="text-lg font-bold">(123) 456 - 7890</p>
              <h3 className="mt-2 text-[#d11c9b] font-bold">Email</h3>
              <p className="text-lg font-bold">hello@reallygreatsite.com</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mt-2 md:mt-0 font-sans" style={{ fontFamily: 'Anonymous Pro, sans-serif' }}>
            <div className="mx-4">
              <h4 className="font-bold text-[#d11c9b]">Sobre</h4>
              <ul>
                <li><a href="/About" className="hover:underline">About</a></li>
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
                <li><a href="/Soluctions/teste-de-intrusao" className="hover:underline">Teste de Intrusão</a></li>
                <li><a href="/Soluctions/Red-Team" className="hover:underline">Red Team</a></li>
                <li><a href="/Soluctions/treinamentos" className="hover:underline">Treinamentos</a></li>
                <li><a href="/Soluctions/pishing" className="hover:underline">Phishing</a></li>
                <li><a href="#" className="hover:underline">DDoS</a></li>
                <li><a href="/Soluctions/Engenharia-reversa" className="hover:underline">Engenharia reversa</a></li>
              </ul>
            </div>
            <div className="mx-4">
              <h4 className="font-bold text-[#d11c9b]">Hire Us</h4>
              <ul>
                <li><a href="https://www.linkedin.com/company/breachbusters/">Work with us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className="flex space-x-4 mb-4 justify-center md:justify-start w-full">
            <a href="https://www.linkedin.com/company/breachbusters/"><FaLinkedin className="text-xl cursor-pointer" /></a>
            <a href="#"><FaYoutube className="text-xl cursor-pointer" /></a>
            <a href="#"><FaInstagram className="text-xl cursor-pointer" /></a>
          </div>
          <div className="w-full border-3 border-white-100 py-4 text-center text-sm text-gray-500 border-t-4 border-white mt-2 flex justify-center md:justify-between">
            <div className="flex flex-wrap space-x-2">
              <a href="/Policy" className="hover:underline">Política</a>
              <a href="/Terms" className="hover:underline">Termos</a>
              <a href="/Privace" className="hover:underline">Privacidade</a>
              <a href="/" className="hover:underline">Segurança</a>
            </div>
            <p>&copy; Breach Busters todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import Benefits from '../Components/Benefits/Benefits';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Soluctions from '../Components/Soluctions/Soluctions';
import SoluctionCards from '../Components/SoluctionsCards/SoluctionCards';
import Footer from '../Components/Footer/Footer';
import logo from './../Images/Icone_Fundo_Transparente.webp';
import { bgColorHeader, bgColorHome, homeText, homeTitle, linkHeader, logoHeaderHome, soluctionCards, soluctionLinks, subTitle, textColorHeader } from './Config';
import ClientCarrossel from '../Components/ClientCarrosel/ClienteCarrosel';

function Main() {
  return (
    <div className="bg-[#202444]">
      <Header logo={logo}
        bgColor={bgColorHeader}
        linkContact={linkHeader}
        soluctionLinks={soluctionLinks}
        textColor={textColorHeader} />
      <Home bgColor={bgColorHome}
        title={homeTitle}
        subTitle={subTitle}
        text={homeText} />
      <Soluctions />
      <SoluctionCards soluctionData={soluctionCards} />
      <Benefits />
      <Contact />
      <ClientCarrossel />
      <Footer />
    </div>
  );
}

export default Main;

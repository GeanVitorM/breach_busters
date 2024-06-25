
import React from 'react';
import Benefits from '../Components/Benefits/Benefits';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import Home from '../Components/BannerMain/BannerMain';
import Soluctions from '../Components/Soluctions/Soluctions';
import SoluctionCards from '../Components/SoluctionsCards/SoluctionCards';
import Footer from '../Components/Footer/Footer';
import logo from './../Images/Icone_Fundo_Transparente.png';
import { bgColorHeader, bgColorHome, homeText, homeTitle, linkHeader, logoHeaderHome, soluctionCards, soluctionLinks, subTitle, textColorHeader } from './Config';
import ClientCarrossel from '../Components/ClientCarrosel/ClienteCarrosel';
import HomeMain from '../Components/HomeMain/HomeMain';

function Main() {
  return (
    <div className="bg-[#202444]">
      <Header logo={logo}
        bgColor={bgColorHeader}
        linkContact={linkHeader}
        soluctionLinks={soluctionLinks}
        textColor={textColorHeader}
        logoSize="w-15 h-16" />
      <HomeMain bgColor={bgColorHome}
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

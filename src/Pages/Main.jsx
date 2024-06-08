
import React from 'react';
import Benefits from '../Components/Benefits/Benefits';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Soluctions from '../Components/Soluctions/Soluctions';
import SoluctionCards from '../Components/SoluctionsCards/SoluctionCards';
import Footer from '../Components/Footer/Footer';
import { bgColorHeader, bgColorHome, homeText, homeTitle, linkHeader, subTitle } from './Config';

function Main() {
  return (
    <div className="bg-[#3E4A89]">
      <Header bgColor={bgColorHeader}
        linkContact={linkHeader} />
      <Home bgColor={bgColorHome}
        title={homeTitle}
        subTitle={subTitle}
        text={homeText} />
      <Soluctions />
      <SoluctionCards />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;


import React from 'react';
import Benefits from '../Components/Benefits/Benefits';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Soluctions from '../Components/Soluctions/Soluctions';
import SoluctionCards from '../Components/SoluctionsCards/SoluctionCards';
import Footer from '../Components/Footer/Footer';

function Main() {
  return (
    <div className="bg-[#3E4A89]">
      <Header bgColor="bg-[#202444]"/>
      <Home bgColor="bg-[#202444]"
            title="Start Bust
                    into the
                    Unexplored" 
            subTitle="Unexplored."
            text="Conte com profissionais dedicados para identificar brechas no seu 
                  ambiente e receba relatórios personalizados com informações relevantes para 
                  o seu negócio!"/>
      <Soluctions />
      <SoluctionCards />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;

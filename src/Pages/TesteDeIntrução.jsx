import React from 'react';
import Home from '../Components/Home/Home';
import BannerTs from '../Components/CardsTesteDi/BannerTs';
import Header from '../Components/Header/Header';
import BenefitsTdi from '../Components/BenefictTestDi/BenefictsTdi';
import MethodologyComponent from '../Components/MetodotologiSection/Metodologi';
import Contact from '../Components/Contact/Contact';
import EthicalHacking from '../Components/BannerHacking/EthicalHacking';
import Footer from '../Components/Footer/Footer';

const TesteDi = () => {
  return (
    <>
      <Header bgColor="bg-[#141414]" />
      <Home bgColor="bg-[#141414]"
            title="Teste
            De
            Intrusão."
            text="Ao digitalizar sua presença, você se expõe a riscos invisíveis, com potenciais 
                  vulnerabilidades sendo alvo de cibercriminosos, ameaçando seus clientes, parceiros e a 
                  operação do negócio. Para atender aos padrões regulatórios e proteger sua reputação, é 
                  crucial ter uma equipe de especialistas em segurança cibernética. Eles aplicam técnicas 
                  avançadas e conhecimento especializado para identificar e corrigir vulnerabilidades, 
                  fortalecendo sua infraestrutura digital."/>
      <BannerTs />
      <BenefitsTdi />
      <MethodologyComponent />
      <Contact />
      <EthicalHacking />
      <Footer />
    </>
  );
}

export default TesteDi;

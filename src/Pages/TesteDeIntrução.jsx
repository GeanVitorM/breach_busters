import React from 'react';
import BannerTs from '../Components/BannerTesteIntrusão/BannerTs';
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

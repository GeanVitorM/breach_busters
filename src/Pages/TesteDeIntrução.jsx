import React from 'react';
import BannerMain from '../Components/BannerMain/BannerMain';
import BannerTs from '../Components/BannerSoluctions/BannerSoluctions';
import Header from '../Components/Header/Header';
import Contact from '../Components/Contact/Contact';
import BannerServices from '../Components/BannerServices/BannerServices';
import Footer from '../Components/Footer/Footer';
import BenefictsServices from '../Components/BenefictsServices/BenefictsServices';
import Methodologies from '../Components/Methodologies/Methodologies';
import { MethodologiesData, MethodologiesDataTI, TitleHomeTI, bannerItems, benefitsData, bgColorHeader, bgColorTIHeader, bgColorTIHome, ethicalHackingContent, homeTextTI, homeTitle, linkHeaderTI,  soluctionLinksTI, textColorTI } from './Config';
import BannerSoluctions from '../Components/BannerSoluctions/BannerSoluctions';
import logo from './../Images/BREACH_BUSTER_HACKING_CLUB__1_-removebg-preview.webp'


const TesteDi = () => {
  return (
    <>
      <Header logo={logo}
      bgColor={bgColorTIHeader}
        linkContact={linkHeaderTI}
        textColor={textColorTI}
        soluctionLinks={soluctionLinksTI}
        logoSize="w-20 h-20"/>
      <BannerMain bgColor={bgColorTIHome}
        title={TitleHomeTI}
        text={homeTextTI}/>
      <BannerSoluctions bannerItems={bannerItems}/>
      <BenefictsServices benefitsData={benefitsData} />
      <Methodologies content={MethodologiesDataTI} />
      <Contact />
      <BannerServices {...ethicalHackingContent}/>
      <Footer />
    </>
  );
}

export default TesteDi;

import React from 'react';
import Home from '../Components/Home/Home';
import BannerTs from '../Components/BannerSoluctions/BannerSoluctions';
import Header from '../Components/Header/Header';
import Contact from '../Components/Contact/Contact';
import BannerServices from '../Components/BannerServices/BannerServices';
import Footer from '../Components/Footer/Footer';
import BenefictsServices from '../Components/BenefictsServices/BenefictsServices';
import Methodologies from '../Components/Methodologies/Methodologies';
import { MethodologiesData, TitleHomeTI, bannerItems, benefitsData, bgColorHeader, bgColorTIHeader, bgColorTIHome, ethicalHackingContent, homeTextTI, homeTitle, linkHeaderTI } from './Config';
import BannerSoluctions from '../Components/BannerSoluctions/BannerSoluctions';


const TesteDi = () => {
  return (
    <>
      <Header bgColor={bgColorTIHeader}
        linkContact={linkHeaderTI}/>
      <Home bgColor={bgColorTIHome}
        title={TitleHomeTI}
        text={homeTextTI}/>
      <BannerSoluctions bannerItems={bannerItems}/>
      <BenefictsServices benefitsData={benefitsData} />
      <Methodologies content={MethodologiesData} />
      <Contact />
      <BannerServices {...ethicalHackingContent}/>
      <Footer />
    </>
  );
}

export default TesteDi;

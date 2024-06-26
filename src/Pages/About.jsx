import Header from "../Components/Header/Header";
import Home from "../Components/BannerMain/BannerMain";
import AboutBB from "../Components/AboutBB/AboutBB";
import ValuesAndZens from "../Components/ValuesAndZen/ValuesAndZen";
import BlackSection from "../Components/BlackSection/BlackSection";
import Identified from "../Components/Identified/Identified";
import Footer from "../Components/Footer/Footer";
import logo from './../Images/Icone_Fundo_Transparente.png'
import { AboutBgColorHome, AboutbgColorHeader, aboutTitle, linkHeader,subTitleAbout,textColorAbout } from "./Config";
import BannerMain from "../Components/BannerMain/BannerMain";
import Actions from "../Components/Actions/Actions";

const About = () => {
    return (
        <>
            <Header logo={logo} 
            bgColor={AboutbgColorHeader}
                linkContact={linkHeader} 
                textColor={textColorAbout}
                logoSize="w-15 h-16"/>
            <BannerMain bgColor={AboutBgColorHome}
                title={aboutTitle}
                subTitle={subTitleAbout}
            />
            <AboutBB />
            <ValuesAndZens />
            <BlackSection />
            <Actions />
            <Identified />
            <Footer />
        </>
    )
}

export default About;
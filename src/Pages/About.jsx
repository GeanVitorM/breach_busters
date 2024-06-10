import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import AboutBB from "../Components/AboutBB/AboutBB";
import ValuesAndZens from "../Components/ValuesAndZen/ValuesAndZen";
import BlackSection from "../Components/BlackSection/BlackSection";
import Identified from "../Components/Identified/Identified";
import Footer from "../Components/Footer/Footer";
import { AboutBgColorHome, AboutbgColorHeader, aboutTitle, linkHeader, textColorAbout } from "./Config";

const About = () => {
    return (
        <>
            <Header bgColor={AboutbgColorHeader}
                linkContact={linkHeader} 
                textColor={textColorAbout}/>
            <Home bgColor={AboutBgColorHome}
                title={aboutTitle}
            />
            <AboutBB />
            <ValuesAndZens />
            <BlackSection />
            <Identified />
            <Footer />
        </>
    )
}

export default About;
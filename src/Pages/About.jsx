import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import AboutBB from "../Components/AboutBB/AboutBB";
import ValuesAndZens from "../Components/ValuesAndZen/ValuesAndZen";
import BlackSection from "../Components/BlackSection/BlackSection";
import Identified from "../Components/Identified/Identified";
import Footer from "../Components/Footer/Footer";

const About = () => {
    return (
        <>
            <Header bgColor="bg-[#202444]" />
            <Home bgColor="bg-[#202444]"
                title="Buscando um mundo digitalmente seguro...   "
                text="" />
            <AboutBB />
            <ValuesAndZens />
            <BlackSection />
            <Identified />
            <Footer />
        </>
    )
}

export default About;
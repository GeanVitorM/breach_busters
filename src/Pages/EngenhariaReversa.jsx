import BenefictsServices from "../Components/BenefictsServices/BenefictsServices";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Methodologies from "../Components/Methodologies/Methodologies";
import Contact from "../Components/Contact/Contact";
import { MethodologiesDataER, TitleHomeER, benefitsDataER, bgColorERHeader, bgColorERHome, ethicalHackingContentER, homeTextER, linkHeaderER, textColorER } from "./Config";
import BannerServices from "../Components/BannerServices/BannerServices";
import Footer from "../Components/Footer/Footer";

const EngenhariaReversa = () => {
    return (
        <>
            <Header bgColor={bgColorERHeader}
                linkContact={linkHeaderER} 
                textColor={textColorER}/>
            <Home bgColor={bgColorERHome}
                title={TitleHomeER}
                text={homeTextER} />
            <BenefictsServices benefitsData={benefitsDataER} />
            <Methodologies content={MethodologiesDataER} />
            <Contact linkContact="/" />
            <BannerServices {...ethicalHackingContentER} />
            <Footer />
        </>
    )
}

export default EngenhariaReversa;
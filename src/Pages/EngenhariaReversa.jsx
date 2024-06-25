import BenefictsServices from "../Components/BenefictsServices/BenefictsServices";
import BannerMain from '../Components/BannerMain/BannerMain';
import Header from "../Components/Header/Header";
import Methodologies from "../Components/Methodologies/Methodologies";
import Contact from "../Components/Contact/Contact";
import { MethodologiesDataER, MethodologiesDataTI, TitleHomeER, benefitsDataER, bgColorERHeader, bgColorERHome, ethicalHackingContentER, homeTextER, linkHeaderER, soluctionLinksER, textColorER } from "./Config";
import BannerServices from "../Components/BannerServices/BannerServices";
import Footer from "../Components/Footer/Footer";
import logo from './../Images/BREACH_BUSTER_HACKING_CLUB__1_-removebg-preview.webp'

const EngenhariaReversa = () => {
    return (
        <>
            <Header logo={logo}
            bgColor={bgColorERHeader}
                linkContact={linkHeaderER} 
                textColor={textColorER}
                soluctionLinks={soluctionLinksER}
                logoSize="w-20 h-20"/>
            <BannerMain bgColor={bgColorERHome}
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
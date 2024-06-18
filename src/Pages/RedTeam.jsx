import BannerSoluctions from '../Components/BannerSoluctions/BannerSoluctions';
import BenefictsServices from '../Components/BenefictsServices/BenefictsServices';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Methodologies from '../Components/Methodologies/Methodologies';
import Contact from '../Components/Contact/Contact';
import BannerServices from '../Components/BannerServices/BannerServices';
import Footer from '../Components/Footer/Footer';
import logo from './../Images/BREACH_BUSTER_HACKING_CLUB__1_-removebg-preview.webp'
import { TitleHomeRT, bannerItemsRT, benefitsDataRT, bgColorERHome, bgColorRTHeader, homeTextRT, linkHeaderRT, MethodologiesDataRT, ethicalHackingContentRT, textColorRT, soluctionLinksRT, logoHeaderRT } from './Config';

const RedTeam = () => {
    return (
        <>
            <Header logo={logo}
                bgColor={bgColorRTHeader}
                linkContact={linkHeaderRT}
                textColor={textColorRT}
                soluctionLinks={soluctionLinksRT} />
            <Home bgColor={bgColorERHome}
                title={TitleHomeRT}
                text={homeTextRT} />
            <BannerSoluctions bannerItems={bannerItemsRT} />
            <BenefictsServices benefitsData={benefitsDataRT} />
            <Methodologies content={MethodologiesDataRT} />
            <Contact />
            <BannerServices {...ethicalHackingContentRT} />
            <Footer />
        </>
    );
}

export default RedTeam;
import BannerInfo from "../Components/BannerInfo/BannerInfo";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TextInfo from "../Components/TextInfo/TextInfo";
import { DataTerms, bgColorTerms, linkContactTerms, textColorTerms, titleBannerTerms } from "./Config";
import logo from './../Images/Icone_Fundo_Transparente.webp';

const Terms = () => {
    return (
        <>
            <Header bgColor={bgColorTerms}
                logo={logo}
                linkContact={linkContactTerms}
                textColor={textColorTerms} />
            <BannerInfo title={titleBannerTerms}
                textColor={textColorTerms} />
            <TextInfo text={DataTerms} />
            <Footer />
        </>
    )
}

export default Terms;
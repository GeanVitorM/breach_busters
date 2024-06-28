import BannerInfo from "../Components/BannerInfo/BannerInfo";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TextInfo from "../Components/TextInfo/TextInfo";
import { bgColorPolicy, logoHeaderTerms, textColorPolicy, textPolicy, titleBannerPolicy } from "./Config";
import logo from './../Images/Icone_Fundo_Transparente.webp';

const Policy = () => {
    return (
        <>
            <Header logo={logo}
                bgColor={bgColorPolicy}
                textColor={textColorPolicy}
                linkContact={textPolicy}
                logoSize="w-15 h-16" />
            <BannerInfo title={titleBannerPolicy} />
            <TextInfo text={textPolicy}
                textColor={textColorPolicy} />
            <Footer />
        </>

    )
}

export default Policy;
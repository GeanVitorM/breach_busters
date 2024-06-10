import BannerInfo from "../Components/BannerInfo/BannerInfo";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TextInfo from "../Components/TextInfo/TextInfo";
import { DataTerms, bgColorTerms, linkContactTerms, textColorTerms, titleBannerTerms } from "./Config";


const Terms = () => {
    return (
        <>
            <Header bgColor={bgColorTerms}
                linkContact={linkContactTerms}
                textColor={textColorTerms} />
            <BannerInfo title={titleBannerTerms}
                textColor={textColorTerms} />
            <TextInfo text={DataTerms}/>
            <Footer />
        </>
    )
}

export default Terms;
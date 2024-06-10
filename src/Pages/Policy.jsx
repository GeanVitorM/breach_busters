import BannerInfo from "../Components/BannerInfo/BannerInfo";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TextInfo from "../Components/TextInfo/TextInfo";
import { bgColorPolicy, textColorPolicy, textPolicy, titleBannerPolicy } from "./Config";

const Policy = () => {
    return (
        <>
            <Header bgColor={bgColorPolicy}
                textColor={textColorPolicy}
                linkContact={textPolicy} />
            <BannerInfo title={titleBannerPolicy} />
            <TextInfo text={textPolicy}
                textColor={textColorPolicy} />
            <Footer />
        </>

    )
}

export default Policy;
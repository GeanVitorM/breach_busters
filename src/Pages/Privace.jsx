import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TextInfo from "../Components/TextInfo/TextInfo";
import { bgColorPrivace, linkContactPrivace, textColorPrivace, textPrivace } from "./Config";

const Privace = () => {
    return (
        <>
            <Header bgColor={bgColorPrivace}
                textColor={textColorPrivace}
                linkContact={linkContactPrivace} />
            <TextInfo text={textPrivace}/>
            <Footer />
        </>
    )
}

export default Privace;
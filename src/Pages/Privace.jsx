import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TextInfo from "../Components/TextInfo/TextInfo";
import { bgColorPrivace, linkContactPrivace, logoHeaderPrivace, textColorPrivace, textPrivace } from "./Config";
import logo from './../Images/Icone_Fundo_Transparente.webp';

const Privace = () => {
    return (
        <>
            <Header logo={logo}
                bgColor={bgColorPrivace}
                textColor={textColorPrivace}
                linkContact={linkContactPrivace} />
            <TextInfo text={textPrivace} />
            <Footer />
        </>
    )
}

export default Privace;
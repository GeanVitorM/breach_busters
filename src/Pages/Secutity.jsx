import ErrorComponent from "../Components/ErrorMsg/ErrorMsg";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import logo from './../Images/Icone_Fundo_Transparente.webp';
import { bgColorSecurity, linkContactSecurity, textColorSecurity } from "./Config";

const Security = () => {
    return (
        <>
            <Header logo={logo}
                bgColor={bgColorSecurity}
                linkContact={linkContactSecurity}
                textColor={textColorSecurity}
                logoSize="w-15 h-16"/>
            <ErrorComponent />
            <Footer/>
        </>
    )
}

export default Security;
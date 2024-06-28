import ErrorComponent from "../Components/ErrorMsg/ErrorMsg";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import logo from './../Images/BREACH_BUSTER_HACKING_CLUB__1_-removebg-preview.webp';
import { bgColorHeaderTE, linkHeaderTE, soluctionLinksTE, textColorTE } from "./Config";

const TesteDeEstresse = () => {
    return (
        <>
            <Header logo={logo}
                bgColor={bgColorHeaderTE}
                linkContact={linkHeaderTE}
                textColor={textColorTE}
                soluctionLinks={soluctionLinksTE}
                logoSize="w-20 h-20"/>
            <ErrorComponent />
            <Footer />
        </>
    )
}

export default TesteDeEstresse;
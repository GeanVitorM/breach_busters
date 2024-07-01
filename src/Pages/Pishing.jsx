import ErrorComponent from "../Components/ErrorMsg/ErrorMsg";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import logo from './../Images/BREACH_BUSTER_HACKING_CLUB__1_-removebg-preview.webp';
import { bgColorHeaderPishing, linkHeaderPishing, soluctionLinksPishing, textColorPishing } from "./Config";

const Phishing = () => {
    return (
        <>
            <Header logo={logo}
                bgColor={bgColorHeaderPishing}
                linkContact={linkHeaderPishing}
                textColor={textColorPishing}
                soluctionLinks={soluctionLinksPishing}
                logoSize="w-28 h-28 p-3" />
            <ErrorComponent />
            <Footer />
        </>
    )
}

export default Phishing;
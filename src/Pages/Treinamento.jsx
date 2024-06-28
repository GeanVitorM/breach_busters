import ErrorComponent from "../Components/ErrorMsg/ErrorMsg"
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import logo from './../Images/BREACH_BUSTER_HACKING_CLUB__1_-removebg-preview.webp';
import { bgColorHeaderTreinamentos, linkHeaderTreinamentos, soluctionLinksTreinamentos, textColorTreinamentos } from "./Config";

const Treinamento = () => {
    return (
        <>
            <Header logo={logo}
                bgColor={bgColorHeaderTreinamentos}
                linkContact={linkHeaderTreinamentos}
                textColor={textColorTreinamentos}
                soluctionLinks={soluctionLinksTreinamentos}
                logoSize="w-20 h-20" />
            <ErrorComponent />
            <Footer />
        </>
    )
}

export default Treinamento;
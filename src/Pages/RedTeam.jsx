import BannerSoluctions from '../Components/BannerSoluctions/BannerSoluctions';
import BenefictsServices from '../Components/BenefictsServices/BenefictsServices';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import { TitleHomeRT, bannerItems, bannerItemsRT, bgColorERHome, bgColorRTHeader, homeTextRT, linkHeaderRT } from './Config';

const RedTeam = () => {
    return (
        <>
            <Header bgColor={bgColorRTHeader}
                linkContact={linkHeaderRT} />
            <Home bgColor={bgColorERHome}
                title={TitleHomeRT} 
                text={homeTextRT}/>
            <BannerSoluctions bannerItems={bannerItemsRT} />
        </>
    );
}

export default RedTeam;
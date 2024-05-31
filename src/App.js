import { SofaIcon } from 'lucide-react';
import './App.css';
import Benefits from './Components/Benefits/Benefits';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Soluctions from './Components/Soluctions/Soluctions';
import SoluctionCards from './Components/SoluctionsCards/SoluctionCards';
// import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="bg-[#3E4A89]">
      <Header />
      <Home />
      <Soluctions />
      <SoluctionCards />
      <Benefits />
      <Contact />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;

import { SofaIcon } from 'lucide-react';
import './App.css';
import Benefits from './Components/Benefits/Benefits';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Soluctions from './Components/Soluctions/Soluctions';
import SoluctionCards from './Components/SoluctionsCards/SoluctionCards';

function App() {
  return (
    <>
    <Header />
    <Home />
    <Soluctions />
    <SoluctionCards />
    <Benefits />
    <Contact />
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import TesteDi from './Pages/TesteDeIntrução';
import EngRev from './Pages/EngenhariaReversa';
import About from './Pages/About';
import RedTeam from './Pages/RedTeam';
import Treinamento from './Pages/Treinamento';
import Phishing from './Pages/Pishing';
import TesteDeEstresse from './Pages/TesteDeEstresse';
import Terms from './Pages/Terms';
import Privace from './Pages/Privace';
import Policy from './Pages/Policy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Soluctions/teste-de-intrusao" element={<TesteDi />} />
        <Route path="/Soluctions/Engenharia-reversa" element={<EngRev />} />
        <Route path="/Soluctions/Red-Team" element={<RedTeam />} />
        <Route path="/Soluctions/treinamentos" element={<Treinamento />} />
        <Route path="/Soluctions/pishing" element={<Phishing />} />
        <Route path="/Soluctions/teste-de-estresse" element={<TesteDeEstresse />} /> 
        <Route path="/Terms" element={<Terms />} /> 
        <Route path="/Privace" element={<Privace />} /> 
        <Route path="/Policy" element={<Policy />} /> 
      </Routes>
    </Router>
  );
}

export default App;

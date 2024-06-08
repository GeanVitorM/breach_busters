import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import TesteDi from './Pages/TesteDeIntrução';
import EngRev from './Pages/EngenhariaReversa';
import About from './Pages/About';
import RedTeam from './Pages/RedTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/TesteDi" element={<TesteDi />} />
        <Route path="/About" element={<About />} />
        <Route path="/EngRev" element={<EngRev />} />
        <Route path="/RedTeam" element={<RedTeam />} />
      </Routes>
    </Router>
  );
}

export default App;

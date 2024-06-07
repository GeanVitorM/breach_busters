import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import TesteDi from './Pages/TesteDeIntrução';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/TesteDi" element={<TesteDi />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

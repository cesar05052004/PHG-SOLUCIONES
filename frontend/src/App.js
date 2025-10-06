import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SocialFabs from './components/SocialFabs';

function App() {
  return (
    <Router>
      <SocialFabs />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

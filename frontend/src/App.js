import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SocialFabs from './components/SocialFabs';
import Mision from './pages/Mision';
import Vision from './pages/Vision';
import Blog from './pages/blog';


function App() {
  return (
    <Router>
      <SocialFabs />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

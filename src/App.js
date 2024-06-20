// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/conatct/Contact';
import About from './components/about/About';


const App = () => {
  return (
    <Router>
        <div>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;

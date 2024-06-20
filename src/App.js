
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Sidebar from './components/sidebar/Sidebar';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/conatct/Contact';
import About from './components/about/About';

const App =() => {
  return (
    <div>
    <section id='HomePage'> 
    <Navbar/>
    <Hero/> 
    </section>
    <section> <Sidebar/> </section>
    <section id='About'><Parallax type="services"/> </section>
    <About/>
    <section id='Portfolio'><Parallax type='portfolio' /> </section>
     <section id='Services'><Services/></section>
    <Portfolio/>
    <section id='Contact'><Contact/> </section>     
    </div>
  );
}

export default App;
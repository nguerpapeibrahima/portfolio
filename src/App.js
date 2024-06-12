
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/sidebar';

const App =() => {
  return (
    <div>
    <section id='HomePage'> 
    <Navbar/>
    <Hero/> 
    </section>
    <section> <Sidebar/> </section>
    <section id='Services'>Services</section>
    <section id='Portfolio'>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section id='About'>About</section>
    <section id='Contact'>Contact</section>
     
    </div>
  );
}

export default App;

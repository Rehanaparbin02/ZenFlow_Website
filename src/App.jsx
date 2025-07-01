import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return(
    <div className="mainContainer">
      <Navbar />
      <HeroSection/>
      <About/>
      <Features/>
      <Contact/>
      <Footer/>
      <ScrollToTop />
    </div>
  );
};

export default App;

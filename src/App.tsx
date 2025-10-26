import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);
    document.body.style.overflow = '';

    setTimeout(() => {
      setShowPreloader(false);
    }, 350);
  };

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      <div
        className={`min-h-screen bg-[#0a0a0a] text-white transition-opacity duration-300 ${
          preloaderComplete ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'opacity' }}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

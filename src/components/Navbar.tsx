import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-2xl border-b border-[#00b7ff]/20 shadow-[0_0_30px_rgba(0,183,255,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="group relative text-2xl font-bold tracking-tighter transition-all duration-500"
          >
            <span className="text-gradient-electric">ZENITH</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] group-hover:w-full transition-all duration-500" />
          </button>

          <div className="hidden md:flex items-center space-x-10">
            {['Chi siamo', 'Progetti', 'Servizi', 'Contatti'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="group relative text-sm font-semibold text-gray-300 hover:text-white transition-all duration-500 tracking-wider uppercase"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] group-hover:w-full transition-all duration-500 rounded-full" />
                <span className="absolute inset-0 rounded-lg bg-[#00b7ff]/0 group-hover:bg-[#00b7ff]/10 transition-all duration-500 -z-10 blur-sm" />
              </button>
            ))}
          </div>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-[#00b7ff]/30 bg-[#00b7ff]/5 hover:border-[#00b7ff]/60 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-[#00b7ff]" />
            ) : (
              <Menu size={24} className="text-[#00b7ff]" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-[#00b7ff]/20 shadow-[0_10px_40px_rgba(0,183,255,0.2)] animate-fadeIn">
          <div className="px-6 py-6 space-y-5">
            {['Chi siamo', 'Progetti', 'Servizi', 'Contatti'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left text-base font-medium text-gray-300 hover:text-[#00b7ff] transition-all duration-300 py-2 border-l-2 border-transparent hover:border-[#00b7ff] pl-4 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

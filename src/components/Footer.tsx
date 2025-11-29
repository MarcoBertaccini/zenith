import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-[#00b7ff]/20 bg-black/80 backdrop-blur-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a] to-transparent" />

      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-[#00b7ff] to-transparent animate-shimmer" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-3 tracking-tighter">
              <span className="text-gradient-electric">ZENITH</span>
            </h3>
            <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">
              Beyond Intelligence.
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-[#00b7ff]/10 text-center">
          <p className="text-sm text-gray-500 tracking-wide">
            © {currentYear} ZENITH. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Linkedin, Instagram, Music } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Music, href: 'https://tiktok.com', label: 'TikTok' },
  ];

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

          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-2xl border border-[#00b7ff]/20 bg-gradient-to-br from-[#00b7ff]/5 to-[#8a2be2]/5 backdrop-blur-xl flex items-center justify-center hover:border-[#00b7ff]/60 hover:scale-110 transition-all duration-500"
                aria-label={social.label}
              >
                <social.icon size={22} className="text-gray-400 group-hover:text-[#00b7ff] transition-colors duration-500 relative z-10" />
                <div className="absolute inset-0 rounded-2xl bg-[#00b7ff]/0 group-hover:bg-[#00b7ff]/10 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0)] group-hover:shadow-[0_0_30px_rgba(0,183,255,0.3)] transition-shadow duration-500" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-[#00b7ff]/10 text-center">
          <p className="text-sm text-gray-500 tracking-wide">
            © {currentYear} ZENITH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
